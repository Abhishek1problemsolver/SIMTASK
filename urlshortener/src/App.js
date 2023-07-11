import React, { useState } from 'react';
import './App.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (url.includes('https://') || url.includes('http://')) {
      try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await response.json();
        const shortUrl = data.result.full_short_link2;
        setShortUrl(shortUrl);
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Not a valid URL');
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div className="container">
          <h1>URL Shortener</h1>
          <div className="input-row">
            <div className="logo-row"></div>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={handleInputChange}
              />
              <button type="submit">Shorten</button>
            </form>
          </div>
          {shortUrl && (
            <div className="output-row">
              <p>{shortUrl}</p>
              <ContentCopyIcon className="copy-button" onClick={handleCopyClick}>
                {isCopied ? 'Copied!' : 'Copy'}
              </ContentCopyIcon>
            </div>
          )}
        </div>
      </div>

      <footer>
        <p>© 2023 Developed by Abhishek DN.</p>
      </footer>
    </div>
  );
};

export default URLShortener;
