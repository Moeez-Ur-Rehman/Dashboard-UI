import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, storage } from './../../firebase/config'; // Your Firebase imports
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { PopInEffects } from '../../utilities/aos';
const ProfilePage = () => {
  const [user] = useAuthState(auth); // Get the current user
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [file, setFile] = useState(null);
  
  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setProfileData(userDoc.data());
        } else {
          console.log('No user profile found in Firestore.');
        }
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user]);
  PopInEffects();
  const handleSave = async () => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      if (file) {
        const storageRef = ref(storage, `users/${user.uid}/profilePicture`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          'state_changed',
          null,
          (error) => {
            console.error('Error uploading file:', error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(userDocRef, {
              ...profileData,
              profilePicture: downloadURL,
            });
          }
        );
      } else {
        await updateDoc(userDocRef, profileData);
      }

      setEditing(false);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 relative'>
    <div className="profile-container "data-aos="zoom-in">
      <h1 className="profile-title">Profile Page</h1>

      {user && (
        <>
          <p className="profile-info"><strong>Email:</strong> {user.email}</p>

          {!editing ? (
            <div className="profile-view">
              <img
                src={profileData.profilePicture || 'https://via.placeholder.com/100'} // Ensure fallback URL is valid
                alt="Profile"
                className="profile-picture"
              />
              <p className="profile-label"><strong>Display Name:</strong> {profileData.displayName || 'Not set'}</p>
              <p className="profile-label"><strong>Bio:</strong> {profileData.bio || 'Not set'}</p>
              <button className="profile-button" onClick={() => setEditing(true)}>Edit Profile</button>
            </div>
          ) : (
            <div className="profile-edit">
              <input
                type="text"
                value={profileData.displayName || ''}
                onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                placeholder="Enter display name"
                className="input-field"
              />
              <textarea
                value={profileData.bio || ''}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                placeholder="Enter bio"
                className="textarea-field"
              ></textarea>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} className="file-input" />
              <button className="profile-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );};

export default ProfilePage;
