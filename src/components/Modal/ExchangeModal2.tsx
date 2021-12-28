import React from 'react'
import './Modal.css'

interface EM2Props {
    showEM2: boolean,
    setShowEM2: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEM3: React.Dispatch<React.SetStateAction<boolean>>,
    setShowEM: React.Dispatch<React.SetStateAction<boolean>>,
}

const ExchangeModal2:React.FC<EM2Props> = (props) => {

    const closeModal = () => {
        props.setShowEM2(false);
        props.setShowEM(false);
    }

    const openEM3 = () => {
        props.setShowEM2(false);
        props.setShowEM3(true);
    }

    return (
        <div>
            { props.showEM2 ? (
                <div className='ap-modal-position'>
                    <div className='ap-modal-container-v6 ap-text-black ap-center'>
                        <p className='ap-content-600 ap-font-19 ap-mb-40'>Konfirmasi Penukaran</p>
                        <p className='ap-contnet-400-v2 ap-font-17 ap-mb-16'>Kamu akan menukarkan <span className='ap-content-500-v2'>1000 AP Coin</span> untuk <span className='ap-content-500-v2'>Gramedia Rp10.000 Voucher</span></p>
                        <p className='ap-content-700-v2 ap-font-17 ap-mb-30'>Apakah kamu yakin?</p>
                        <div className="ap-flex ap-justify-center">
                            <p className='ap-em2-btn' onClick={ closeModal }>Tidak</p>
                            <p className='ap-em2-btn ap-yes-btn' onClick={ openEM3 }>Yakin</p>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )
}

export default ExchangeModal2
