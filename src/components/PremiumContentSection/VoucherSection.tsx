import React from 'react'
import '../CoinPoinSection/CoinPoinSection.css'
import './PremiumContentSection.css'
import voucher1 from '../../assets/images/voucher1.png'
import voucher2 from '../../assets/images/voucher2.png'
import voucher3 from '../../assets/images/voucher3.png'
import voucher4 from '../../assets/images/voucher4.png'
import coin from '../../assets/images/coin.png'
import poin from '../../assets/images/poin.png'
import backArrow from '../../assets/images/backArrow2.png'

interface VSProps {
    sideState: boolean,
    width: number,
}

const VoucherSection:React.FC<VSProps> = (props) => {
    return (
        <div>
            <section className='ap-cp-v4 ap-text-darkgrey'>
                <div className='ap-flex ap-align-center ap-mb-20'>
                    <a href='/ap-loyalty-web/cp' className='ap-flex'><img src={ backArrow } alt="Kembali" className='ap-mr-10 ap-pointer' /></a>
                    <p className='ap-font-20 ap-content-700'>Voucher Pintar</p>
                </div>

                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside ap-wrap' : 'ap-cp-card-container ap-wrap' }>
                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
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

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ voucher3 } alt="Voucher" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp25.000 Voucher</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" className='ap-cp-voucher-icon' />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2' }>2500 AP Coin</p>
                            </div>
                            <div className='ap-cp-btm-info' style={{marginTop: '0px'}}>
                                <img src={ poin } alt="Poin" className='ap-cp-voucher-icon' style={{marginRight: "15px"}} />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2' }>2500 AP Poin</p>
                            </div>
                        </div>
                    </a>

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                        <img src={ voucher4 } alt="Voucher" />
                        <div className='ap-cp-card-content'>
                            <div className='ap-cp-my-auto'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp50.000 Voucher</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-btm-info ap-cp-btm-info-wside' : 'ap-cp-btm-info' }>
                                <img src={ coin } alt="Coin" className='ap-cp-voucher-icon' />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-orange-v2 ap-cp-responsive-font-v2' }>5000 AP Coin</p>
                            </div>
                            <div className='ap-cp-btm-info' style={{marginTop: '0px'}}>
                                <img src={ poin } alt="Poin" className='ap-cp-voucher-icon' style={{marginRight: "15px"}} />
                                <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2-noside' : 'ap-content-600 ap-font-18 ap-text-darkblue ap-cp-responsive-font-v2' }>5000 AP Poin</p>
                            </div>
                        </div>
                    </a>

                    <a href='/ap-loyalty-web/cp/pa/d' className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
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

export default VoucherSection
