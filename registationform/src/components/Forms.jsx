import React, { useState } from 'react'
import styles from './Forms.module.css'
function Forms() {
    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name,value)
        // console.log(e)
        setUser({...user, [name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    let btn = document.getElementById('btn')
    btn.addEventListener('click',() => {
        alert('Form Submitted successfully')
    })
  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Fullname</label>
                <input type="text" autoComplete='off' name='username' id='username' onChange={handleInput} value={user.username}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete='off' name='email' id='email' onChange={handleInput} value={user.email}/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" autoComplete='off' name='phone' id='phone' onChange={handleInput} value={user.phone}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" autoComplete='off' name='password' id='password' onChange={handleInput} value={user.password}/>
            </div>
            <button type='submit' id='btn'>Registration</button>
        </form>
    </>
  )
}

export default Forms
