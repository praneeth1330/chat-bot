// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Chatbot from "./components/Chatbot";
import Chatbot2 from "./components/Chatbot2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <Content />
      </div>
      <Chatbot />

      {/* <Chatbot2 /> */}
    </div>
    // <>
    //   <BrowserRouter>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Content />} />
    //       {/* <Route path="/chatbot" element={<Chatbot />} />
    //       <Route path="/chatbot2" element={<Chatbot2 />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    //   <Chatbot2 />
    // </>
  );
}

export default App;
