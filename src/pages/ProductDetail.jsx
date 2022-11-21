import React from 'react';
import { Carousel } from 'antd';
import { BsEmojiSmile } from 'react-icons/bs';
import { TfiFaceSad } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
            <div className="temp">
              <div className="temp-grid-top">
                <div className="temp-grid-left">
                  <div className="temp-num">36.9°C</div>
                  <div className="temp-line">
                    <div className="temp-sub-line"></div>
                  </div>
                </div>
                <div className="temp-grid-right">
                  <TfiFaceSad />
                </div>
              </div>
              <div className="temp-grid-bottom">
                <span>
                  {t('매너온도')}
                </span>
              </div>
            </div>


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
          <div className="product-grid-bottom cards-wrap">
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    100,000원
                  </div>
                  <div className="card-region-name">
                    경남 창원시 성산구 반지동
                  </div>
                  <div className="card-counts">
                    <span>
                      관심 56
                    </span>
                    ∙
                    <span>
                      채팅 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    100,000원
                  </div>
                  <div className="card-region-name">
                    경남 창원시 성산구 반지동
                  </div>
                  <div className="card-counts">
                    <span>
                      관심 56
                    </span>
                    ∙
                    <span>
                      채팅 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    100,000원
                  </div>
                  <div className="card-region-name">
                    경남 창원시 성산구 반지동
                  </div>
                  <div className="card-counts">
                    <span>
                      관심 56
                    </span>
                    ∙
                    <span>
                      채팅 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    {t('100,000원')}
                  </div>
                  <div className="card-region-name">
                    {t('경남 창원시 성산구 반지동')}
                  </div>
                  <div className="card-counts">
                    <span>
                      {t('관심')} 56
                    </span>
                    ∙
                    <span>
                      {t('채팅')} 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    100,000원
                  </div>
                  <div className="card-region-name">
                    경남 창원시 성산구 반지동
                  </div>
                  <div className="card-counts">
                    <span>
                      관심 56
                    </span>
                    ∙
                    <span>
                      채팅 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-top ">
              <a className="card-link " data-event-label="488826624" href="https://www.daangn.com/articles/488826624">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">iPhone 13 pro max 512G</h2>
                  <div className="card-price ">
                    100,000원
                  </div>
                  <div className="card-region-name">
                    경남 창원시 성산구 반지동
                  </div>
                  <div className="card-counts">
                    <span>
                      관심 56
                    </span>
                    ∙
                    <span>
                      채팅 196
                    </span>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>
      </section>
    </section>
  )
}

export default ProductDetail