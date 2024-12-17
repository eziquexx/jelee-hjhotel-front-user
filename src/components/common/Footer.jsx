import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './css/Footer.css';

export default function Footer() {
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태

  // 사용자 정보 가져오기
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/info", {
        method: "GET",
        credentials: "include", // JWT 쿠키 자동 전송
      });
      if (response.ok) {
        const data = await response.json();
        setUserInfo(data); // 사용자 정보 상태 저장
      } else {
        console.error("사용자 정보를 가져오지 못했습니다.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  // 컴포넌트 마운트 시 사용자 정보 가져오기
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
      <div id="Footer">
        <div className="Footer_container">
          <h2>
            <Link to="/main">slrklhiHOTEL</Link>
          </h2>
          <ul className='conection_foot'>
            <h3>CONTACT US</h3>
            <li>예약문의   1544-8082</li>
            <li>입금계좌  국민 004- 21-0848-651</li>
            <li>카톡문의  @HJ Hotel </li>
          </ul>
          <ul className='location_foot'>
            <p>서울특별시 성동구 성수 1가 2동 현대아티첼리 1007호 </p>
            <p>사업자 번호 : 130-29-4839 | 등록 2001년  통신판매 업종 신고 : 제 2030-서울성수 -9228호  상호 :shkkei 대표 : 김유화 </p>
            <p>고객센터 : 1544-0834 팩스 ; 0505-200-0606 이메일 : shkkei@howep.co.kr</p>
            <p>@shkkei hotel- sample page </p>
          </ul>
        </div>
        <p className='horizon'></p>
        <div className='copyright_foot'>
        <span className='admin'>
          <Link to="/admin">Admin</Link>
        </span>
          <span className='login'>
          {userInfo ? (
              <span>{userInfo.name}님 환영합니다</span> // 사용자 정보 있을 때
          ) : (
              <Link to="/users/login">Login</Link> // 로그인 버튼 표시
          )}
        </span>
          <span>shkkeiHotel</span>
          <div className='reservation_box'>
            <Link to="/reservation/guide">Reservation Now</Link>
          </div>
        </div>
      </div>
  );
}
