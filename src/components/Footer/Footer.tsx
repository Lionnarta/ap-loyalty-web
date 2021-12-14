import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo_ap.png';
import emailIcon from '../../assets/images/email.png';
import phoneIcon from '../../assets/images/phone.png';
import fbIcon from '../../assets/images/fb.png';
import igIcon from '../../assets/images/ig.png';
import ytIcon from '../../assets/images/yt.png';
import tiktokIcon from '../../assets/images/tiktok.png';
import linkedinIcon from '../../assets/images/linkedin.png';

const Footer = () => {
    return (
        <section className='ap-text-white'>
            <div className='ap-banner ap-footer'>
                <div className='ap-flex ap-content-400 ap-footer-block'>
                    <div className='ap-f-section-4 ap-mb-16'>
                        <img src={ logo } alt="Logo AkuPintar" className='ap-logo-v2' />
                        <p className='ap-font-12 ap-justify'>Aku Pintar adalah perusahaan teknologi informasi yang  bergerak dibidang pendidikan, nama perusahaan kami adalah PT. Aku Pintar Indonesia</p>
                    </div>
                    <div className='ap-f-section-4 ap-mb-16'>
                        <p className='ap-font-16 ap-content-500 ap-mb-16'>Kontak Kami</p>
                        <div className="ap-flex ap-align-center ap-mb-5">
                            <img src={ phoneIcon } alt="Kontak AkuPintar" className='ap-pr-10 ap-icon-v3' />
                            <p className='ap-font-12 ap-letter-43'>+62 812 2000453</p>
                        </div>
                        <div className="ap-flex ap-align-center ap-mb-5">
                            <img src={ emailIcon } alt="Kontak AkuPintar" className='ap-pr-10 ap-icon-v3' />
                            <p className='ap-font-12 ap-letter-43'>info@akupintar.id</p>
                        </div>
                        <p className='ap-justify ap-font-14'>
                            Grand Slipi Tower Lt. 42
                            Jl. S. Parman Kav 22-24
                            Jakarta Barat
                        </p>
                    </div>
                    <div className="ap-f-section-4">
                        <p className='ap-font-16 ap-content-500 ap-mb-16'>Layanan</p>
                        <p className='ap-font-14 ap-mb-16'>Kebijakan Privasi</p>
                        <p className='ap-font-14 ap-mb-16'>Syarat & Ketentuan</p>
                        <p className='ap-font-14 ap-mb-16'>Karir</p>
                    </div>
                    <div className="ap-f-section-4 ap-mb-16">
                        <p className='ap-font-16 ap-content-500 ap-mb-16'>Ikuti Kami</p>
                        <a href="" className='ap-mr-10'><img src={ fbIcon } alt="Facebook AkuPintar" /></a>
                        <a href="" className='ap-mr-10'><img src={ igIcon } alt="Instagram AkuPintar" /></a>
                        <a href="" className='ap-mr-10'><img src={ ytIcon } alt="Youtube AkuPintar" /></a>
                        <a href="" className='ap-mr-10'><img src={ tiktokIcon } alt="TikTok AkuPintar" /></a>
                        <a href="" className='ap-mr-10'><img src={ linkedinIcon } alt="LinkeIn AkuPintar" /></a>
                    </div>
                </div>
            </div>

            <div className='ap-footer'>
                <div className='ap-footer-c'>
                    <p>© 2020 Aku Pintar. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;
