import React from 'react';
import { Carousel } from 'antd';

import Temperature from '../components/Temperature';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductGrid from '../components/ProductGrid';
const ProductDetail = () => {
  const { t, i18n } = useTranslation();
  // const onChange = (currentSlide) => {
  //   console.log(currentSlide);
  // };




  return (
    <section className="container">
      <section className="sub-container product-container">
        <section className="article">
          <div className="product-carousel">
            {/* <Carousel afterChange={onChange}> */}
            <Carousel>
              <div>
                <img src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
              </div>
              <div>
                <img src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
              </div>
              <div>
                <img src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
              </div>
              <div>
                <img src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
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
          <div className="product-desc">
            <div className="desc-group">
              <h1>iPhone 13 pro max 512G</h1>
              <span>{t('디지털기기')} ∙ 4{t('일 전')}</span>
              <p>{t('100,000원')}</p>
            </div>
            <span>{t('아이폰 질려서 거의 나눔으로 싸게 팔아요')}</span>
            <span>{t('찔러볼거면 챗 노노 살 사람만')}</span>
            <span>{t('배터리 성능')}98</span>
            <span>{t('관심')} 61 ∙ {t('채팅')} 205 ∙ {t('조회')} 2538</span>
          </div>
        </section>
        <section className="popular-product">
          <div className="product-grid-top">
            <span className="title">{t('당근마켓 인기중고')}</span>
            <span className="see-more"><Link to="#">{t('더 구경하기')}</Link></span>
          </div>
          <ProductGrid />
        </section>
      </section>
    </section>
  )
}

export default ProductDetail