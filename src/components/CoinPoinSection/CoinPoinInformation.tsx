import React, { useState } from 'react'
import './CoinPoinSection.css'
import CoinHistory from './CoinHistory'
import PoinHistory from './PoinHistory'
import TermModalCP from '../Modal/TermModalCP'
import coinIcon from '../../assets/images/coin.png'
import poinIcon from '../../assets/images/poin.png'
import poinIcon2 from '../../assets/images/poin2.png'
import topupcoin from '../../assets/images/topup.png'

interface CoinPoinInfoProps {
    sideState: boolean,
    width: number,
    setShowDownload: React.Dispatch<React.SetStateAction<boolean>>,
}

const CoinPoinInformation:React.FC<CoinPoinInfoProps> = (props) => {

    const [curState, setCurState] = useState('coin');
    const [showTermCP, setShowTermCP] = useState(false);

    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v2'>
                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info ap-cp-info-noside' : 'ap-cp-info'}>
                    <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-ls ap-cp-info-ls-noside' : 'ap-cp-info-ls'}>
                        <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-nav-c ap-cp-info-nav-c-noside' : 'ap-cp-info-nav-c'} onClick={ () => setCurState('coin') }>
                            <div className={ 
                                curState=='coin' ? 
                                    (props.width <= 1200 && props.width > 768) && props.sideState ? 
                                        'ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-active ap-cp-info-nav-noside ap-cp-info-nav-top-noside' : 
                                        'ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-active' : 
                                    (props.width <= 1200 && props.width > 768) && props.sideState ? 
                                        'ap-cp-info-nav ap-cp-info-nav-top ap-cp-info-nav-noside ap-cp-info-nav-top-noside' : 
                                        'ap-cp-info-nav ap-cp-info-nav-top' }>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-content ap-cp-info-content-noside' : 'ap-cp-info-content'}>
                                <img src={ coinIcon } alt="Coin Aku Pintar" />
                                <p className='ap-coin-text ap-font-20 ap-content-600'>1500 AP Coin</p>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-coin-topup ap-coin-topup-wside' : 'ap-coin-topup'} onClick={ () => props.setShowDownload(true) }>
                                <img src={ topupcoin } alt="Top Up Aku Pintar" className='ap-mr-5' /> 
                                <p className='ap-font-12 ap-content-500 ap-center ap-text-darkblue'>Top Up</p>
                            </div>
                        </div>
                        <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-nav-c ap-cp-info-nav-c-noside' : 'ap-cp-info-nav-c'} onClick={ () => setCurState('poin') }>
                            <div className={ 
                                curState=='poin' ? 
                                    (props.width <= 1200 && props.width > 768) && props.sideState ? 
                                        'ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-active ap-cp-info-nav-noside ap-cp-info-nav-bottom-noside' :
                                        'ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-active' :
                                    (props.width <= 1200 && props.width > 768) && props.sideState ?
                                        'ap-cp-info-nav ap-cp-info-nav-bottom ap-cp-info-nav-noside ap-cp-info-nav-botton-noside' :
                                        'ap-cp-info-nav ap-cp-info-nav-bottom' }>
                            </div>
                            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-content ap-cp-info-content-noside' : 'ap-cp-info-content'}>
                                <img src={ poinIcon } alt="Poin Aku Pintar" />
                                <div className='ap-ml-30'>
                                    <p className='ap-poin-text ap-font-20 ap-content-600'>2000 AP Poin</p>
                                    <p className='ap-poin-text-v2 ap-font-10 ap-content-400-v2'><img src={ poinIcon2 } alt="Poin Aku Pintar" /> Expired pada 31 Desember 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-info-rs ap-cp-info-rs-noside' : 'ap-cp-info-rs'}>
                        {
                            curState=="coin" ? <CoinHistory /> : <PoinHistory />
                        }
                        <div className='ap-flex ap-justify-center'>
                            <p className='ap-text-silvergrey-v2 ap-cp-info-term-text' onClick={ () => setShowTermCP(true) }>Syarat dan Ketentuan</p>
                        </div>
                    </div>
                </div>
            </section>
            <TermModalCP showTermCP={ showTermCP } setShowTermCP={ setShowTermCP } />
        </div>
    )
}

export default CoinPoinInformation
