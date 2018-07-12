import React, { PureComponent } from 'react';
import Link from 'gatsby-link';

import menuIcon from '../images/menu-icon.svg';
import loginButton from '../images/log-in.svg';
import logo from '../images/logo.svg';
import pinkFlame from '../images/pink-flame.svg';

class Header extends PureComponent {

  render() {
    return (
      <div className="hamburgerMenu">
        <header>
          <nav>
            <Link className="tinderLogo__desktop" to="/" >
              <img src={logo}/>
            </Link>

            <Link className="tinderLogo__mobile" to="/" >
              <img src={pinkFlame}/>
            </Link>

            <ul className="swipe-match-chat">
               <li>SWIPE</li>
                <li>MATCH</li>
               <li>CHAT</li>
            </ul>

            <div className="headerRight">
              <a className="headerRight__desktop" href={"https://tinder.com"} target="_blank">
                <button>LOG IN </button>
              </a>
              <menuIcon>
                <img src={menuIcon} height="100%" width="24px"/>
              </menuIcon>
            </div>

          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
