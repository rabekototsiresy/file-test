import React from 'react'
import { useTranslation } from 'react-i18next'

const Password = ({handleChange,password}) => {
    const [t,i18n] = useTranslation('common')
    return (
        <div className="content-input">
            <label htmlFor="">
                {t('enter_password')}
            </label>
            <input onChange={handleChange} value={password} type="password" name="" id="password" className="input"/>
        </div>
    )
}

export default Password
