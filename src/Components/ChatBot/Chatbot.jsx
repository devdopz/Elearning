import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatbotBodyRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      // Here you can add logic to handle the bot's response
    }
  };

  useEffect(() => {
    // Scroll to bottom of chatbot body on new message
    if (chatbotBodyRef.current) {
      chatbotBodyRef.current.scrollTop = chatbotBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed right-4 bottom-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleChatbot}
      >
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
      {isOpen && (
        <div className="fixed right-4 bottom-20 bg-white p-8 rounded-lg shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full"
                src="public/chatbotprofile.webp" // Replace with profile photo URL
                alt="Profile"
              />
              <span className="text-lg font-semibold">John Doe</span> {/* Replace with name */}
              <img
                className="w-10 h-10 rounded-full"
                src="public/BlueTick.png" // Replace with profile photo URL
                alt="Profile"
              />
            </div>
          </div>
          <div
            className="max-h-40 overflow-y-auto chatbot-body"
            ref={chatbotBodyRef}
            style={{
              /* Hide scrollbar for WebKit browsers */
              scrollbarWidth: 'none',
              /* Hide scrollbar for Firefox */
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.sender === 'user' ? 'bg-blue-100 text-black self-end mb-2' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-4">
            <input
              type="text"
              className="flex-grow border rounded-l-lg p-2"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
