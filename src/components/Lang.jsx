import React,{Fragment} from 'react'

const Lang = () => {
    return (
       <Fragment>
           <div className="lang">
              <p className="text">Malagasy</p>
              <p className="active">Français (France)</p>
              <p className="text">English (US)</p>
             
            </div>
            <p className="text">Autres langues...</p>
       </Fragment>
    )
}

export default Lang
