import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsername } from '../slices/userSlice'

const style = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 10px',
    background: '#fff',
    flex: 1,
  },
}

const Stats = () => {
  return <div style={style.content}>
    <div style={{padding: 20, borderBottom: '1px solid #eee'}}>Mitt innehav</div>
  </div>

}

export default Stats