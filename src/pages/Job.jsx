import React from 'react';
import JobGrid from '../components/JobGrid';
import JobAds from '../components/JobAds';

const Job = () => {
  return (
    <div className="container">
      <section className="container job-top">
        <div className="sub2-container">
          <div className="job-cover">
            <div className="text">
              <h1 className="home-main-title">우리 동네에서 찾는<br />당근알바</h1>
              <p className="text-m">걸어서 10분 거리의<br />동네 알바들 여기 다 있어요.</p>
            </div>
            <div className="image">
              <img src={require("../assets/images/job/jobs_hero_3x.79687414.png")} />
            </div>
          </div>
        </div>

      </section>
      <section className="container job-bottom">
        <div className="sub2-container">
          <div className="job-list">
            <h1 className="section-title">인기 당근알바</h1>
            <JobGrid />
          </div>
          <div className="job-list">
            <JobAds
              desc1="우리동네 알바가 궁금하다면"
              desc2="당근마켓에서 바로 찾아보세요!"
              btn="앱 다운로드 하기"
              bgColor="#ff6f0f24"
              icon={require("../assets/images/job/jobs_banner_marker.41df6e0b.png")}
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

export default Job