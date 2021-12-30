import React, { useState } from 'react'
import './LoyaltySection.css'
import member from '../../assets/images/member.png'
import stepbar from '../../assets/images/stepbar.png'
import Benefit from './Benefit'
import BenefitList from './BenefitList'
import TermModalLYL from '../Modal/TermModalLYL'

interface LSProp {
    sideState: boolean,
    width: number
}

const LoyaltySection:React.FC<LSProp> = (props) => {

    const [benefit, setShowBenefit] = useState(true);
    const [showTermLyl, setShowTermLyl] = useState(false);

    return (
        <div className='ap-w-full'>
            <section className='ap-loyalty'>
                <div className={ props.sideState && (props.width <= 1200 && props.width > 768) ? 'ap-loyalty-container ap-loyalty-container-wside' : 'ap-loyalty-container' }>
                    <div className={ props.sideState && (props.width <= 1200 && props.width > 768) ? 'ap-lyl-ls ap-lyl-ls-wside' : 'ap-lyl-ls' }>
                        <img src={ member } alt="Member Aku Pintar" className={ props.sideState && (props.width <= 1200 && props.width > 768) ? 'ap-lyl-img ap-lyl-img-wside' : 'ap-lyl-img' } />
                        <img src={ stepbar } alt="Progress" className={ props.sideState && (props.width <= 1200 && props.width > 768) ? 'ap-lyl-img-v2 ap-lyl-img-v2-wside' : 'ap-lyl-img-v2' } />
                    </div>
                    <div className={ props.sideState && (props.width <= 1200 && props.width > 768) ? 'ap-lyl-rs ap-lyl-rs-wside' : 'ap-lyl-rs' }>
                        {
                            benefit ? <Benefit setShowBenefit={ setShowBenefit } /> : <BenefitList setShowBenefit={ setShowBenefit } />
                        }
                        <p className='ap-center ap-underline ap-text-white ap-content-400 ap-font-18 ap-pointer' onClick={ () => setShowTermLyl(true) }>Syarat dan Ketentuan</p>
                    </div>
                </div>
            </section>
            <TermModalLYL showTermLyl={ showTermLyl } setShowTermLyl={ setShowTermLyl } />
        </div>
    )
}

export default LoyaltySection
