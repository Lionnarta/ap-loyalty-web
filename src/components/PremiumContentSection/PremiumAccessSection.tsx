import React from 'react'
import '../CoinPoinSection/CoinPoinSection.css'
import './PremiumContentSection.css'
import pa from '../../assets/images/pa.png'
import pa2 from '../../assets/images/pa2.png'
import pa3 from '../../assets/images/pa3.png'
import pa4 from '../../assets/images/pa4.png'
import coin from '../../assets/images/coin.png'
import backArrow from '../../assets/images/backArrow2.png'

interface PASProps {
    sideState: boolean,
    width: number,
}

const PremiumAccessSection:React.FC<PASProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v4 ap-text-darkgrey'>
                <div className='ap-flex ap-align-center ap-mb-20'>
                    <a href='/ap-loyalty-web/cp' className='ap-flex'><img src={ backArrow } alt="Kembali" className='ap-mr-10 ap-pointer' /></a>
                    <p className='ap-font-24 ap-content-700'>Akses Premium</p>
                </div>

                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside ap-wrap' : 'ap-cp-card-container ap-wrap' }>
                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ pa } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>Try Out Premium 1x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>500 AP Coin</p>
                            </div>
                        </div>
                    </a>

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ pa3 } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>Try Out Premium 3x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>1200 AP Coin</p>
                            </div>
                        </div>
                    </a>

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ pa2 } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>AP Konseling 1x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>1000 AP Coin</p>
                            </div>
                        </div>
                    </a>

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ pa4 } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>AP Konseling 3x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>2500 AP Coin</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='ap-mt-20 ap-flex ap-space ap-align-center'>
                    <p className='ap-content-500 ap-font-16 ap-text-darkgrey'>Menampilkan 1 - 4 hasil dari 4</p>
                    <div className='ap-flex ap-align-center ap-pcs-border'>
                        <p className='ap-pcs-btn'>&#8249;</p>
                        <p className='ap-pcs-btn-v2'>1</p>
                        <p className='ap-pcs-btn'>&#8250;</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PremiumAccessSection
