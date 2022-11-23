import React from 'react'
import { Link } from 'react-router-dom'
const JobGrid = () => {
  return (



    <section className="grid-items">

      <div className="item">
        <Link to="/job-detail">
          <span className="image">
            <img src={require('../assets/images/content/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png')} />
          </span>
          <span className="desc">
            <h1 className="title">전화업무(아웃바운드) 10시-4시까지 구합니다</h1>
            <span className="title-desc">
              <p className="place">(주)케이삼흥</p>
              <p>.</p>
              <p className="location">인천광역시 부평구 부</p>
            </span>
            <span className="salary"><p>월급</p><p>1,500,000</p></span>
          </span>
        </Link>
      </div>
      <div className="item">
        <Link to="/job-detail">
          <span className="image">
            <img src={require('../assets/images/content/default_profile_80-c649f052a34ebc4eee35048815d8e4f73061bf74552558bb70e07133f25524f9.png')} />
          </span>
          <span className="desc">
            <h1 className="title">전화업무(아웃바운드) 10시-4시까지 구합니다</h1>
            <span className="title-desc">
              <p className="place">(주)케이삼흥</p>
              <p>.</p>
              <p className="location">인천광역시 부평구 부</p>
            </span>
            <span className="salary"><p>월급</p><p>1,500,000</p></span>
          </span>
        </Link>
      </div>



    </section>
  )
}

export default JobGrid