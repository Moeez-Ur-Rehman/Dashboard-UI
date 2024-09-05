import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy, FaSyncAlt } from 'react-icons/fa';
import { MdOutlineDownloadDone } from "react-icons/md";
import { PopInEffects } from '../../utilities/aos';
const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);
  const [strengthPassword, setStrengthPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [timeToCrack, setTimeToCrack] = useState('');

  PopInEffects();

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let characterList = '';

    if (includeUppercase) characterList += uppercaseChars;
    if (includeLowercase) characterList += lowercaseChars;
    if (includeNumbers) characterList += numberChars;
    if (includeSymbols) characterList += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomChar = characterList.charAt(
        Math.floor(Math.random() * characterList.length)
      );
      generatedPassword += randomChar;
    }

    setPassword(generatedPassword);
    setCopied(false);
  };
  
  

  const calculateStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 0:
        setStrength('Very Weak');
        setTimeToCrack('Instantly');
        break;
      case 1:
        setStrength('Weak');
        setTimeToCrack('A few seconds');
        break;
      case 2:
        setStrength('Medium');
        setTimeToCrack('A few minutes');
        break;
      case 3:
        setStrength('Strong');
        setTimeToCrack('Hours');
        break;
      case 4:
        setStrength('Very Strong');
        setTimeToCrack('Days');
        break;
      case 5:
        setStrength('Excellent');
        setTimeToCrack('Years');
        break;
      default:
        setStrength('');
        setTimeToCrack('');
    }
  };

  const handleStrengthPasswordChange = (e) => {
    const inputPassword = e.target.value;
    setStrengthPassword(inputPassword);
    calculateStrength(inputPassword);
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen p-4">
  <div className="generator-tester-section flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
    {/* Password Generator */}
    <div className="password-generator-container flex-1"data-aos="fade-right">
      <h2 className="text-lg font-bold">Secure Password Generator</h2>
      <p>Generate strong passwords and store them securely.</p>

      <div className="password-display flex items-center space-x-2">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={generatePassword} className="refresh-button p-2">
          <FaSyncAlt />
        </button>
      </div>

      <div className="length-slider mt-4">
        <label>Length: {length}</label>
        <input
          type="range"
          min="12"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="slider w-full"
        />
      </div>

      <div className="options mt-4 space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
            className="mr-2"
          />
          Uppercase Letters
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
            className="mr-2"
          />
          Lowercase Letters
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          Numbers
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
            className="mr-2"
          />
          Symbols
        </label>
      </div>

      <div className="copy-button mt-4">
        <CopyToClipboard text={password} onCopy={() => setCopied(true)}>
          <button className="copy-btn ">
            {copied ? <MdOutlineDownloadDone /> : <FaCopy className="copy-icon" />}
          </button>
        </CopyToClipboard>
      </div>
    </div>

    {/* Password Strength Tester */}
    <div className="password-strength-tester-container flex-1"data-aos="fade-left">
      <h2 className="text-lg font-bold">Password Strength Tester</h2>
      <p>How secure is your password? Find out with our strength tester.</p>

      <div className="password-strength-display mt-4">
        <input
          type="text"
          placeholder="Write your password"
          value={strengthPassword}
          onChange={handleStrengthPasswordChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="strength-indicator mt-4">
        <label>
          Strength: <strong>{strength}</strong>
        </label>
      </div>

      <div className="time-to-crack mt-2">
        <label>
          Time to crack: <strong>{timeToCrack}</strong>
        </label>
      </div>
    </div>
  </div>
</div>




    
  );
};

export default PasswordGenerator;
