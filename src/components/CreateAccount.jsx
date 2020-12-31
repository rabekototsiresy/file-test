import React from 'react'
import { useTranslation } from 'react-i18next'
const CreateAccount = () => {
  const [t,i18n] = useTranslation('common')
    return (
        <div className="line-or">
        <div className="line">
          <div className="box_one">
            <hr/>
          </div>
          <span>{t("or")}</span>
          <div className="box_two">
            <hr/>
          </div>
        </div>
        <div className="create_new">
          <button className="button_create">
              {t('create_new_account')}
          </button>
        </div>
      </div>
    )
}

export default CreateAccount
