import React from 'react';

function NavBar() {
  return (
    <React.Fragment>
      {/* Navigation Element */}
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Notifications</a></li>
        <li><a href="">Messages</a></li>
      </ul>
      {/* Search Bar */}
      <form>
        <input type="text" placeholder="Search"></input>
      </form>
      {/* Tweet */}
      <button>Tweet</button>
    </React.Fragment>
  )
}
export default NavBar;