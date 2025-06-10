import React, { useEffect } from 'react';

function Chatbox() {

    useEffect(() => {
        // // Fetch all messages when the component mounts
        // const fetchMessages = async () => {
        //     const response = await fetch('https://api.example.com/messages');
        //     const messages = await response.json();
        //     // You can set messages to state here
        // };
        // fetchMessages();
    }, []);


  return (
    <div className="chatbox">
        <h1 className="text-4xl font-bold mb-4">Chatbox</h1>
        <div className="chat-container">
            
        </div>
        {/* <input type="text" placeholder="Type your message..." className="input-box" /> */}
    </div>
  );
}

export default Chatbox;