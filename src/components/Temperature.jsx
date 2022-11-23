import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { TfiFaceSad } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';
const Temperature = () => {
  const { t, i18n } = useTranslation();
  return (
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
  )
}

export default Temperature