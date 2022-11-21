import React from 'react';
import { Link } from 'react-router-dom';
import storyIcon3 from '../assets/images/content/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg';
import storyIcon2 from '../assets/images/content/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg';
import storyIcon1 from '../assets/images/content/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg';
import { useTranslation } from 'react-i18next';
function Home() {
  const { t, i18n } = useTranslation();
  return (

    <div className="container">
      <section className="container right-img-container">
        <div className="sub-container home-container">
          <div className="right-img">
            <div className="text">
              <h1 className="home-main-title">{t('당신 근처의')}<br />{t('당근마켓')}</h1>
              <p className="text-m">{t('중고_거래부터_동네_정보까지,_이웃과_함께해요')}.<br />{t('가깝고_따뜻한_당신의_근처를_만들어요')}.</p>
            </div>
            <div className="image" style={{ width: "100%" }}>
              <img src={require("../assets/images/content/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb (1).webp")} />
            </div>
          </div>
        </div>
      </section>
      <section className="container left-img-container">
        <div className="sub-container home-container">
          <div className="left-img">
            <div className="image">
              <img src={require("../assets/images/content/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp")} />
            </div>
            <div className="text">
              <h1 className="home-main-title">{t('우리 동네')}<br />{t('중고 직거래 마켓')}</h1>
              <p className="text-m">{t('동네_주민들과_가깝고_따뜻한_거래를_지금_경험해보세요')}.</p>
              <div className="card-btn">
                <div className="btn">{t('인기매물 보기')}</div>
                <div className="btn">{t('믿을 수 있는 중고거래')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container right-img-container background-pale-green">
        <div className="sub-container home-container">
          <div className="right-img">
            <div className="text">
              <h1 className="home-main-title">{t('이웃과 함께 하는')}<br />{t('동네생활')}</h1>
              <p className="text-m">{t('우리_동네의_다양한_이야기를_이웃과_함께_나누어요')}.</p>
              <ul className="home-story-list">
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon1})` }} ></div>
                  <div className="story-title">{t('우리동네질문')}</div>
                  <div className="story-desc">{t('궁금한_게_있을_땐_이웃에게_물어보세요')}.</div>
                </li>
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon2})` }}></div>
                  <div className="story-title">{t('동네분실센터')}</div>
                  <div className="story-desc">{t('무언가를_잃어버렸을_때,_함께_찾을_수_있어요')}.</div>
                </li>
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon3})` }}></div>
                  <div className="story-title">{t('동네모임')}</div>
                  <div className="story-desc">{t('관심사가_비슷한_이웃과_온오프라인으로_만나요')}.</div>
                </li>
              </ul>
            </div>
            <div className="image">
              <img src={require("../assets/images/content/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp")} />
            </div>
          </div>
        </div>
      </section>
      <section className="container left-img-container">
        <div className="sub-container home-container">
          <div className="left-img">
            <div className="image">
              <img src={require("../assets/images/content/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp")} />
            </div>
            <div className="text">
              <h1 className="home-main-title">{t('내 근처에서 찾는')}<br />{t('동네가게')}</h1>
              <p className="text-m">{t('우리 동네 가게를 찾고 있나요?')}<br />{t('동네 주민이 남긴 진짜 후기를 함께 확인해보세요!')}</p>
              <div className="card-btn">
                <div className="btn">{t('당근마켓 동네가게 찾기')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container background-gray">
        <div className=" sub-container home-hot-content">
          <h1 className="home-main-title">
            {t('중고거래 인기매물')}
          </h1>
          <div className="cards-wrap">

            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>
            <article className="card-top ">
              <Link className="card-link " data-event-label="488826624" to="/product-detail">
                <div className="card-photo ">
                  <img alt="iPhone 13 pro max 512G"
                    src={require("../assets/images/content/C9C41F9112584A754BF96285113C883CABB3C75B0A35D1829B5242CA688FBC40.jpg")} />
                </div>
                <div className="card-desc">
                  <h2 className="card-title">{t('iPhone 13 pro max 512G')}</h2>
                  <div className="card-price">
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
              </Link>
            </article>


          </div>
          <div className="text-center">
            <a className="text-bold text-black text-m" id="hot-articles-more" data-url="/hot_articles"> {t('인기매물 더 보기')}</a>
          </div>
        </div>
      </section>

      <section className=" container ">
        <div className="sub-container home-keywords-content">
          <h3 className="home-main-title">
            <a className="text-m text-bold text-black " href="https://www.daangn.com/top_keywords">{t('중고거래 인기검색어')}</a>
          </h3>
          <ul className="top-keywords-list">
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EC%9E%90%EC%A0%84%EA%B1%B0">{t('자전거')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%ED%8F%AC%EC%BC%93%EB%AA%AC%EB%B9%B5">{t('포켓몬빵')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EC%BA%A0%ED%95%91">{t('캠핑')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EC%95%84%EC%9D%B4%ED%8F%B0">{t('아이폰')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%8B%B9%EA%B7%BC%EC%95%8C%EB%B0%94">{t('당근알바')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EC%9D%98%EC%9E%90">{t('의자')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%83%89%EC%9E%A5%EA%B3%A0">{t('냉장고')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%ED%85%90%ED%8A%B8">{t('텐트')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%85%B8%ED%8A%B8%EB%B6%81">{t('노트북')}</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%ED%95%A0%EB%A1%9C%EC%9C%88">{t('할로윈')}</a>
            </li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Home