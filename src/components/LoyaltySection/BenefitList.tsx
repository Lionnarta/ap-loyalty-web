import React from 'react'
import './LoyaltySection.css'
import backArrow from '../../assets/images/backArrow.png'
import user from '../../assets/images/user.png'

interface BenefitListProps {
    setShowBenefit: React.Dispatch<React.SetStateAction<boolean>>,
}

const BenefitList:React.FC<BenefitListProps> = (props) => {
    return (
        <div className='ap-lyl-benefit'>
            <div className="ap-flex ap-align-center ap-mb-16">
                <img src={ backArrow } alt="Kembali" className='ap-mr-20 ap-icon ap-self-center ap-pointer' onClick={ () => props.setShowBenefit(true) } />
                <p className='ap-content-700-v2 ap-font-20 ap-text-darkgrey'>Benefit</p>
            </div>
            <div className='ap-lyl-btn ap-mb-30 ap-flex ap-align-center ap-justify-center'>
                <img src={ user } alt="User" className='ap-mr-10' />
                <p>Ajak Teman Lebih Banyak</p>
            </div>
        </div>
    )
}

export default BenefitList
