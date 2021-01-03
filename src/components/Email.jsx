import React from 'react'
import { useTranslation } from 'react-i18next'

const Email = ({handleChange,emailOrPhone}) => {

    const [t,i18n] = useTranslation('common')
    return (
        <div className="content-input">
            <label htmlFor="">
                {t('enter_mobile_or_phone')}
            </label>
            <input type="text" value={emailOrPhone} onChange={handleChange} name="emailOrPhone" id="emailOrPhone" className="input" />
         </div>
    )
}

export default Email
