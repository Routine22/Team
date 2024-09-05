import React from 'react';
import '../style/Footer.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';

function Footer() {
  return (
    <footer className='footer-container1'>

<div className='img-container'>
      <div className='guide-img'><img src={img1} alt='이미지1' /></div>
      <div className='guide-img'><img src={img2} alt='이미지2' /></div>
      <div className='guide-img'><img src={img3} alt='이미지3' /></div>
      <div className='guide-img'><img src={img4} alt='이미지4' /></div>
    </div>
      
    <div className="footer-container2">
      <div className="footer-content">
        <div className="footer-section">
          <p>소개팅</p>
        </div>

        <div className="footer-section2">
          <p>이용약관 | 개인정보처리방침 | 회사소개 | 이용안내</p>
        </div>
      </div>

      <div className="footer-details">
        <p>
          서비스명: 소개팅 | 회사명: 0000 | 대표: 이성근, 구민준, 고정수 | 사업자번호: 000-00-00000<br />
          주소: 서울 강동구 천호대로 1027 5층 일부<br />
          개인정보관리책임자: 유철호 | E-MAIL: 유철호@NAVER.COM
        </p>
      </div>

      <div className="footer-icons">
      <div className="icon" />
      <div className="icon" />
        <div className="icon" />
      </div>

      <div className="footer-bottom">
        <p>© 2024</p>
        <p>1:1 소개팅 전문 서비스입니다.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;