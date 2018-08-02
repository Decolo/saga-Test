import * as React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = (props) => {
  return (
    <div className="left-nav">
      <ul className="list">
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
      </ul>
    </div>
  )
}

export default LeftNav