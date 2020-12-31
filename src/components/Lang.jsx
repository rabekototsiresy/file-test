import React,{Fragment} from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink,BrowserRouter as Router } from 'react-router-dom'

const Lang = () => {

    const {t,i18n} = useTranslation('common')
    return (
       <Fragment>
           <div className="lang">

              
             
              <Router>
                <div className="main-lang">
                    <NavLink to="/mg" className="text" activeClassName="activeLink">          
                        Malagasy
                    </NavLink>
                    <NavLink className="text"  to="/fr" onClick={()=>i18n.changeLanguage('fr')} activeClassName="activeLink">
                    Français (France)
                    </NavLink>

                    <NavLink className="text" onClick={()=>i18n.changeLanguage('en')} to="/en"activeClassName="activeLink">
                            English (US)
                    </NavLink>
                </div>
                </Router>
            </div>
            <p className="text">{t('more_lang')}</p>
       </Fragment>
    )
}

export default Lang
