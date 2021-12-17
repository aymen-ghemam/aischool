// import {, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import Avatar from './Avatar';

const Navbar = () => {
    const [state, setstate] = useState({current: 'home'})

    const handleClick = e => {
        console.log('click ', e);
        setstate({ current: e.key });
    };

    return (
      <nav className='navbar'>
        <div className='logo'>

        </div>

        <ul>
          <li><a href='#'></a>Home</li>
          <li><a href='#'></a>Announcements</li>
          <li><a href='#'></a>Report Emergency</li>
          <li><a href='#'></a>FAQ</li>
        </ul>

        <div class="search">
          <input type="text" placeholder="Search..." autofocus required />
          <BsSearch />
        </div>

        <div className='user'>
          <Avatar />
          <Avatar />
        </div>
      </nav>
    );
}

export default Navbar;