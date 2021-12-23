import React, { useState } from 'react'
import './CoinPoinSection.css'
import coinIcon from '../../assets/images/coin.png'
import poinIcon from '../../assets/images/poin.png'
import poinIcon2 from '../../assets/images/poin2.png'
import topupcoin from '../../assets/images/topup.png'

interface CoinPoinInfoProps {
    sideState: boolean,
    width: number
}

const CoinPoinInformation:React.FC<CoinPoinInfoProps> = (props) => {

    const [curState, setCurState] = useState('coin');

    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v2'>
                <div className='ap-cp-info'>
                    <div className='ap-cp-info-ls ap-flex-col'>
                        <div className='ap-cp-info-nav-c' onClick={ () => setCurState('coin') }>
                            <div className={ curState=='coin' ? 'ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-active' : 'ap-cp-info-nav ap-cp-info-nav-top' }></div>
                            <div className='ap-cp-info-content'>
                                <img src={ coinIcon } alt="Coin Aku Pintar" />
                                <p className='ap-coin-text ap-font-20 ap-content-600'>1500 AP Coin</p>
                            </div>
                            <div className='ap-coin-topup'>
                                <img src={ topupcoin } alt="Top Up Aku Pintar" className='ap-mr-5' /> 
                                <p className='ap-font-12 ap-content-500 ap-center ap-text-darkblue'>Top Up</p>
                            </div>
                        </div>
                        <div className='ap-cp-info-nav-c' onClick={ () => setCurState('poin') }>
                            <div className={ curState=='poin' ? 'ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-active' : 'ap-cp-info-nav ap-cp-info-nav-bottom' }></div>
                            <div className='ap-cp-info-content'>
                                <img src={ poinIcon } alt="Poin Aku Pintar" />
                                <div className='ap-ml-30'>
                                    <p className='ap-poin-text ap-font-20 ap-content-600'>2000 AP Poin</p>
                                    <p className='ap-poin-text-v2 ap-font-10 ap-content-400-v2'><img src={ poinIcon2 } alt="Poin Aku Pintar" /> Expired pada 31 Desember 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ap-cp-info-rs'>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoinPoinInformation
