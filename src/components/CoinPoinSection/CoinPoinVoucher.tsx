import React from 'react'
import './CoinPoinSection.css'
import voucher1 from '../../assets/images/voucher1.png'
import voucher2 from '../../assets/images/voucher2.png'
import coin from '../../assets/images/coin.png'
import poin from '../../assets/images/poin.png'

interface CPVProps {
    sideState: boolean,
    width: number
}

const CoinPoinVoucher:React.FC<CPVProps> = (props) => {
    return (
        <div className='ap-w-full ap-cp-btm-most'>
            <section className='ap-cp-v3 ap-text-darkgrey'>
                <div className='ap-flex ap-space ap-mb-20'>
                    <p className='ap-font-20 ap-content-700'>Voucher Pintar</p>
                    <a href='/cp/vc' className='ap-font-20 ap-content-500-v2 ap-text-darkblue ap-pointer ap-none'>Lihat Semua</a>
                </div>
                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside' : 'ap-cp-card-container' }>
                    <a href='/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside' : 'ap-cp-card' }>
                        <img src={ voucher1 } alt="Voucher" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp10.000 Voucher</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" className='ap-cp-voucher-icon' />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2' }>1000 AP Coin</p>
                            </div>
                            <div className='ap-cp-btm-info' style={{marginTop: '0px'}}>
                                <img src={ poin } alt="Poin" className='ap-cp-voucher-icon' style={{marginRight: "15px"}} />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2' }>1000 AP Poin</p>
                            </div>
                        </div>
                    </a>
                    <a href='/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside' : 'ap-cp-card' }>
                        <img src={ voucher2 } alt="Voucher" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Lembaga Bahasa LIA</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>25% OFF For All Programs</p>
                            </div>
                            <div>
                                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                    <img src={ coin } alt="Coin" className='ap-cp-voucher-icon' />
                                    <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2' }>1000 AP Coin</p>
                                </div>
                                <div className='ap-cp-btm-info' style={{marginTop: '0px'}}>
                                    <img src={ poin } alt="Poin" className='ap-cp-voucher-icon' style={{marginRight: "15px"}} />
                                    <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2' }>1000 AP Poin</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default CoinPoinVoucher
