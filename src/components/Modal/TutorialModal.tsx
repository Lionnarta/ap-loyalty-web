import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import astrid from '../../assets/images/astrid.png'
import timesIcon from '../../assets/images/times2.png'
import carousel1 from '../../assets/images/carousel1.png'
import carousel2 from '../../assets/images/carousel2.png'
import carousel3 from '../../assets/images/carousel3.png'
import carousel4 from '../../assets/images/carousel4.png'

interface TutorialProps {
    showTutorial: boolean,
    setShowTutorial: React.Dispatch<React.SetStateAction<boolean>>,
}

const TutorialModal:React.FC<TutorialProps> = (props) => {

    const [carouselPage, setCarouselPage] = useState(1);

    const maxPage = 4;

    const nextPage = () => {
        if (carouselPage < 4) {
            setCarouselPage(carouselPage + 1);
        }
    }

    const prevPage = () => {
        if (carouselPage > 1) {
            setCarouselPage(carouselPage - 1);
        }
    }

    const setPage = (page: number) => {
        if ((page >= 1 && page <= 4) && page != carouselPage) {
            setCarouselPage(page);
        }
    }

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showTutorial ? 1 : 0,
        transform: props.showTutorial ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showTutorial ? (
                    <div className='ap-modal-bg'>
                        <animated.div style={ animation }>
                            <div className='ap-modal-position'>
                                <div className='ap-modal-container-v3'>
                                    <div className='ap-close-modal ap-close-modal-v2' onClick={ () => props.setShowTutorial(false) }>
                                        <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                    </div>
                                    <div className='ap-w-full'>
                                        <div className='ap-flex ap-space ap-align-center'>
                                            <img src={ astrid } alt="Astrid" className='ap-carousel-astrid' />
                                            <div>
                                                <p className='ap-carousel-header ap-font-25 ap-content-700 ap-right ap-text-white ap-mb-10'>Lebih Seru Belajar Bersama Teman-Temanmu di AkuPintar</p>
                                                <p className='ap-carousel-header ap-content-400-v2 ap-font-16 ap-right ap-text-white ap-mb-10'>Ajak Temanmu Gabung Dengan Kode Referralmu!</p>
                                            </div>
                                        </div>
                                        <div className='ap-carousel-c'>
                                            <div className='ap-carousel'>
                                                <div className={ carouselPage === 1 ? 'active' : 'ap-carousel-item' }>
                                                    <img src={ carousel1 } alt="Referral AkuPintar" className='ap-carousel-img ap-mb-20' />
                                                    <p className='ap-font-18 ap-content-600 ap-text-white ap-mb-30'>Buka Menu "Ajak Teman" di bagian "Account"</p>
                                                </div>
                                                <div className={ carouselPage === 2 ? 'active' : 'ap-carousel-item' }>
                                                    <img src={ carousel2 } alt="Referral AkuPintar" className='ap-carousel-img ap-mb-20' />
                                                    <p className='ap-font-18 ap-content-600 ap-text-white'>Gampang banget!</p>
                                                    <p className='ap-font-18 ap-content-600 ap-text-white ap-mb-20'>Salin dan bagikan Kode Referralmu ke semua teman</p>
                                                </div>
                                                <div className={ carouselPage === 3 ? 'active' : 'ap-carousel-item' }>
                                                    <img src={ carousel3 } alt="Referral AkuPintar" className='ap-carousel-img ap-mb-20' />
                                                    <p className='ap-font-18 ap-content-600 ap-text-white ap-mb-20'>Kamu juga bisa salin kodemu dan bagikan secara manual ke teman-temanmu</p>
                                                </div>
                                                <div className={ carouselPage === 4 ? 'active' : 'ap-carousel-item' }>
                                                    <img src={ carousel4 } alt="Referral AkuPintar" className='ap-carousel-img ap-mb-20' />
                                                    <p className='ap-font-18 ap-content-600 ap-text-white'>Ajak sepuluh teman bergabung menjadi Sobat Pintar!</p>
                                                    <p className='ap-font-18 ap-content-600 ap-text-white ap-mb-20'>Dapatkan ratusan poin dan tukarkan ke beragam benefitnya!</p>
                                                </div>
                                            </div>
                                            <div className={ carouselPage === 1 ? 'ap-carousel-btn ap-prev disable' : 'ap-carousel-btn ap-prev' } onClick={ prevPage }>&#8249;</div>
                                            <div className={ carouselPage === 4 ? 'ap-carousel-btn ap-next disable' : 'ap-carousel-btn ap-next' } onClick={ nextPage }>&#8250;</div>
                                        </div>
                                        <div className='ap-flex ap-justify-center'>
                                            <div className='ap-carousel-bullet-c ap-font-18 ap-content-700'>
                                                <div className={ carouselPage === 1 ? 'ap-carousel-bullet bullet-active' : 'ap-carousel-bullet' } onClick={ () => setPage(1) }><div className='ap-bullet-num'>1</div></div>
                                                <div className={ carouselPage === 2 ? 'ap-carousel-bullet bullet-active' : 'ap-carousel-bullet' } onClick={ () => setPage(2) }><div className='ap-bullet-num'>2</div></div>
                                                <div className='ap-carousel-line'></div>
                                                <div className={ carouselPage === 3 ? 'ap-carousel-bullet bullet-active' : 'ap-carousel-bullet' } onClick={ () => setPage(3) }><div className='ap-bullet-num'>3</div></div>
                                                <div className={ carouselPage === 4 ? 'ap-carousel-bullet bullet-active' : 'ap-carousel-bullet' } onClick={ () => setPage(4) }><div className='ap-bullet-num'>4</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                ) : null }
        </div>
    )
}

export default TutorialModal
