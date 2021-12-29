import React from 'react'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'
import transaksi from '../../assets/images/transaksi.png'

interface EM3Props {
    showEM3: boolean,
    setShowEM3: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEM: React.Dispatch<React.SetStateAction<boolean>>,
}

const ExchangeModal3:React.FC<EM3Props> = (props) => {

    const closeModal = () => {
        props.setShowEM3(false);
        props.setShowEM(false);
    }

    return (
        <div>
            { props.showEM3 ? (
                <div className='ap-modal-position'>
                    <div className='ap-modal-container-v6 ap-modal-padding ap-text-black ap-center'>
                        <div className='ap-close-modal' onClick={ closeModal }>
                            <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                        </div>
                        <img src={ transaksi } alt="Transaksi Berhasil" className='ap-mb-20' />
                        <p className='ap-content-600 ap-font-19 ap-mb-20'>Transaksi Berhasil</p>
                        <p className='ap-content-400-v2 ap-font-17 ap-mb-16'>Kumpulkan poin lebih banyak lagi dan tukar dengan coin untuk keuntungan lebih besar</p>
                        <p className='ap-content-400-v2 ap-font-17 ap-mb-40'>Cek 'Rewards Saya' untuk melihat semua rewards kamu</p>
                        <a href="/ap-loyalty-web/cp/reward" className='ap-reward-check-btn' onClick={ closeModal }>Cek Rewards Kamu</a>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default ExchangeModal3
