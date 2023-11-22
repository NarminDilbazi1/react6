import React from 'react'

import './style.css'
const Form = () => {
    const myFunc=(e)=>{
        alert("Form göndərildi")
    }

  return (
    <div className='Qeyd'>
        <form action='' onSubmit={myFunc}>
             <input type='text' id='ad' placeholder='Adınızı daxil edin' required/>
        <br/>
        <input type='text' id='soyad' placeholder='Soyadınızı daxil edin ' required/>
    <br/>
        <input type='number' id='telefon' placeholder='Nömrə daxil edin' required/>
    <br/>
        <input type='e-mail' id='email' placeholder='E-mail daxil edin' required/>
   <br/>
        <textarea id='şərh' placeholder='Şərh'></textarea>
    <br/>
    <button >Göndər</button>
   </form>
   </div>
  )
}


export default Form