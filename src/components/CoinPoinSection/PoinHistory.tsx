import React from 'react'
import './CoinPoinSection.css'
import gift from '../../assets/images/gift.png'
import poinIcon from '../../assets/images/poin.png'
import poinIcon2 from '../../assets/images/poin3.png'

const PoinHistory = () => {
    return (
        <div className='ap-text-darkgrey ap-mb-20'>
            <p className='ap-content-700-v2 ap-font-20 ap-mb-20'>Histori Transaksi AP Poin</p>
            <div className='ap-cp-history'>
                <div className='ap-mb-20'>
                    <p className='ap-content-500 ap-font-14 ap-mb-10 ap-text-black'>Senin, 13 Desember 2021</p>
                    <div className='ap-cp-h-item'>
                        <div className='ap-flex'>
                            <img src={ gift } alt="History AP Poin" className='ap-mr-30 ap-self-center' />
                            <div>
                                <p className='ap-text-black ap-content-600 ap-font-12'>Hadiah Login Harian</p>
                                <p className='ap-content-400-v2 ap-font-13'>09.12 WIB</p>
                            </div>
                        </div>
                        <div className='ap-right'>
                            <p className='ap-cp-income'>+ 10</p>
                            <div className='ap-flex ap-align-center'>
                                <img src={ poinIcon } alt="AP Poin" className='ap-cp-item-poin ap-mr-5' />
                                <p className='ap-text-black ap-font-12'>AP Poin</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='ap-cp-h-item'>
                        <div className='ap-flex'>
                            <img src={ gift } alt="History AP Poin" className='ap-mr-30 ap-self-center' />
                            <div>
                                <p className='ap-text-black ap-content-600 ap-font-12'>Hadiah Belajar Pintar</p>
                                <p className='ap-content-400-v2 ap-font-13'>09.30 WIB</p>
                            </div>
                        </div>
                        <div className='ap-right'>
                            <p className='ap-cp-income'>+ 25</p>
                            <div className='ap-flex ap-align-center'>
                                <img src={ poinIcon } alt="AP Poin" className='ap-cp-item-poin ap-mr-5' />
                                <p className='ap-text-black ap-font-12'>AP Poin</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className='ap-cp-h-item'>
                        <div className='ap-flex'>
                            <img src={ gift } alt="History AP Poin" className='ap-mr-30 ap-self-center' />
                            <div>
                                <p className='ap-text-black ap-content-600 ap-font-12'>Tukar Voucher Gramedia Rp10.000</p>
                                <p className='ap-content-400-v2 ap-font-13'>10.20 WIB</p>
                            </div>
                        </div>
                        <div className='ap-right'>
                            <p className='ap-cp-outcome'>- 1000</p>
                            <div className='ap-flex ap-align-center'>
                                <img src={ poinIcon } alt="AP Poin" className='ap-cp-item-poin ap-mr-5' />
                                <p className='ap-text-black ap-font-12'>AP Poin</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ap-mb-20'>
                    <p className='ap-content-500 ap-font-14 ap-mb-10 ap-text-black'>Jumat, 10 Desember 2021</p>
                    <div className='ap-cp-h-item'>
                        <div className='ap-flex'>
                            <img src={ poinIcon2 } alt="History AP Poin" className='ap-mr-30 ap-self-center' />
                            <div>
                                <p className='ap-text-black ap-content-600 ap-font-12'>AP Poin Expired</p>
                                <p className='ap-content-400-v2 ap-font-13'>00.01 WIB</p>
                            </div>
                        </div>
                        <div className='ap-right'>
                            <p className='ap-cp-outcome'>- 250</p>
                            <div className='ap-flex ap-align-center'>
                                <img src={ poinIcon } alt="AP Poin" className='ap-cp-item-poin ap-mr-5' />
                                <p className='ap-text-black ap-font-12'>AP Poin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoinHistory
