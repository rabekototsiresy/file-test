import React from 'react'
import { useTranslation } from 'react-i18next'

const Password = () => {
    const [t,i18n] = useTranslation('common')
    return (
        <div className="content-input">
            <label htmlFor="">
                {t('enter_password')}
            </label>
            <input type="password" name="" id="" className="input"/>
        </div>
    )
}

export default Password
