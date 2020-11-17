import React from 'react';

function NavBar(props) {
  return (
    <React.Fragment>
      <div class="nav-container">
        {/* Navigation Element */}
        <div id="nav-navbar">
          <a class="nav-navitem" href="">Home</a>
          <a class="nav-navitem" href="">Notifications</a>
          <a class="nav-navitem" href="">Messages</a>
        </div>
        <div id="nav-space"></div>
        {/* Search Bar */}
        <form id="nav-search">
          <input id="nav-input" type="text" placeholder="Search"></input>
        </form>
        {/* Tweet */}
        <button id="nav-tweet">Tweet</button>
      </div>
    </React.Fragment>
  )
}
export default NavBar;