import React from 'react'
import './CoinPoinSection.css'
import pa from '../../assets/images/pa.png'
import pa2 from '../../assets/images/pa2.png'
import coin from '../../assets/images/coin.png'

interface CPPAProps {
    sideState: boolean,
    width: number,
}

const CoinPoinPremiumAccess:React.FC<CPPAProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v3 ap-text-darkgrey'>
                <div className='ap-flex ap-space ap-mb-20'>
                    <p className='ap-font-20 ap-content-700'>Akses Premium</p>
                    <p className='ap-font-20 ap-content-500-v2 ap-text-darkblue ap-pointer'>Lihat Semua</p>
                </div>
                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside' : 'ap-cp-card-container' }>
                    <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside' : 'ap-cp-card' }>
                        <img src={ pa } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>Try Out Premium 1x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>500 AP Coin</p>
                            </div>
                        </div>
                    </div>
                    <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside' : 'ap-cp-card' }>
                        <img src={ pa2 } alt="Premium Access" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16'>Aku Pintar</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-22 ap-text-black ap-cp-responsive-font-v1' }>AP Konseling 1x</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-22 ap-text-orange-v2 ap-cp-responsive-font-v2' }>1000 AP Coin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoinPoinPremiumAccess
