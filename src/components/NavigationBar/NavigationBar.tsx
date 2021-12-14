import React, { useState } from 'react';
import './NavigationBar.css';
import NavigationBarMobile from './NavigationBarMobile';
import logo from '../../assets/images/apLogo.png';
import burgerIcon from '../../assets/images/burgerIcon.png';
import searchIcon from '../../assets/images/search.png';
import notifIcon from '../../assets/images/notif.png';
import astroIcon from '../../assets/images/astroIcon.png';

interface SideProp {
    toggleSide: () => void
};

const NavigationBar: React.FC<SideProp> = (props) => {

    const [searchState, setSearchState] = useState(false);

    const toggle = () => {
        setSearchState(!searchState);
    }

    return (
        <section className='ap-navigation ap-py-15 ap-w-full ap-z-1000 ap-text-darkgrey'>
            <div className='ap-navigation-container'>

                <div className='ap-flex ap-align-center'>
                    <img src={ burgerIcon } alt="Icon Burger" className='ap-icon ap-mr-40 ap-pointer' onClick={ props.toggleSide } />
                    <img src={ logo } alt="Logo AkuPintar" className='ap-logo ap-pointer' />
                </div>

                <div id='ap-nav-desktop' className='ap-flex ap-font-16 ap-content-600'>
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
                    <img src={ searchIcon } alt="Pencarian" className='ap-icon ap-mx-8 ap-pointer' />
                    <img src={ notifIcon } alt="Notifikasi" className='ap-icon ap-mx-8 ap-pointer' />
                    <img src={ astroIcon } alt="Notifikasi" className='ap-icon-v2 ap-mx-12 ap-pointer' />
                    <svg id='ap-nav-mobile' className='ap-fill-darkgrey ap-pointer' onClick={ toggle } width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
                </div>

            </div>

            {
                searchState?<NavigationBarMobile />:null
            }
        </section>
    )
};

export default NavigationBar;