import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsername } from '../slices/userSlice'

import Profile from '../components/Profile'
import Stats from '../components/Stats'

const style = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 20
  }
}

const Dashboard = () => {
  const username = useSelector(selectUsername)
  return <div style={style.content}>
    <span style={{fontSize: 20, marginBottom: 20}}>Home</span>
    <div style={{display: 'flex', flex: 1}}>
      <Profile />
      <Stats />
    </div>
  </div>

}

export default Dashboard