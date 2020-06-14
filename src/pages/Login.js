import React, { useState } from 'react'
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux'
import {
  setStateUsername,
  setStatePassword,
} from '../slices/userSlice'

const style = {
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    padding: 100,
    background: 'white',
    borderRadius: 5
  },
  input: {
    padding: 20,
    border: '2px solid #ccc',
    borderRadius: 3,
    marginBottom: 10,
    width: 300
  }
}

const Login = () => {
  const dispatch = useDispatch()
  const [ redirect, setRedirect ] = useState(false)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const login = () => {
    console.log(username, password)
    dispatch(setStateUsername(username))
    dispatch(setStatePassword(password))
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect push to='/dashboard' />
  }

  return <div style={style.box}>
    <div style={style.login}>
      <input style={style.input} onChange={(e) => setUsername(e.target.value)} placeholder='Username' value={username}/>
      <input style={style.input} onChange={(e) => setPassword(e.target.value)} placeholder='Password' value={password} type='password'/>
      <div  style={{...style.input, cursor: 'pointer'}} onClick={() => login()}>Login</div>
    </div>
  </div>
}

export default Login