import React, { useState } from 'react';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswords, setShowPasswords] = useState({});

  const [newEntry, setNewEntry] = useState({
    name: '',
    url: '',
    username: '',
    password: '',
    notes: '',
    shareWith: 'private',
    attachFiles: null,
  });

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry({
      name: '',
      url: '',
      username: '',
      password: '',
      notes: '',
      shareWith: 'private',
      attachFiles: null,
    });
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

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Main content */}
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Records Section */}
            <section className="lg:col-span-1 bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Records</h2>
              <ul className="space-y-4 max-h-96 overflow-y-auto">
                {entries.length === 0 ? (
                  <li className="text-gray-500">No records available</li>
                ) : (
                  entries.map((entry, index) => (
                    <li key={index} className="bg-gray-200 p-4 rounded-md">
                      {entry.shareWith === 'private' ? (
                        <>
                          <div className="mb-2">
                            <span className="font-semibold">Username:</span> {entry.username}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mb-2">
                            <span className="font-semibold">Name:</span> {entry.name}
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">URL:</span> {entry.url}
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">Username:</span> {entry.username}
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
                              {showPasswords[index] ? 'Hide' : 'Show'}
                            </button>
                          </div>
                          <div className="mb-2">
                            <span className="font-semibold">Notes:</span> {entry.notes}
                          </div>
                          {entry.attachFiles && (
                            <div className="mb-2">
                              <span className="font-semibold">Attached File:</span> {entry.attachFiles.name}
                            </div>
                          )}
                        </>
                      )}
                    </li>
                  ))
                )}
              </ul>
            </section>

            {/* Form Section */}
            <section className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
              <header className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Add Record</h1>
                <button
                  onClick={handleAddEntry}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
                >
                  + 
                </button>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newEntry.name}
                    onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                    placeholder="Record Name"
                  />
                </div>

                {/* URL Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Login URL</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newEntry.url}
                    onChange={(e) => setNewEntry({ ...newEntry, url: e.target.value })}
                    placeholder="Login URL"
                  />
                </div>

                {/* Username Input */}
                <div className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">Username</label>
                  <input
                    type="text"
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newEntry.username}
                    onChange={(e) => setNewEntry({ ...newEntry, username: e.target.value })}
                    placeholder="Username"
                  />
                </div>

                {/* Password Input */}
                <div className="flex flex-col relative">
                  <label className="font-semibold text-gray-700 mb-2">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newEntry.password}
                    onChange={(e) => setNewEntry({ ...newEntry, password: e.target.value })}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={generateRandomPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 px-3 py-1 rounded text-sm"
                  >
                    Generate
                  </button>
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
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={newEntry.notes}
                    onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
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
                      checked={newEntry.shareWith === 'mur'}
                      onChange={(e) => setNewEntry({ ...newEntry, shareWith: e.target.value })}
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
                      checked={newEntry.shareWith === 'private'}
                      onChange={(e) => setNewEntry({ ...newEntry, shareWith: e.target.value })}
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
                    className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => setNewEntry({ ...newEntry, attachFiles: e.target.files[0] })}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
