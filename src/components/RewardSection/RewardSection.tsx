import React, { useState } from 'react'
import './RewardSection.css'
import '../CoinPoinSection/CoinPoinSection.css'
import VoucherNav from './VoucherNav'
import AccessNav from './AccessNav'
import backArrow from '../../assets/images/backArrow2.png'

interface RewardSectionProps {
    sideState: boolean,
    width: number,
}

const RewardSection:React.FC<RewardSectionProps> = (props) => {

    const [nav, setNav] = useState("voucher");

    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v4 ap-text-darkgrey'>
                <div className='ap-flex ap-align-center ap-mb-20'>
                    <a href='/ap-loyalty-web/cp' className='ap-flex'><img src={ backArrow } alt="Kembali" className='ap-mr-10 ap-pointer' /></a>
                    <p className='ap-font-24 ap-content-700'>Rewards Saya</p>
                </div>

                <div className="ap-flex ap-mb-40">
                    <p className={ nav==="voucher" ? 'ap-rs-tab ap-rs-tab-active ap-mr-20' : 'ap-rs-tab ap-mr-20' } onClick={ () => setNav("voucher") }>Voucher Pintar</p>
                    <p className={ nav==="akses" ? 'ap-rs-tab ap-rs-tab-active' : 'ap-rs-tab' } onClick={ () => setNav("akses") }>Akses Premium</p>
                </div>

                {
                    nav==="voucher" ? <VoucherNav sideState={ props.sideState } width={ props.width } /> : <AccessNav sideState={ props.sideState } width={ props.width } />
                }
            </section>
        </div>
    )
}

export default RewardSection
