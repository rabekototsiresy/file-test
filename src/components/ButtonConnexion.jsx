import React from 'react'

const ButtonConnexion = ({set_animation}) => {
    return (
        <div className="content-button">
              <button type="submit" className="button_submit" onClick={set_animation}>
                Connexion
              </button>
        </div>
    )
}

export default ButtonConnexion
