import React, { useState } from 'react'
import './RewardSection.css'
import '../CoinPoinSection/CoinPoinSection.css'
import RewardModal from '../Modal/RewardModal'
import DownloadModal from '../Modal/DownloadModal'
import voucher1 from '../../assets/images/voucher1.png'
import time from '../../assets/images/time.png'

interface VoucherNavProps {
    sideState: boolean,
    width: number,
}

const VoucherNav:React.FC<VoucherNavProps> = (props) => {

    const [showReward, setShowReward] = useState(false);
    const [showDownload, setShowDownload] = useState(false);
    
    return (
        <div className='ap-w-full'>
            <p className='ap-content-600 ap-font-18 ap-mb-30'>Belum Digunakan</p>

            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside ap-wrap ap-mb-20' : 'ap-cp-card-container ap-wrap ap-mb-20' }>
                <div onClick={ () => setShowReward(true) } className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                    <img src={ voucher1 } alt="Voucher" />
                    <div className='ap-cp-card-content'>
                        <div className='ap-cp-my-auto'>
                            <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                            <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp10.000 Voucher</p>
                        </div>
                        <div className='ap-flex ap-align-center'>
                            <img src={ time } alt="Time" className='ap-vn-icon' />
                            <p className='ap-content-400-v2 ap-font-14 ap-text-darkgrey'>Berlaku hingga 23 Februari 2022</p>
                        </div>
                    </div>
                </div>
                <div onClick={ () => setShowReward(true) } className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40' : 'ap-cp-card ap-mb-40' }>
                    <img src={ voucher1 } alt="Voucher" />
                    <div className='ap-cp-card-content'>
                        <div className='ap-cp-my-auto'>
                            <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                            <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp10.000 Voucher</p>
                        </div>
                        <div className='ap-flex ap-align-center'>
                            <img src={ time } alt="Time" className='ap-vn-icon' />
                            <p className='ap-content-400-v2 ap-font-14 ap-text-darkgrey'>Berlaku hingga 23 Februari 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='ap-content-600 ap-font-18 ap-mb-30'>Sudah Digunakan</p>

            <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card-container ap-cp-card-container-wside ap-wrap ap-mb-20' : 'ap-cp-card-container ap-wrap ap-mb-20' }>
                <div className={ (props.width <= 1200 && props.width > 768) && props.sideState ? 'ap-cp-card ap-cp-card-wside ap-mb-40 ap-vn-used' : 'ap-cp-card ap-mb-40 ap-vn-used' }>
                    <img src={ voucher1 } alt="Voucher" />
                    <div className='ap-cp-card-content'>
                        <div className='ap-cp-my-auto'>
                            <p className='ap-content-400-v2 ap-font-16 ap-text-darkgrey'>Gramedia</p>
                            <p className={ (props.width <= 950 && props.width > 768) && !props.sideState ? 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1-noside' : 'ap-content-600 ap-font-25 ap-text-black ap-cp-responsive-font-v1' }>Gramedia Rp10.000 Voucher</p>
                        </div>
                        <div className='ap-flex ap-align-center'>
                            <img src={ time } alt="Time" className='ap-vn-icon' />
                            <p className='ap-content-400-v2 ap-font-14 ap-text-darkgrey'>Berlaku hingga 23 Februari 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <RewardModal showReward={ showReward } setShowReward={ setShowReward } setShowDownload={ setShowDownload } />
            <DownloadModal showDownload={ showDownload } setShowDownload={ setShowDownload } />
        </div>
    )
}


export default VoucherNav
