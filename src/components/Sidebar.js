import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const style = {
  sidebar: {
    display: 'flex',
    width: 300,
    background: '#333',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  logo: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    padding: '10px 20px',
    background: 'rgba(0,0,0,0.1)',
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'none'
  },
}

const Siderbar = () => {
  let match = useLocation()
  console.log(match)
  
  return match.pathname == '/'
    ? <></>
    : <nav style={style.sidebar}>
        <div style={style.logo}>
          <img style={{width: 50}} src={'./logo192.png'}/>
        </div>
        <Link style={style.link} to="/dashboard">Home</Link>
        <Link style={style.link} to="/portfolio">Portfolio</Link>
        <Link style={style.link} to="/settings">Settings</Link>
      </nav>
}

export default Siderbar