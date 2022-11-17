import React from 'react';
import storyIcon3 from '../assets/images/content/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg';
import storyIcon2 from '../assets/images/content/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg';
import storyIcon1 from '../assets/images/content/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg'
function Home() {
  return (

    <div className="container">
      <section className="container right-img-container">
        <div className="sub-container home-container">
          <div className="right-img">
            <div className="text">
              <h1 className="home-main-title">당신 근처의<br />당근마켓</h1>
              <p className="text-m">중고 거래부터 동네 정보까지, 이웃과 함께해요.<br />가깝고 따뜻한 당신의 근처를 만들어요.</p>
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
              <h1 className="home-main-title">우리 동네<br />중고 직거래 마켓</h1>
              <p className="text-m">동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
              <div className="card-btn">
                <div className="btn">인기매물 보기</div>
                <div className="btn">믿을 수 있는 중고거래</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container right-img-container background-pale-green">
        <div className="sub-container home-container">
          <div className="right-img">
            <div className="text">
              <h1 className="home-main-title">이웃과 함께 하는<br />동네생활</h1>
              <p className="text-m">우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</p>
              <ul className="home-story-list">
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon1})` }} ></div>
                  <div className="story-title">우리동네질문</div>
                  <div className="story-desc">궁금한 게 있을 땐 이웃에게 물어보세요.</div>
                </li>
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon2})` }}></div>
                  <div className="story-title">동네분실센터</div>
                  <div className="story-desc">무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</div>
                </li>
                <li className="home-story-list-item">
                  <div className="icon-story" style={{ backgroundImage: `url(${storyIcon3})` }}></div>
                  <div className="story-title">동네모임</div>
                  <div className="story-desc">관심사가 비슷한 이웃과 온오프라인으로 만나요.</div>
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
              <h1 className="home-main-title">내 근처에서 찾는<br />동네가게</h1>
              <p className="text-m">우리 동네 가게를 찾고 있나요?<br />동네 주민이 남긴 진짜 후기를 함께 확인해보세요!</p>
              <div className="card-btn">
                <div className="btn">당근마켓 동네가게 찾기</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container background-gray">
        <div className=" sub-container home-hot-content">
          <h1 className="home-main-title">
            중고거래 인기매물
          </h1>
          <div className="cards-wrap">
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
          <div className="text-center">
            <a className="text-bold text-black text-m" id="hot-articles-more" data-url="/hot_articles"> 인기매물 더 보기</a>
          </div>
        </div>
      </section>

      <section className=" container ">
        <div className="sub-container home-keywords-content">
          <h3 className="home-main-title">
            <a className="text-m text-bold text-black " href="https://www.daangn.com/top_keywords">중고거래 인기검색어</a>
          </h3>
          <ul className="top-keywords-list">
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EC%9E%90%EC%A0%84%EA%B1%B0">자전거</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%ED%8F%AC%EC%BC%93%EB%AA%AC%EB%B9%B5">포켓몬빵</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EC%BA%A0%ED%95%91">캠핑</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EC%95%84%EC%9D%B4%ED%8F%B0">아이폰</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%8B%B9%EA%B7%BC%EC%95%8C%EB%B0%94">당근알바</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EC%9D%98%EC%9E%90">의자</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%83%89%EC%9E%A5%EA%B3%A0">냉장고</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%ED%85%90%ED%8A%B8">텐트</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%EB%85%B8%ED%8A%B8%EB%B6%81">노트북</a>
            </li>
            <li className="keyword-item text-m">
              <a className="keyword-link" rel="nosublink"
                href="https://www.daangn.com/search/%ED%95%A0%EB%A1%9C%EC%9C%88">할로윈</a>
            </li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Home