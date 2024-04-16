import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src="public/Logo.svg" alt="" />
     <div className={styles.search}>
      <img src="public/Search.svg" alt="" />
     <input className={styles.input} type="text" placeholder='Search which course you want' />
     </div>
      <nav className={styles.nav}>
        <a href="">Latest</a>
        <a href="">Trending</a>
        <a href="">My learning</a>
      </nav>
      <div className={styles.icons}>
        <button><img src="public/Fav.svg" alt="" /></button>
        <button><img src="public/Cart.svg" alt="" /></button>
        <button><img src="public/Notification.svg" alt="" /></button>
      </div>
      <img className={styles.userprofile} src="public/sampleUserIcon.svg" alt="UserProfile" />
    </div>
  );
}

export default Header;
