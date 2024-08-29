import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, setDoc, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { auth, db, storage } from '../../firebase/config'; // Ensure you import storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaEye,FaEyeSlash,FaEdit} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedEntry, setEditedEntry] = useState(null);
  const [user] = useAuthState(auth);
  // Fetching user records from Firestore
  
  useEffect(() => {
    const fetchUserRecords = () => {
      if (user) {
        const uid = user.uid;
  
        // Set up a listener for real-time updates using onSnapshot
        const unsubscribe = onSnapshot(collection(db, 'users', uid, 'records'), (snapshot) => {
          const userRecords = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setEntries(userRecords);
        });
  
        // Cleanup function to unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
      }
    };
  
    fetchUserRecords();
  }, [user]); // Dependency array should include 'user' to re-run when user changes
  
  const [newEntry, setNewEntry] = useState({
    name: '',
    url: '',
    username: '',
    password: '',
    notes: '',
    shareWith: 'private',
    attachFiles: null,
  });

   const handleAddRecord = async (record) => {
     const user = auth.currentUser;
     if (user) {
       const uid = user.uid;
       const userDocRef = doc(db, 'users', uid);
       const recordsCollectionRef = collection(userDocRef, 'records');
       await addDoc(recordsCollectionRef, record);
     }
  };

  const handleAddEntry = async () => {
    // Handle file upload if file exists
    const { name, url, username, password } = newEntry;

    // Check if all required fields are filled
    if (!name || !url || !username || !password) {
      alert("Please fill in all required fields: Name, URL, Username, and Password.");
      return;
    }
    let fileUrl = null;
    if (newEntry.attachFiles ) {
      const storageRef = ref(storage, `users/${auth.currentUser.uid}/${newEntry.attachFiles.name}`);
      await uploadBytes(storageRef, newEntry.attachFiles);
      fileUrl = await getDownloadURL(storageRef);
    }

    const entryWithFileUrl = { ...newEntry, attachFiles: fileUrl };
    setEntries([...entries, entryWithFileUrl]);
    setNewEntry({
      name: '',
      url: '',
      username: '',
      password: '',
      notes: '',
      shareWith: 'private',
      attachFiles: null,
    });
    handleAddRecord(entryWithFileUrl);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setNewEntry({ ...newEntry, password });
  };

  const toggleEntryPasswordVisibility = (index) => {
    setShowPasswords((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleEditEntry = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditedEntry({ ...entries[index] });
  };

  const handleSaveEdit = async () => {
    const { name, url, username, password } = editedEntry;

    // Check if all required fields are filled
    if (!name || !url || !username || !password) {
      alert("Please fill in all required fields: Name, URL, Username, and Password.");
      return;
    }
    const updatedEntries = [...entries];
    updatedEntries[editIndex] = editedEntry;
console.log(entries,editedEntry,updatedEntries);
    // Save the updated record to Firestore
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
  
      // Fetch all records in the collection
      const recordsSnapshot = await getDocs(collection(db, 'users', uid, 'records'));
      
      // Find the document that matches the edited entry
      const recordDoc = recordsSnapshot.docs.find(doc => doc.data().username === editedEntry.username);
  
      if (recordDoc) {
        const editID = recordDoc.id; // Get the document ID
  
        // Reference to the document
        const recordDocRef = doc(db, 'users', uid, 'records', editID);
        
        // Update the document with new data
        await setDoc(recordDocRef, editedEntry);
        
        console.log(`Updated record with ID: ${editID}`);
      } else {
        console.log('No matching record found for update.');
      }
    }
  

    setEntries(updatedEntries);
    resetEditingState();
  };
  const handledelete = async () => {
    const updatedEntries = [...entries];
  updatedEntries.splice(editIndex, 1);
  setEntries(updatedEntries);
console.log(entries,editedEntry,updatedEntries);
    // Save the updated record to Firestore
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
  
      // Fetch all records in the collection
      const recordsSnapshot = await getDocs(collection(db, 'users', uid, 'records'));
      
      // Find the document that matches the edited entry
      const recordDoc = recordsSnapshot.docs.find(doc => doc.data().username === editedEntry.username);
  
      if (recordDoc) {
        const editID = recordDoc.id; // Get the document ID
  
        // Reference to the document
        const recordDocRef = doc(db, 'users', uid, 'records', editID);
        
        // Update the document with new data
        await deleteDoc(recordDocRef);
        
        console.log(`Updated record with ID: ${editID}`);
      } else {
        console.log('No matching record found for update.');
      }
    }
  }

  const handleDiscardEdit = () => {
    resetEditingState();
  };

  const resetEditingState = () => {
    setIsEditing(false);
    setEditIndex(null);
    setEditedEntry(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-screen-xl mx-auto p-6">
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Records Section */}
            <section className="lg:col-span-1 bg-white shadow-md rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-4">Records</h2>
              <ul className="space-y-4 text-balance max-h-96 overflow-y-auto ">
                {entries.length === 0 ? (
                  <li className="text-gray-500">No records available</li>
                ) : (
                  entries.map((entry, index) => (
                    <li key={index} className="bg-gray-200 p-4 rounded-md">
                      <div className="mb-2">
                        <span className="font-semibold">Username:</span> {entry.username}
                      </div>
                      {entry.shareWith !== 'private' && (
                        <>
                          <div className="mb-2">
                            <span className="font-semibold">Name:</span> {entry.name}
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">URL:</span><p className="break-words">{entry.url}</p> 
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">Password:</span>{' '}
                            <input
                              type={showPasswords[index] ? 'text' : 'password'}
                              value={entry.password}
                              readOnly
                              className="bg-transparent border-none focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => toggleEntryPasswordVisibility(index)}
                              className="text-blue-500 ml-2"
                            >
                              {showPasswords[index] ? <FaEyeSlash /> : <FaEye />}
                            </button>
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">Notes:</span> {entry.notes}
                          </div>
                          {entry.attachFiles && (
                            <div className="mb-2">
                              <span className="font-semibold">Attached File:</span>{' '}
                              <a href={entry.attachFiles} target="_blank" rel="noopener noreferrer">
                                {entry.attachFiles.split('/').pop()}
                              </a>
                            </div>
                          )}
                        </>
                      )}
                      <div className="flex justify-end ">
                        <button
                          onClick={() => handleEditEntry(index)}
                          className="text-blue-500 text-xl "
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </section>

            {/* Form Section */}
            <section className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
              <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">{isEditing ? 'Edit Record' : 'Add Record'}</h1>
              </header>
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? editedEntry.name : newEntry.name}
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, name: e.target.value })
                        : setNewEntry({ ...newEntry, name: e.target.value })
                    }
                        name="name"
                        required
                    
                    placeholder="Record Name"
                  />
                </div>

                {/* URL Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Login URL</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? editedEntry.url : newEntry.url}
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, url: e.target.value })
                        : setNewEntry({ ...newEntry, url: e.target.value })
                    }
                    placeholder="Login URL"
                  />
                </div>

                {/* Username Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? editedEntry.username : newEntry.username}
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, username: e.target.value })
                        : setNewEntry({ ...newEntry, username: e.target.value })
                    }
                    placeholder="Username"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col relative">
                  <label className="font-semibold text-gray-700 mb-2">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? editedEntry.password : newEntry.password}
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, password: e.target.value })
                        : setNewEntry({ ...newEntry, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                  {!isEditing && (
                    <button
                      type="button"
                      onClick={generateRandomPassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded text-sm"
                    >
                      Generate
                    </button>
                  )}
                  <label className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={showPassword}
                      onChange={toggleShowPassword}
                    />
                    <span className="text-sm">Show password text</span>
                  </label>
                </div>

                {/* Notes Input */}
                <div className="flex flex-col md:col-span-2">
                  <label className="font-semibold text-gray-700 mb-2">Notes</label>
                  <textarea
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={isEditing ? editedEntry.notes : newEntry.notes}
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, notes: e.target.value })
                        : setNewEntry({ ...newEntry, notes: e.target.value })
                    }
                    placeholder="Add your notes here"
                  />
                </div>

                {/* Share With */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Share with</label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="share-mur"
                      name="shareWith"
                      value="mur"
                      checked={isEditing ? editedEntry.shareWith === 'mur' : newEntry.shareWith === 'mur'}
                      onChange={(e) =>
                        isEditing
                          ? setEditedEntry({ ...editedEntry, shareWith: e.target.value })
                          : setNewEntry({ ...newEntry, shareWith: e.target.value })
                      }
                      className="mr-2"
                    />
                    <label htmlFor="share-mur" className="mr-6">
                      The Team
                    </label>
                    <input
                      type="radio"
                      id="share-private"
                      name="shareWith"
                      value="private"
                      checked={isEditing ? editedEntry.shareWith === 'private' : newEntry.shareWith === 'private'}
                      onChange={(e) =>
                        isEditing
                          ? setEditedEntry({ ...editedEntry, shareWith: e.target.value })
                          : setNewEntry({ ...newEntry, shareWith: e.target.value })
                      }
                      className="mr-2"
                    />
                    <label htmlFor="share-private">
                      Only Me (Private) <span role="img" aria-label="lock">🔒</span>
                    </label>
                  </div>
                </div>

                {/* Attach Files */}
                <div className="flex flex-col md:col-span-2">
                  <label className="font-semibold text-gray-700 mb-2">Attach files</label>
                  <input
                    type="file"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      isEditing
                        ? setEditedEntry({ ...editedEntry, attachFiles: e.target.files[0] })
                        : setNewEntry({ ...newEntry, attachFiles: e.target.files[0] })
                    }
                  />
                </div>
              </div>
              {/* Save and Discard buttons for editing */}
              {isEditing && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handledelete}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-4 hover:bg-red-600 transition-all "
                  >
                    <MdDeleteOutline />
                  </button>
                  <button
                    onClick={handleDiscardEdit}
                    className="bg-white border border-bg-black text-black px-4 py-2 rounded mr-4 ml-4 hover:bg-blue-100 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
                  >
                    Save
                  </button>
                  
                </div>
              )}

              {/* Add button for adding new entries */}
              {!isEditing && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleAddEntry}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
                  >
                    Add Record
                  </button>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
