import React from 'react'

const JobAds = (props) => {
  return (
    <section className="ads-container" style={{ backgroundColor: props.bgColor }}>
      <div className="ads-layout">
        <div className="icon-desc">
          <span className="icon"><img src={props.icon} /></span>
          <span className="desc">{props.desc1}<br />{props.desc2}</span>
        </div>
        <span className="btn">{props.btn}</span>
      </div>
    </section>
  )
}

export default JobAds