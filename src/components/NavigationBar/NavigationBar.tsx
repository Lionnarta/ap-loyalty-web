import React, { useState } from 'react';
import './NavigationBar.css';
import logo from '../../assets/images/apLogo.png';
import burgerIcon from '../../assets/images/burgerIcon.png';
import searchIcon from '../../assets/images/search.png';
import notifIcon from '../../assets/images/notif.png';
import astroIcon from '../../assets/images/astroIcon.png';

const NavigationBar = () => {

    const [searchState, setSearchState] = useState(false);

    return (
        <section className='ap-navigation ap-py-15 ap-w-full ap-z-1000 ap-text-darkgrey'>
            <div className='ap-navigation-container'>

                <div className='ap-flex ap-align-center'>
                    <img src={ burgerIcon } alt="Icon Burger" className='ap-icon ap-mr-40' />
                    <img src={ logo } alt="Logo AkuPintar" className='ap-logo' />
                </div>

                <div className='ap-flex ap-font-16 ap-content-600'>
                    <div className='ap-nav-item'>
                        <a href="" className='ap-text-darkgrey'>BERANDA</a>
                    </div>
                    <div className='ap-nav-item'>
                        <a href="" className='ap-text-darkgrey'>BLOG</a>
                    </div>
                    <div className='ap-nav-item'>
                        <a href="" className='ap-text-darkgrey'>LAYANAN</a>
                    </div>
                    <div className='ap-nav-item'>
                        <a href="" className='ap-text-darkgrey'>TENTANG KAMI</a>
                    </div>
                    <div className='ap-nav-item'>
                        <a href="" className='ap-text-darkgrey'>FAQ</a>
                    </div>
                    <div className='ap-nav-item-last ap-font-14'>
                        <a href="" className='ap-text-white'><div className='ap-follow'>FOLLOW US</div></a>
                    </div>
                </div>

                <div className='ap-flex ap-align-center'>
                    <img src={ searchIcon } alt="Pencarian" className='ap-icon ap-mx-8' />
                    <img src={ notifIcon } alt="Notifikasi" className='ap-icon ap-mx-8' />
                    <img src={ astroIcon } alt="Notifikasi" className='ap-icon-v2 ap-mx-12' />
                </div>
            </div>
        </section>
    )
};

export default NavigationBar;
