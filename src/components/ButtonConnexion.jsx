import React from 'react'
import { useTranslation } from 'react-i18next'



const ButtonConnexion = ({set_animation}) => {
  const [t,i18n] = useTranslation('common')
    return (
        <div className="content-button">
              <button type="submit" className="button_submit" onClick={set_animation}>
                {t('login_text')}
              </button>
        </div>
    )
}

export default ButtonConnexion
