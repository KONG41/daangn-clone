import React from 'react';
import JobGrid from '../components/JobGrid';
import JobAds from '../components/JobAds';

const RealEstate = () => {
  return (
    <div className="container">
      <section className="container estate-top">
        <div className="sub2-container">
          <div className="job-cover">
            <div className="text">
              <h1 className="home-main-title">복비없이 투명한<br />부동산 직거래</h1>
              <p className="text-m">이웃이 살던 집, 당근마켓에서<br />편하게 직거래해보세요.</p>
            </div>
            <div className="image">
              <img src={require("../assets/images/estate/realty_hero_3x.5316d5c5.png")} />
            </div>
          </div>
        </div>

      </section>
      <section className="container job-bottom">
        <div className="sub2-container">
          <div className="job-list">
            <h1 className="section-title">인기 부동산 직거래 게시글</h1>
            <JobGrid />
          </div>
          <div className="job-list">
            <JobAds
              desc1="복비 없이 투명한 부동산 직거래"
              desc2="당근마켓 내 근처 탭에서 바로 찾아보세요!"
              btn="앱 다운로드 하기"
              bgColor="#009ceb1a"
              icon={require("../assets/images/estate/realty_banner_icon.bbf2bdcb.png")}
            />
          </div>
          <div className="job-list">
            <JobGrid />
          </div>

        </div>
      </section>
    </div>

  )
}

export default RealEstate