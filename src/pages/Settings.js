import React from 'react'

const style = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 20
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 10px',
    background: '#fff',
    flex: 1,
  },
}

const Settings = () => {
  return <div style={style.box}>
    <span style={{fontSize: 20, marginBottom: 20}}>Settings</span>
    <div style={style.content}>
      <div style={{padding: 20, borderBottom: '1px solid #eee'}}>Settings</div>
    </div>
  </div>

}

export default Settings