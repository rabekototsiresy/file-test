import React from 'react'
import { useTranslation } from 'react-i18next'

const Email = () => {

    const [t,i18n] = useTranslation('common')
    return (
        <div className="content-input">
            <label htmlFor="">
                {t('enter_mobile_or_phone')}
            </label>
            <input type="text" name="" id="" className="input" />
         </div>
    )
}

export default Email
