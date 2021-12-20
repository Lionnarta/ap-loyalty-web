import React, { useState } from 'react'
import ShareModal from '../Modal/ShareModal'
import TutorialModal from '../Modal/TutorialModal'
import copyIcon from '../../assets/images/copy.png'
import shareIcon from '../../assets/images/share.png'
import friendIcon from '../../assets/images/moreFriend.png'
import arrowIcon from '../../assets/images/arrow.png'

interface BoxReferralProps {
    setDetailValue: (val: boolean) => void
}

const BoxReferral: React.FC<BoxReferralProps> = (props) => {

    const [showShare, setShowShare] = useState(false);
    const [showTutorial, setShowTutorial] = useState(false);

    return (
        <div className='ap-w-full ap-flex-col ap-align-center'>
            <div className='ap-referral-box ap-mb-30'>
                <div className='ap-flex ap-mb-16'>
                    <input type="text" placeholder='OCT23981' className='ap-referral-code ap-content-700-v2 ap-font-18 ap-text-darkgrey'/>
                    <div className='ap-referral-copy ap-flex ap-align-center ap-text-darkblue'>
                        <img src={ copyIcon } alt="Salin Kode Referral" className='ap-mr-10' />
                        <p className='ap-font-18 ap-content-500-v2'>Salin</p>
                    </div>
                </div>
                <div className='ap-referral-blue ap-flex ap-justify-center ap-align-center ap-mb-16'>
                    <img src={ shareIcon } alt="Share Kode Referral" className='ap-mr-10 ap-icon-v5' />
                    <p className='ap-content-500-v2' onClick={ () => setShowShare(true) }>Bagikan Kode Referralmu</p>
                </div>
                <div className='ap-flex ap-justify-center'>
                    <p className='ap-font-14 ap-referral-tutorial ap-mb-30' onClick={ () => setShowTutorial(true) }>Tutorial Ajak Teman</p>
                </div>
                <div className='ap-referral-friend ap-flex ap-align-center' onClick={ () => props.setDetailValue(true) } >
                    <div>
                        <p className='ap-font-12'>Teman yang diundang</p>
                        <p className='ap-font-18 ap-content-700'>3 Teman</p>
                    </div>
                    <div className="ap-align-center ap-flex">
                        <img src={ friendIcon } alt="Teman" className='ap-teman' />
                        <img src={ arrowIcon } alt="Referral" />
                    </div>
                </div>
            </div>
            <ShareModal showShare={ showShare } setShowShare={ setShowShare } />
            <TutorialModal showTutorial= { showTutorial } setShowTutorial={ setShowTutorial } />
        </div>
    )
}

export default BoxReferral
