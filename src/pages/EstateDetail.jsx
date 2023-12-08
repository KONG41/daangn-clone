import React from 'react'
import { useTranslation } from 'react-i18next';
import Temperature from '../components/Temperature';
import JobGrid from '../components/JobGrid';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiCalendarDate, CiTimer, CiMoneyBill } from 'react-icons/ci';
const EstateDetail = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="container">
      <section className="sub-container product-container">
        <section className="article">
          <div className="product-carousel">
            {/* <Carousel afterChange={onChange}> */}
            <Carousel>
              <div>
                <img src="https://dnvefa72aowie.cloudfront.net/jobs/jobs/article/3467533/1634287534257/a790b77c3dd28afaeaa46987f78880f8db8dd3e692eee9651cb7fc64c787dbb2.jpeg?q=95&s=1440x1440&t=inside" />
              </div>
              <div>
                <img src="https://dnvefa72aowie.cloudfront.net/jobs/jobs/article/3467533/1634287534412/7cc4a078a408c9801944311e591b2c186f2aaa8d57552b8caf9cfe6583062be0.jpeg?q=95&s=1440x1440&t=inside" />
              </div>
            </Carousel>
          </div>
          <div className="product-title">
            <div className="title">
              <span className="profile" style={{ backgroundImage: `url(${require("../assets/images/content/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png")})` }}></span>
              <span className="text">
                <div className="nickname">{t('당근이신가요')}</div>
                <div className="region-name">{t('당근이신가요')}</div>
              </span>
            </div>
            <Temperature />
          </div>
          <div className="job-desc estate-desc">
            <div className="job-group">
              <span className="estate-tag">
                <p>세입자</p>
                <p>투룸</p>
              </span>
              <h1 className="title-highlight"><span>판매중</span> <span>단기 300 / 1</span></h1>
              <span>(주) 나인스쿨  ∙ 4개월 전 작성</span>
            </div>
            <div>
              <h2>정보</h2>
              <ul className="job-info estate-info">
                <li><span>면적</span><span>13평 · 전용 42.9㎡</span></li>
                <li><span>방/욕실 수</span><span>5층 / 5층</span></li>
                <li><span>층</span><span>확인필요</span></li>
                <li><span>대출가능여부</span><span>확인필요</span></li>
              </ul>
            </div>
            <div>
              <h2>상세 내용</h2>
              <p>
                입주시ㅡ300백만원 납부<br />
                월세ㅡ없음  1년간 부담없이 거주하세요<br />
                도배해드립니다<br />
              </p>
            </div>
            <div>
              <h2>주소</h2>
              <iframe className="gmap_iframe"
                style={{ width: '100%', height: '300px' }}
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=melo&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
            </div>
          </div>
        </section>
        <section className="popular-product">
          <div className="product-grid-top">
            <span className="title">부전동 근처 알바</span>
          </div>
          <JobGrid />
        </section>
      </section>
    </section>
  )
}

export default EstateDetail