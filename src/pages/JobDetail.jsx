import React from 'react'
import { useTranslation } from 'react-i18next';
import Temperature from '../components/Temperature';
import JobGrid from '../components/JobGrid';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiCalendarDate, CiTimer, CiMoneyBill } from 'react-icons/ci';
const JobDetail = () => {
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
          <div className="job-desc">
            <div className="job-group">
              <h1>꿀 알바 하실 분을 모십니다</h1>
              <span>(주) 나인스쿨  ∙ 4개월 전 작성</span>
            </div>
            <div>
              <h2>정보</h2>
              <ul className="job-info">
                <li><CiMoneyBill />시급 1만원</li>
                <li><CiLocationOn />부산 부산진구 중앙대로 665</li>
                <li><CiCalendarDate />월~금 협의</li>
                <li><CiTimer />10:00~16:00 협의</li>
              </ul>
            </div>
            <div>
              <h2>상세 내용</h2>
              <p>
                9년 연속 인강 부분 1위하고 있는 저희 생방송 인터넷 강의인 나인스쿨의 장점을 전화로 소개하고 무료체험 수업을 받을 수 있도록 약속 잡는 간단한 업무입니다.<br /><br />

                신입도 3일~5일정도 교육 받으면 누구나 할 수 있습니다.<br /><br />

                타사처럼 외부에서 체험 약속 잡지 않고 100%  내근직으로 근무하는 업무라 편하고 안전합니다.
                가족같은 분위기에서 함께 일하실 분들의 많은 지원을 바랍니다.<br /><br />

                [ 근무 시간 ]<br />
                오전 10시~오후 4시<br />
                오후 1시~오후 6시30분<br />* 본인 선택 가능<br />
                * 원하는 근무 시간 변경 가능<br /><br />

                [ 급여 ]<br />
                시급 :10,000~11,000+@<br />
                (15,000 이상도 가능)<br />
                *근무 기간에 따라 시급 인상됨*<br /><br />

                [혜택]<br />
                퇴직금, 월차, 연차등<br /><br />

                [지원 자격]<br />
                초보, 주부 가,경력 단절자 가능<br />
                유사 업종 경험자 우대
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

export default JobDetail