import React, { useState } from 'react'
import './Modal.css'
import coin from '../../assets/images/coin.png'
import poin from '../../assets/images/poin.png'

interface EM1Props {
    showEM1: boolean,
    setShowEM1: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEM2: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEM: React.Dispatch<React.SetStateAction<boolean>>,
}

const ExchangeModal1:React.FC<EM1Props> = (props) => {

    const [radioValue, setRadioValue] = useState("");

    const closeModal = () => {
        if (radioValue !== "") {
            props.setShowEM1(false);
            setRadioValue("");
            props.setShowEM2(true);
        }
    }

    return (
        <div>
            { props.showEM1 ? (
                <div className='ap-modal-position'>
                    <div className='ap-modal-container-v5 ap-text-black ap-flex-col ap-space'>
                        <div>
                            <p className='ap-content-600 ap-font-18 ap-center ap-mb-40'>Metode Penukaran</p>
                            <div className='ap-mb-40'>
                                <p className='ap-content-500 ap-font-16 ap-mb-16'>Saldo</p>
                                <div className="ap-flex ap-align-center">
                                    <img src={ coin } alt="Coin Pintar" className='ap-em-icon ap-mr-10' />
                                    <p className='ap-content-600 ap-font-16 ap-text-orange-v2 ap-mr-30'>1500 AP Coin</p>
                                    <img src={ poin } alt="Poin Pintar" className='ap-em-icon ap-mr-10' />
                                    <p className='ap-content-600 ap-font-16 ap-text-darkblue'>2000 AP Poin</p>
                                </div>
                            </div>
                            <div>
                                <p className='ap-content-500 ap-font-16 ap-mb-16'>Pilih Metode Penukaran</p>
                                <div className="ap-flex ap-space ap-payment-method ap-mb-16" onClick={ () => setRadioValue("coin") }>
                                    <div className="ap-flex ap-align-center">
                                        <img src={ coin } alt="Coin Pintar" className='ap-em-icon ap-mr-10' />
                                        <p className='ap-content-400-v2 ap-font-14 ap-text-black'>AP Coin</p>
                                    </div>
                                    <div className='ap-flex ap-align-center'>
                                        <p className='ap-content-400-v2 ap-font-14 ap-text-darkgrey ap-mr-20'>1000 AP Coin</p>
                                        <div className={ radioValue==="coin" ? 'ap-radio ap-radio-selected' : 'ap-radio' }></div>
                                    </div>
                                </div>
                                <div className="ap-flex ap-space ap-payment-method" onClick={ () => setRadioValue("poin") }>
                                    <div className="ap-flex ap-align-center">
                                        <img src={ poin } alt="Poin Pintar" className='ap-em-icon ap-mr-15' />
                                        <p className='ap-content-400-v2 ap-font-14 ap-text-black'>AP Poin</p>
                                    </div>
                                    <div className='ap-flex ap-align-center'>
                                        <p className='ap-content-400-v2 ap-font-14 ap-text-darkgrey ap-mr-20'>1000 AP Poin</p>
                                        <div className={ radioValue==="poin" ? 'ap-radio ap-radio-selected' : 'ap-radio' }></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={ radioValue==="" ? 'ap-method-btn-disable ap-content-500-v2 ap-font-18' : 'ap-method-btn ap-content-500-v2 ap-font-18' } onClick={ closeModal }>
                            Tukar
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default ExchangeModal1
