import { useState } from 'react';
import { AiFillPropertySafety } from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs'
import Avatar from './Avatar';

const Navbar = (props) => {
    return (
      <nav className='navbar'>
        <img className='logo' src='../assets/logo.png' alt='logo' onClick={() => {props.setPage('home')}}/>

        <ul>
          <li className={props.current==='home'? 'active': ''} onClick={() => {props.setPage('home');props.setCurrent('home');}}><a href='#'></a>Home</li>
          <li className={props.current==='announcements'? 'active': ''} onClick={props.togglePopup}><a href='#'></a>Announcements</li>
          <li className={props.current==='report'? 'active': ''} onClick={() => {props.setCurrent('report');}}><a href='#'></a>Report Emergency</li>
          <li className={props.current==='faq'? 'active': ''} onClick={() => {props.setCurrent('faq');}}><a href='#'></a>FAQ</li>
        </ul>

        <div class="search">
          <input type="text" placeholder="Search..." autofocus required />
          <BsSearch />
        </div>

        <div className='user'>
          <Avatar user={props.user} onClick={() => {props.setPage('login')}} />
          <img src='../assets/split-screen.svg' alt='split screen' />
        </div>
      </nav>
    );
}

export default Navbar;
