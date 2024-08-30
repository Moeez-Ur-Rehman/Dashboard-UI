import React, { useState, useCallback } from 'react';

// Helper function to format phone number
const formatPhone = (value) => {
  return String(value).replace(/(\d{3})(\d{3})(\d{4})/, '+1($1)$2-$3');
};

// Main Profile Component
const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    id: '22',
    name: 'Amelia Harper',
    image: 'https://via.placeholder.com/80', // replace with actual image URL
    email: 'ameliah@dx-email.com',
    phone: '1234567890',
    address: '405 E 42nd St',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    department: 'UI/UX',
    position: 'Designer',
    hiredDate: '3/3/2023',
    birthDate: '5/3/1980',
  });

  const [isChangePasswordPopupOpened, setIsChangedPasswordPopupOpened] = useState(false);

  // Simulated data change handler
  const dataChanged = useCallback(() => {
    console.log('Data changed');
  }, []);

  // Change password handler
  const changePassword = useCallback(() => {
    setIsChangedPasswordPopupOpened(true);
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      {/* Basic Info Section */}
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold' }}>Basic Info</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img src={profileData.image} alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '20px' }} />
          <div>
            <h3 style={{ fontSize: '20px', margin: '0' }}>{profileData.name}</h3>
            <p style={{ margin: '0', color: '#888' }}>ID: {profileData.id}</p>
          </div>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
            onClick={changePassword}
          >
            <span role="img" aria-label="lock" style={{ marginRight: '10px' }}>🔒</span>Change Password
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>First Name:</label>
            <input
              type="text"
              value={profileData.name.split(' ')[0]}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>Last Name:</label>
            <input
              type="text"
              value={profileData.name.split(' ')[1]}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>Department:</label>
            <input
              type="text"
              value={profileData.department}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>Position:</label>
            <input
              type="text"
              value={profileData.position}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>Hired Date:</label>
            <input
              type="text"
              value={profileData.hiredDate}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ color: '#555', fontWeight: 'bold' }}>Birth Date:</label>
            <input
              type="text"
              value={profileData.birthDate}
              onChange={dataChanged}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginTop: '5px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Contacts and Address Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Contacts Card */}
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Contacts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '10px' }}>
            <i className="fas fa-phone" style={{ fontSize: '24px', marginBottom: '10px' }} />
            <div>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>{formatPhone(profileData.phone)}</p>
              <p style={{ margin: '0', color: '#888' }}>{profileData.email}</p>
            </div>
          </div>
        </div>

        {/* Address Card */}
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Address</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '10px' }}>
            <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', marginBottom: '10px' }} />
            <div>
              <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
                {profileData.address}, {profileData.city}, {profileData.state}, {profileData.country}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Popup */}
      {isChangePasswordPopupOpened && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxWidth: '90%',
          width: '400px',
          textAlign: 'center'
        }}>
          <h3>Change Password</h3>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '4px', cursor: 'pointer', marginTop: '16px' }} onClick={() => setIsChangedPasswordPopupOpened(false)} >
                 Close </button>
               </div> )} 
              </div> ); 
          };

export default UserProfile;
