import React from 'react'
import { useTranslation } from 'react-i18next';
const ProductGrid = () => {
  const { t, i18n } = useTranslation();
  return (
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
  )
}

export default ProductGrid