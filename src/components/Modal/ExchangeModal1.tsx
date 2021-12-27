import React, { createRef, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import coin from '../../assets/images/coin.png'
import poin from '../../assets/images/poin.png'

interface EM1Props {
    showEM1: boolean,
    setShowEM1: React.Dispatch<React.SetStateAction<boolean>>,
}

const ExchangeModal1:React.FC<EM1Props> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showEM1 ? 1 : 0,
        transform: props.showEM1 ? `translateY(0%)` : `translateY(-100%)`
    });

    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const checkClickOutside = (e:MouseEvent) => {
            if (props.showEM1 && ref.current && (e.target as Node).contains(ref.current)) {
                props.setShowEM1(false);
            }
        }

        document.addEventListener("mousedown", checkClickOutside)

        return () => {
            document.removeEventListener("mousedown", checkClickOutside)
        }
    }, [props.showEM1])

    const [radioValue, setRadioValue] = useState("");

    return (
        <div>
            { props.showEM1 ? (
                <div className='ap-modal-bg'>
                    <animated.div style={ animation }>
                        <div className='ap-modal-position' ref={ ref }>
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

                                <div className={ radioValue==="" ? 'ap-method-btn-disable ap-content-500-v2 ap-font-18' : 'ap-method-btn ap-content-500-v2 ap-font-18' }>
                                    Tukar
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null }
        </div>
    )
}

export default ExchangeModal1
