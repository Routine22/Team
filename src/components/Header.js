import React, { useState } from 'react';
import '../style/Header.css'; // CSS 파일 경로 확인

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };  

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a className="brand" href="./">WEBSITE</a>
        <nav className="nav">
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="dropbtn">내려보기4</button>
            {showDropdown && (
              <div className="dropdown-content">
                <a href="#">리스트1</a>
                <a href="#">리스트2</a>
                <a href="#">리스트3</a>
              </div>
            )}
          </div>
          <a href="#" className="nav-link">소개</a>
          <a href="#" className="nav-link">안전</a>
          <a href="#" className="nav-link">고객지원</a>
          <a href="#" className="nav-link">다운로드</a>
          <a href="./BoardPage" className="nav-link active">커뮤니티</a>
         
        </nav>
        <button className="login-button">
            <a href="./LoginPage" style={{ color: 'inherit', textDecoration: 'none' }}>로그인</a>
          </button>
      </div>
    </header>
  );
}

export default Header;
