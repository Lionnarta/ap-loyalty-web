import React from 'react';
import { Navigate } from 'react-router-dom';
import './SideBar.css';
import astroIcon from '../../assets/images/astroIcon2.png';

const SideBar = () => {

    return (
        <section className='ap-sidebar ap-text-darkgrey ap-content-400 ap-font-16'>
            <div className='ap-s-profil ap-mb-40'>
                <img src={ astroIcon } alt="Astro" className='ap-icon-v4 ap-mb-10' />
                <p className='ap-font-20 ap-content-700'>Astro Aku Pintar</p>
                <p className='ap-font-12 ap-text-silvergrey'>SMAN Aku Pintar Jakarta</p>
            </div>
            <div>
                <a href="" className='ap-block ap-s-link'>
                    AP Loyalty
                    <span className='ap-font-12 ap-text-white ap-content-400 ap-s-new'>Baru</span>
                </a>
                <a href="/ap-loyalty-web/cp" className={ window.location.pathname.startsWith('/ap-loyalty-web/cp') ? 'ap-block ap-s-link ap-s-active' : 'ap-block ap-s-link' }>
                    AP Coin & AP Poin
                    <span className='ap-font-12 ap-text-white ap-content-400 ap-s-new'>Baru</span>
                </a>
                <a href="/ap-loyalty-web" className={ window.location.pathname=='/ap-loyalty-web' ? 'ap-block ap-s-link ap-s-active' : 'ap-block ap-s-link' }>
                    Ajak Teman
                    <span className='ap-font-12 ap-text-white ap-content-400 ap-s-new'>Baru</span>
                </a>
                <a href="" className='ap-block ap-s-link'>Dashboard</a>
                <a href="" className='ap-block ap-s-link'>Minat Pintar</a>
                <a href="" className='ap-block ap-s-link'>Belajar Pintar</a>
                <a href="" className='ap-block ap-s-link'>Tes Pintar</a>
                <a href="" className='ap-block ap-s-link'>AP Live</a>
                <a href="" className='ap-block ap-s-link'>Teman Pintar</a>
                <div className='ap-s-link-border'></div>
            </div>
            <div>
                <a href="" className='ap-block ap-s-link'>Cari Sekolah</a>
                <a href="" className='ap-block ap-s-link'>Zonasi</a>
                <a href="" className='ap-block ap-s-link'>Banding Sekolah</a>
                <div className='ap-s-link-border'></div>
            </div>
            <div>
                <a href="" className='ap-block ap-s-link'>Komunitas Pintar</a>
                <a href="" className='ap-block ap-s-link'>Kursus Pintar</a>
                <a href="" className='ap-block ap-s-link'>Ruang Pintar</a>
                <a href="" className='ap-block ap-s-link'>Pendaftaran Kampus</a>
                <a href="" className='ap-block ap-s-link'>Konseling Pintar</a>
                <a href="" className='ap-block ap-s-link'>Dana Pintar</a>
                <a href="" className='ap-block ap-s-link'>Beasiswa Pintar</a>
                <div className='ap-s-link-border'></div>
            </div>
            <div>
                <a href="" className='ap-block ap-s-link'>Subscription</a>
                <a href="" className='ap-block ap-s-link'>Rasionalisasi</a>
                <a href="" className='ap-block ap-s-link'>Diskusi Pintar</a>
                <a href="" className='ap-block ap-s-link'>Info Pintar</a>
            </div>
        </section>
    )
}

export default SideBar;