import React from 'react'
import './RewardSection.css'
import '../CoinPoinSection/CoinPoinSection.css'
import discount from '../../assets/images/discount.png'

interface AccessrNavProps {
    sideState: boolean,
    width: number,
}

const AccessNav:React.FC<AccessrNavProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <div className={ props.sideState && (props.width < 1024 && props.width > 768) ? 'ap-an-box ap-an-box-wside' : 'ap-an-box' }>
                <img src={ discount } alt="Akses Premium" className={ props.sideState && (props.width < 1024 && props.width > 768) ? 'ap-an-img ap-an-img-wside' : 'ap-an-img' } />
                <div className={ props.sideState && (props.width < 1024 && props.width > 768) ? 'ap-an-text ap-an-text-wside' : 'ap-an-text' }>
                    <p className='ap-content-500 ap-font-22 ap-mb-10'>Whoops!</p>
                    <p className='ap-content-400-v2 ap-font-18'>Belum ada Akses Premium yang tersedia nih Sobat Pintar, tukarkan poin dan coinmu sekarang juga!</p>
                </div>
                <a href="/ap-loyalty-web" className={ props.sideState && (props.width < 1024 && props.width > 768) ? 'ap-an-btn ap-an-btn-wside' : 'ap-an-btn' }>Tukar AP Coin & Poin</a>
            </div>
        </div>
    )
}

export default AccessNav
