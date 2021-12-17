import React from 'react'
import backArrow from '../../assets/images/backArrow.png'
import user from '../../assets/images/user.png'
import xpIcon from '../../assets/images/xp.png'
import pointIcon from '../../assets/images/point.png'
import teman1 from '../../assets/images/teman1.png'
import teman2 from '../../assets/images/teman2.png'
import teman3 from '../../assets/images/teman3.png'

interface BoxFriendsProps {
    setDetailValue: (val: boolean) => void
}

const BoxFriends: React.FC<BoxFriendsProps> = (props) => {
    return (
        <div className='ap-referral-box ap-mb-30'>
            <div className='ap-flex ap-mb-30'>
                <img src={ backArrow } alt="Kembali" className='ap-mr-20 ap-icon ap-self-center ap-pointer' onClick={ () => props.setDetailValue(false) } />
                <p className='ap-font-20 ap-content-700-v2 ap-text-darkgrey'>Teman yang diundang</p>
            </div>
            <div className='ap-referral-scroll-box ap-text-darkgrey ap-mb-30'>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>1</p>
                        <img src={ teman1 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Elaine Budi</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>9 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>2 <img src={ xpIcon } alt="XP AkuPintar" /> + 100 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>2</p>
                        <img src={ teman2 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Raihan Pratama</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>11 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>4 <img src={ xpIcon } alt="XP AkuPintar" /> + 200 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>3</p>
                        <img src={ teman3 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Rahma Bintang</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>13 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>8 <img src={ xpIcon } alt="XP AkuPintar" /> + 300 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>4</p>
                        <img src={ teman1 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Elaine Budi</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>13 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>12 <img src={ xpIcon } alt="XP AkuPintar" /> + 400 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>5</p>
                        <img src={ teman2 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Raihan Pratama</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>15 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>16 <img src={ xpIcon } alt="XP AkuPintar" /> + 500 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
                <div className='ap-referral-item ap-flex ap-align-center ap-space'>
                    <div className='ap-flex ap-align-center'>
                        <p className='ap-font-14 ap-content-700 ap-mr-20'>6</p>
                        <img src={ teman3 } alt="Refferal AkuPintar" className='ap-mr-10' />
                        <div className='ap-content-500'>
                            <p className='ap-font-14 ap-text-black'>Rahma Bintang</p>
                            <p className='ap-font-12 ap-text-silvergrey-v2'>17 Desember 2021</p>
                        </div>
                    </div>
                    <p className='ap-text-black ap-font-14 ap-content-500'>20 <img src={ xpIcon } alt="XP AkuPintar" /> + 600 <img src={ pointIcon } alt="Point AkuPintar" /></p>
                </div>
            </div>
            <div className='ap-referral-blue ap-flex ap-justify-center ap-align-center'>
                <img src={ user } alt="Invite Teman" className='ap-mr-10 ap-icon-v3' />
                <p className='ap-content-500-v2 ap-font-14'>Ajak Teman Lebih Banyak</p>
            </div>
        </div>
    )
}

export default BoxFriends
