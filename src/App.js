import React, { Fragment,useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [openModal, setOpenModal] = useState(false)
  let [widthLoading, setWidthLoading] = useState(0)
  const [shouldCount, setShouldCount] = useState(0)

  const set_animation = ()=>{
   
    const hide_body = document.querySelector('#hide_body_id')
    hide_body.classList.add('hide_body')
    // setOpenModal(true)
let i=0;
    

      let inter = setInterval(() => {
      let numberByRandom = Math.floor(Math.random() * 10)

      
      if(widthLoading < 100){
            
          setWidthLoading(prev=>prev+numberByRandom)
      }


      if(widthLoading>=100){
        clearInterval(inter)
      }

        
      

        
    }, 500);
    
    
    
  }


  useEffect(() => {

   let myCount =  setInterval(() => {
      let numberByRandom = Math.floor(Math.random() * 10)
      if(shouldCount < 100){
            
          setShouldCount(prev=>prev+numberByRandom)

      }
    },1000)

    if(widthLoading>=100){
      clearInterval( clearInterval(myCount))
      setOpenModal(true)
    }

    return clearInterval(myCount)

    console.log("width loading change",widthLoading)

  }, [widthLoading])


  


  const modalContent = ()=>{
    return openModal ? (<div className="modal_container">
    <div className="modal">
        <p><b>Mot de passe incorect</b></p>
        <p>Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer</p>
        <button onClick={exitModal} className="ok">ok</button>
    </div>
  </div>) : null
  }

  const exitModal = ()=>{
    setOpenModal(false)
    const hide_body = document.querySelector('#hide_body_id')
    hide_body.classList.remove('hide_body')
  }



  return (
    <Fragment>
      <div className="container">
        <div className="loading" style={{width: widthLoading+"%"}}></div>
          <div className="content-fb-title">
              <span className="title-fb">Facebook</span>
          </div>
          
          <div className="main">
            <div className="content-input">
              <label htmlFor="">
                  Numéro de mobile ou e-mail
              </label>
              <input type="text" name="" id="" className="input" />
            </div>
            <div className="content-input">
              <label htmlFor="">
                  Mot de passe
              </label>
              <input type="password" name="" id="" className="input"/>
            </div>

            <div className="content-button">
              <button type="submit" className="button_submit" onClick={set_animation}>
                Connexion
              </button>
            </div>

            <p className="forgot">Mot de passe oublié ?</p>


            <div className="line-or">
              <div className="line">
                <div className="box_one">
                  <hr/>
                </div>
                <span>ou</span>
                <div className="box_two">
                  <hr/>
                </div>
              </div>
              <div className="create_new">
                <button className="button_create">
                    Créer un compte
                </button>
              </div>
            </div>

            <div className="lang">
              <p className="text">Malagasy</p>
              <p className="active">Français (France)</p>
              <p className="text">English (US)</p>
             
            </div>
            <p className="text">Autres langues...</p>

          </div>
    </div>

    <div className="" id="hide_body_id">

    </div>

    
{/* modal */}

{modalContent()}

    </Fragment>
  );
}

export default App;
/**
 * Mot de passe incorrect
 * 
 * Le mot de passe que vous avez saisi est incorect. Veuillez réesayer
 * 
 * ok
 */