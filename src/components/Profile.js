import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsername } from '../slices/userSlice'

const style = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 10px',
    background: '#fff',
    flex: 1,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: 20
  }
}

const Profile = () => {
  const username = useSelector(selectUsername)
  return <div style={style.content}>
    <div style={{padding: 20, borderBottom: '1px solid #eee'}}>Min Profil</div>
    <div style={style.user}>
      <div style={{width: 80, height: 80, borderRadius: 100, background: '#333'}}></div>
      <div style={{marginLeft: 20, color: '#333'}}>{username}</div>
    </div>
  </div>

}

export default Profile