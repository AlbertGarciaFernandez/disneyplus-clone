import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.18169-9/17342660_110140289485138_6142903153263684574_n.png?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_Jim_z9VVbkAX9GE2J-&_nc_ht=scontent-amt2-1.xx&oh=00_AT-9CjLcuNvnuZwFN0ovxdBsl6AVFgv4zxBKiWChZIJU5g&oe=62315E4E"/>
      </Nav>
    )
}

export default Header



const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-item: center;
    padding: 0 36px;
    `

const Logo = styled.img`
    width: 80px;
    `

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        bottom: -6px;
        right: 0;
        left: 0;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: sclaeX(0);
      }
    }
    &:hover {
      span:after {
        transform: sclaeX(1);
        opacity: 1;
      }
    }
  }

`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`