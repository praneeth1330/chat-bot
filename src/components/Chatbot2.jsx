// components/Chatbot.js
import React, { useState } from "react";
import chatIcon from "../assets/chatbot-icon.png";
import chatIconSvg from "../assets/chatbot-icon.svg";

const Chatbot2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, sender: "user" }]);
      respondToMessage(inputText);
      setInputText("");
    }
  };

  const respondToMessage = (message) => {
    const responses = [
      "Hello! How can I assist you today?",
      "I'm afraid I don't have a good response for that.",
      "Thank you for your message. Let me think about it.",
      "I appreciate your input, but I don't have a specific response for that.",
    ];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: randomResponse, sender: "bot", prevMessage: message },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleChatbot}
      >
        {isOpen ? (
          "X"
        ) : (
          <div className=" rounded-full">
            <img
              src={chatIconSvg}
              alt=""
              width={30}
              className=" rounded-full"
            />
          </div>
        )}
      </button>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-4 max-w-md">
          <h3 className="text-lg font-bold mb-2">Chatbot</h3>
          <div className="max-h-64 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div key={index} className="flex flex-col">
                {message.sender === "user" && (
                  <div className="bg-blue-100 rounded-lg p-2 mb-2">
                    {message.text}
                  </div>
                )}
                {message.sender === "bot" && (
                  <>
                    <div className="bg-gray-200 rounded-lg p-2 mb-2 self-start">
                      {message.prevMessage}
                    </div>
                    <div className="bg-gray-200 rounded-lg p-2 mb-2 self-end">
                      {message.text}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="border border-gray-400 rounded-lg py-2 px-3 w-full"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot2;
