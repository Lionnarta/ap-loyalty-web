import React from 'react'
import './LoyaltySection.css'
import map from '../../assets/images/map.png'
import astridgo from '../../assets/images/astridgo.png'

interface BenefitProps {
    setShowBenefit: React.Dispatch<React.SetStateAction<boolean>>,
}

const Benefit:React.FC<BenefitProps> = (props) => {
    return (
        <div className='ap-lyl-benefit'>
            <p className='ap-content-700-v2 ap-font-20 ap-text-darkgrey ap-mb-16'>Benefit</p>
            <div className='ap-lyl-benefit-c ap-mb-20'>
                <div>
                    <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Jelajah Fitur Gratis</p>
                    <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Kamu bisa jelajahi Aku Pintar dan nikmati banyak fitur gratisnya</p>
                </div>
                <img src={ map } alt="Eksplorasi Loyalty" />
            </div>
            <p className='ap-lyl-btn ap-mb-30' onClick={ () => props.setShowBenefit(false) }>Lihat Semua Benefit</p>
            <p className='ap-content-700-v2 ap-font-20 ap-text-darkgrey ap-mb-16'>Dapatkan XP dan AP Poin</p>
            <div className='ap-lyl-benefit-c2'>
                <img src={ astridgo } alt="Astrid" className='ap-lyl-img-v3' />
                <div className='ap-lyl-w'>
                    <p className='ap-content-400 ap-font-12'>Halo, Sobat Pintar</p>
                    <p className='ap-content-600 ap-font-14'>Yuk ikutan keseruan Challange dan raih hingga ribuan AP Poin!</p>
                </div>
            </div>
        </div>
    )
}

export default Benefit
