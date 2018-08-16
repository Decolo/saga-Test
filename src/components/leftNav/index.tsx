import * as React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = (props) => {
  return (
    <aside className="left-nav">
      <ul className="list">
        <li>
          <Link to="/">home</Link> 
        </li>
        <li>
          <Link to="/content">content</Link> 
        </li>
        <li>
          <Link to="/bar">bar</Link> 
        </li>
      </ul>
    </aside>
  )
}

export default LeftNav