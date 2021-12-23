import React, { useState } from 'react'
import ShareModal from '../Modal/ShareModal'
import './ReferralSection.css'
import BoxReferral from './BoxReferral'
import BoxFriends from './BoxFriends'
import TermModal from '../Modal/TermModal'
import astroYes from '../../assets/images/astroYes.png'

interface ReferralProp {
    sideState: boolean,
    width: number
}

const ReferralSection:React.FC<ReferralProp> = (props) => {

    const [detailState, setDetailState] = useState(false);
    const [showTerm, setShowTerm] = useState(false);
    const [showShare, setShowShare] = useState(false);

    const setDetailValue = (val: boolean) => {
        setDetailState(val)
    }

    const openTerm = () => {
        setShowTerm(!showTerm);
    };

    return (
        <div>
            <section className='ap-referral ap-text-white ap-content-400 ap-font-18'>
                <div className={ (props.sideState && props.width <= 1100)? 'ap-referral-container ap-flex-col' : ' ap-flex ap-referral-container' }>
                    <div className={ (props.sideState && props.width <= 1100)? 'ap-referral-responsive ap-center ap-mb-20' : 'ap-referral-ls'}>
                        <img src={ astroYes } alt="Astro" className='ap-referral-astro ap-mb-20' />
                        <p className='ap-font-25 ap-content-600 ap-mb-10'>Ajak teman kamu untuk belajar bersama di Aku Pintar</p>
                        <p className='ap-font-20 ap-content-500-v2'>Senang belajar menggunakan Aku Pintar? Mari ajak temanmu untuk mengetahui minat dan bakatnya serta belajar bersama menggunakan Aku Pintar</p>
                    </div>
                    <div className={ (props.sideState && props.width <= 1100)? 'ap-referral-responsive' : 'ap-referral-rs'}>
                        <div className='ap-flex-col ap-align-center'>
                            {
                                !detailState?<BoxReferral setDetailValue={ setDetailValue } setShowShare={ setShowShare } />:<BoxFriends setDetailValue={ setDetailValue } setShowShare={ setShowShare } />
                            }
                            <p className='ap-font-18 ap-underline ap-pointer' onClick={ openTerm }>Syarat dan Ketentuan</p>
                        </div>
                    </div>
                </div>
            </section>
            <ShareModal showShare={ showShare } setShowShare={ setShowShare } />
            <TermModal showTerm={ showTerm } setShowTerm={ setShowTerm } />
        </div>
    )
}

export default ReferralSection;
