import React, { useState } from 'react';
import './ReferralSection.css';
import astroYes from '../../assets/images/astroYes.png';
import shareIcon from '../../assets/images/share.png';
import teman1 from '../../assets/images/teman1.png';
import teman2 from '../../assets/images/teman2.png';
import teman3 from '../../assets/images/teman3.png';
import arrowIcon from '../../assets/images/arrow.png';

const ReferralSection = () => {

    const [friendCount, setFriendCount] = useState(3);

    return (
        <section className='ap-referral ap-text-white ap-content-400 ap-font-18'>
            <div className='ap-referral-container ap-flex'>
                <div className='ap-referral-ls'>
                    <img src={ astroYes } alt="Astro" className='ap-mb-20' />
                    <p className='ap-font-25 ap-content-600 ap-mb-10'>Ajak teman kamu untuk belajar bersama di Aku Pintar</p>
                    <p className='ap-font-20 ap-content-500-v2'>Senang belajar menggunakan Aku Pintar? Mari ajak temanmu untuk mengetahui minat dan bakatnya serta belajar bersama menggunakan Aku Pintar</p>
                </div>
                <div className='ap-referral-rs'>
                    <div className='ap-flex-col ap-align-center'>
                        <div className='ap-referral-box ap-mb-20'>
                            <input type="text" placeholder='OCT23981' className='ap-referral-code ap-content-700-v2 ap-font-18 ap-text-darkgrey ap-mb-16'/>
                            <div className='ap-referral-share ap-flex ap-justify-center ap-align-center ap-mb-16'>
                                <img src={ shareIcon } alt="Share Kode Referral" className='ap-mr-10 ap-icon' />
                                <p className='ap-content-500-v2'>Bagikan Kode Referralmu</p>
                            </div>
                            <p className='ap-font-14 ap-referral-tutorial ap-mb-20'>Tutorial Ajak Teman</p>
                            <div className='ap-referral-friend ap-flex ap-align-center'>
                                <div className='ap-referral-fl'>
                                    <p className='ap-font-12'>Teman yang diundang</p>
                                    <p className='ap-font-18 ap-content-700'>3 Teman</p>
                                </div>
                                <div className="ap-referral-fr ap-align-center ap-flex">
                                    <img src={ teman1 } alt="Teman" className='ap-teman' />
                                    <img src={ teman2 } alt="Teman" className='ap-teman' />
                                    <img src={ teman3 } alt="Teman" className='ap-teman' />
                                </div>
                                <div className='ap-align-center ap-flex'>
                                    <img src={ arrowIcon } alt="Referral" />
                                </div>
                            </div>
                        </div>
                        <p>Syarat dan Ketentuan</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReferralSection;
