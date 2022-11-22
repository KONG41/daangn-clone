import React from 'react'

const JobAds = () => {
  return (
    <section className="ads-container">
      <div className="ads-layout">
        <div className="icon-desc">
          <span className="icon"><img src={require('../assets/images/job/jobs_banner_marker.41df6e0b.png')} /></span>
          <span className="desc">우리동네 알바가 궁금하다면<br />당근마켓에서 바로 찾아보세요!</span>
        </div>
        <span className="btn">앱 다운로드 하기</span>
      </div>
    </section>
  )
}

export default JobAds