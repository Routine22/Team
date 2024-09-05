import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {/* 고정 배경 이미지 */}
      <div className="background-image"></div>

      {/* 콘텐츠 영역 */}
      <div
        className="content"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <h1>아래로 스크롤 해주세요</h1>

      </div>

      <div className="extra-content">
      <Footer />
      </div>
      
    </div>
  );
};

export default App;
