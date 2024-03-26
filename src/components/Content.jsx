// components/Content.js
import React from "react";

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to Amorphic AI</h2>
      <p className="mb-4">
        Amorphic AI is a cutting-edge artificial intelligence feature dedicated
        to pushing the boundaries of what's possible with machine learning and
        natural language processing.
      </p>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Our AI Solutions</h3>
        <ul className="list-disc pl-4">
          <li>Conversational AI for chatbots and virtual assistants</li>
          <li>Predictive analytics and decision support systems</li>
          <li>Computer vision and image recognition</li>
          <li>Natural language processing and text analysis</li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Why Choose Amorphic AI?</h3>
        <p className="mb-4">
          At Amorphic AI, we believe in the power of artificial intelligence to
          transform industries and improve people's lives. Our team of
          experienced researchers and engineers are dedicated to developing
          innovative AI solutions that are accurate, reliable, and ethical.
        </p>
        <h4 className="text-md font-bold mb-2">Cutting-Edge Technology</h4>
        <p className="mb-4">
          We stay at the forefront of AI research and development, constantly
          exploring new techniques and technologies to deliver the most advanced
          solutions to our clients.
        </p>
        <h4 className="text-md font-bold mb-2">Tailored Solutions</h4>
        <p className="mb-4">
          Our AI solutions are designed to meet the unique needs of each client,
          ensuring a seamless integration and optimal performance for their
          specific use cases.
        </p>
        <h4 className="text-md font-bold mb-2">Ethical and Responsible AI</h4>
        <p className="mb-4">
          We prioritize ethical and responsible AI development, ensuring our
          solutions are transparent, unbiased, and aligned with industry
          standards and regulations.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Our Success Stories</h3>
        <p className="mb-4">
          Amorphic AI has helped numerous clients across various industries
          leverage the power of AI to drive innovation, improve efficiency, and
          achieve their goals.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-md font-bold mb-2">Retail Analytics</h4>
              <p>
                Our predictive analytics solution helped a major retailer
                optimize their inventory management and reduce waste by 25%.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-md font-bold mb-2">
                Customer Service Chatbot
              </h4>
              <p>
                Our conversational AI chatbot improved customer satisfaction
                rates by 40% for a leading e-commerce company.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-md font-bold mb-2">Fraud Detection</h4>
              <p>
                Our natural language processing solution helped a financial
                institution detect and prevent fraudulent activities with 95%
                accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">
            Ready to experience the future?
          </h3>
          <p className="mb-4">
            Contact us today to learn more about our AI solutions.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
