import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard/stats">Stats</Link></li>
        <li><Link to="/dashboard/comments">Comments</Link></li>
        <li><Link to="/dashboard/media">Media</Link></li>
        <li><Link to="/dashboard/posts">Posts</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
