import React, { useState, useEffect } from 'react';
import '../App.scss'

function QuoteMachine() {
  const [content, setQuote] = useState('');
  const [author, setAuthor] = useState('');  
  
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        // Extract the quote and author from the API response
        const newQuote = data.content;
        const newAuthor = data.author;
  
        // Update the state with the new quote and author
        setQuote(newQuote);
        setAuthor(newAuthor);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []);  

  const handleNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        
        const newQuote = data.content;
        const newAuthor = data.author;
        setQuote(newQuote);
        setAuthor(newAuthor);
      })
      .catch(error => console.error('Error fetching quote:', error));
  };

  return (
    <div id="quote-box" className='quote-box'>
      <p id="text" className='text'>"{content}"</p>
      <p id="author" className='author'>- {author}</p>
      <button id="new-quote" className='btn btn-light' onClick={handleNewQuote}>New Quote</button>
      <a href="https://twitter.com/intent/tweet" target='_blank' rel='noreferrer' id="tweet-quote" className='tweet-quote btn btn-light'>
        Tweet
      </a>
      <footer className='footer'>
        <p className='footer-content'>by Agustina Beg-Gut</p>
      </footer>
    </div>
  );
  
}

export default QuoteMachine;