import { React, useState, useEffect } from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { AiFillApple, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaFacebook, FaBlogger } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { BiChevronDown, BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// menu function
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
// end of menu function

function MainLayout({ children }) {
  // hide show mobile menu
  const [isNavBar, setIsNavBar] = useState(false);
  const [isNavSearch, setIsNavSearch] = useState(false);
  const handleHamburgerMenu = () => {
    setIsNavBar(!isNavBar);
    setIsNavSearch(false)
  }
  const handleNavSearch = () => {
    setIsNavSearch(!isNavSearch);
    setIsNavBar(false);
  }
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    if (window.innerWidth > 830) {
      setIsNavBar(false);
      setIsNavSearch(false);
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  // end of hide and show mobile menu 

  //translations 
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  //end of translate

  //switch menu items
  const handleClickMenu = (e) => {
    const myMenu1 = document.getElementById('menu1');
    const myMenu2 = document.getElementById('menu2');
    const myMenu3 = document.getElementById('menu3');

    myMenu1.classList.remove('main-menu-item');
    myMenu2.classList.remove('main-menu-item');
    myMenu3.classList.remove('main-menu-item');

    document.getElementById(`${e.currentTarget.id}`).classList.add('main-menu-item');
  }
  //end of switch menu
  return (
    <div className="container">
      <section className="sticky-nav">
        <div className="sub-container sub-nav-container">
          <div className="menu l-menu">
            <ul>
              <li className="logo-item">
                <Link to="/"><img src={require("../assets/images/logo/logo_01.png")} /></Link>

              </li>
              <li className="menu-item main-menu-item" id="menu1" onClick={(e) => handleClickMenu(e)}><Link to="/">{t("중고거래")}</Link></li>
              <li className="menu-item" id="menu2" onClick={(e) => handleClickMenu(e)}><Link to="/job">{t('알바')}</Link></li>
              <li className="menu-item" id="menu3" onClick={(e) => handleClickMenu(e)}><Link to="/real-estate">{t('부동산 직거래')}</Link></li>
            </ul>
          </div>
          <div className="search m-search">
            <input type="text" placeholder={`${t('물품이나 동네를 검색해보세요')}`} />
            <span className="search-icon-btn" onClick={handleNavSearch}><BiSearch /></span>
            <button type="button" className="search-btn">{t('채팅하기')}</button>
            <span className="menu-icon-btn" onClick={handleHamburgerMenu}><GiHamburgerMenu /></span>
          </div>

        </div>
        {
          isNavBar &&
          <div className="container m-header-container">
            <div className="menu m-menu">
              <ul>
                <li className="menu-item main-menu-item" id="menu1"><Link to="/">{t("중고거래")}</Link></li>
                <li className="menu-item" id="menu2" ><Link to="/job" >{t('알바')}</Link></li>
                <li className="menu-item" id="menu3" ><Link to="/real-estate" >{t('부동산 직거래')}</Link></li>
              </ul>
            </div>
          </div>
        }
        {isNavSearch &&
          <div className="container m-ab-menu">
            <div className="m-search-container">
              <div className="top-grid">
                <input type="text" placeholder={`${t('물품이나 동네를 검색해보세요')}`} />
                <span onClick={handleNavSearch}>{t('취소')}</span>
              </div>
              <div className={`bottom-grid ${isNavSearch && "bottom-grid-show"}`}>
                <span className="sug-title">{t('추천')}</span>
                <div className="sug-table">
                  <ul>
                    <li>{t('잠실 냉장고')}</li>
                    <li>{t('부산 책상')}</li>
                    <li>{t('죽전 치과')}</li>
                    <li>{t('죽전 자전거')}</li>
                    <li>{t('화분')}</li>
                    <li>{t('잠실 냉장고')}</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        }


      </section>
      {children}
      <section className="container footer-container">
        <section className="sub-container">
          <section className="footer-grid">
            <section className="grid-top">
              <section className="grid-left">
                <ul>
                  <li><a href="#">{t('중고거래')}</a></li>
                  <li><a href="#">{t('동네가게')}</a></li>
                  <li><a href="#">{t('당근알바')}</a></li>
                </ul>
                <ul>
                  <li><a href="#">{t('당근비즈니스')}</a></li>
                  <li><a href="#">{t('채팅하기')}</a></li>
                </ul>
                <ul>
                  <li><a href="#">{t('자주 묻는 질문')}</a></li>
                  <li><a href="#">{t('회사 소개')}</a></li>
                  <li><a href="#">{t('인재 채용')}</a></li>
                </ul>

              </section>
              <section className="grid-right">
                <h3>{t('당근마켓 앱 다운로드')}</h3>
                <div className="btn-container">
                  <div className="store-btn"><AiFillApple />App Store</div>
                  <div className="store-btn"><IoLogoGooglePlaystore />Google Play</div>
                </div>
              </section>
            </section>
            <section className="grid-bottom">
              <section className="grid-left">
                <div className="grid-1">
                  <div>
                    <span><b>{t('대표')}</b>{t('김재현, 김용현')}</span>
                    <span className="separate-line"></span>
                    <span><b>{t('사업자번호')}</b>375-87-00088</span>
                  </div>
                  <div> <span><b>{t('직업정보제공사업 신고번호')}</b>{t('2016-서울서초-0051')}</span></div>
                  <div><span>{t('주소 서울특별시 구로구 디지털로 30길 28, 609호 (당근서비스)')}</span></div>
                  <div>
                    <span><b>{t('전화')}</b>1544-9796</span>
                    <span className="separate-line"></span>
                    <span><b>{t('고객문의')}</b> cs@daangnservice.com</span>
                  </div>
                </div>
                <div className="grid-2">
                  <ul>
                    <li><a href="#">{t('제휴 문의')}</a></li>
                    <li><a href="#">{t('광고 문의')}</a></li>
                    <li><a href="#">{t('PR 문의')}</a></li>
                    <li><a href="#">{t('IR 문의')}</a></li>
                  </ul>
                </div>
                <div className="grid-3">
                  <ul>
                    <li><a href="#">{t('이용약관')}</a></li>
                    <li><a href="#">{t('개인정보처리방침')}</a></li>
                    <li><a href="#">{t('위치기반서비스 이용약관')}</a></li>
                    <li><a href="#">{t('이용자보호 비전과 계획')}</a></li>
                  </ul>
                </div>
              </section>
              <section className="grid-right">
                <div className="social-icon"><FaFacebook /></div>
                <div className="social-icon"><AiOutlineInstagram /></div>
                <div className="social-icon"><AiFillYoutube /></div>
                <div className="social-icon"><FaBlogger /></div>
                <div className="lang-select">
                  <MdOutlineLanguage />
                  <select defaultValue={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="kr">Korea</option>
                  </select>
                  <BiChevronDown />
                </div>
              </section>
            </section>

          </section>
        </section>
      </section>

    </div>

  )
}

export default MainLayout