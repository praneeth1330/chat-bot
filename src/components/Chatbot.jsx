// components/Chatbot.js
import React, { useState, useRef, useEffect } from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { PiWechatLogoBold } from "react-icons/pi";
import { VscChromeClose } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

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
      setIsLoading(true);
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
      "Apologies, experiencing a temporary setback. Will update soon.",
      "Encountered a hurdle, working on a solution. Thank you for your patience.",
      "Facing a challenge, but actively seeking alternatives. Appreciate your understanding.",
      "Apologies for the delay, exploring options to move forward.",
      "Regrettably stalled, but committed to finding a workaround.",
      "Experiencing a glitch, rest assured, resolution in progress.",
      "Temporary setback, but actively troubleshooting. Stay tuned.",
      "Encountered an obstacle, but working diligently to overcome it.",
      "Apologies for the inconvenience, seeking a quick resolution.",
      "Hit a snag, but confident in resolving it swiftly. Thank you for your understanding.",
    ];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: randomResponse, sender: "bot", prevMessage: message },
      ]);
      setIsLoading(false);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold   p-2 rounded-[100%]"
        onClick={toggleChatbot}
      >
        {isOpen ? (
          <CgClose className=" font-extrabold h-8  w-8 aspect-square " />
        ) : (
          <PiWechatLogoBold className=" w-10 h-10" />
        )}
      </button>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-4 w-xl">
          <h3 className="text-lg font-bold mb-2">Chatbot</h3>
          <div
            className="max-h-64 overflow-y-auto mb-4"
            ref={messagesContainerRef}
          >
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
            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
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

export default Chatbot;
