import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{color: props.mode==='light'?'black':'white'}}>
  <a className="navbar-brand">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Action</a>
          <a className="dropdown-item">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" >Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">{props.aboutText}</a>
      </li>
    </ul>
    <div className={`form-check form-switch mx-auto !important; text-${props.mode=='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled {props.mode} Mode</label>
    </div>
    
  </div>
</nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps={
    title: "Set title",
    aboutText: "PropTypes.string"
}
