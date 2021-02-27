import React from 'react';
import "./common.scss"


const CommonLayout = ({children}) => {
  return(
    <div className="layout-container">
      <nav className="layout">
        <img src={require("/assets/youtube.svg")} width={40} height={40} />
        <div className="search-container">
          <input className="search" placeholder={"search videos"} />
        </div>
        <div className="menus">
          <i className="fa fa-user-circle-o" aria-hidden="true" style={{color: "white", fontSize: 25}}></i>
        </div>
      </nav>
      <div className="layout-children">
        {children}
      </div>
    </div>
  )
}

export default CommonLayout;