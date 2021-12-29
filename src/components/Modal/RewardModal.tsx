import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'
import voucher from '../../assets/images/voucher1.png'
import time from '../../assets/images/time.png'

interface RewardProps {
    showReward: boolean,
    setShowReward: React.Dispatch<React.SetStateAction<boolean>>,
    setShowDownload: React.Dispatch<React.SetStateAction<boolean>>,
}

const RewardModal:React.FC<RewardProps> = (props) => {
    
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showReward ? 1 : 0,
        transform: props.showReward ? `translateY(0%)` : `translateY(-100%)`
    });

    const openModal = () => {
        props.setShowReward(false);
        props.setShowDownload(true);
    }

    return (
        <div>
            { props.showReward ? (
                    <div className='ap-modal-bg'>
                        <animated.div style={ animation }>
                            <div className='ap-modal-position'>
                                <div className='ap-modal-container-v7'>
                                    <div className='ap-close-modal' onClick={ () => props.setShowReward(false) }>
                                        <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                    </div>
                                    <div className='ap-rd-header'>
                                        <img src={ voucher } alt="Voucher" className='ap-rd-img' />
                                        <div className='ap-rd-header-text'>
                                            <div className='ap-mb-60'>
                                                <p className='ap-text-darkgrey ap-content-400-v2 ap-font-14'>Gramedia Pustaka</p>
                                                <p className='ap-text-darkblue ap-content-600 ap-font-22'>Gramedia Voucher Rp10.000</p>
                                            </div>
                                            <div className="ap-flex ap-align-center">
                                                <img src={ time } alt="Expire at" className='ap-mr-10' />
                                                <p className='ap-text-darkgrey ap-content-400-v2 ap-font-16'>Berlaku hingga 30 Maret 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ap-text-black ap-rm-box ap-mb-20'>
                                        <p className='ap-content-600 ap-font-16 ap-mb-10'>Deskripsi</p>
                                        <p className='ap-content-400-v2 ap-font-14 ap-lh-v1 ap-mb-20'>Kamu bisa mendapatkan potongan harga Rp10.000 untuk semua jenis pembelian di Gramedia dengan menukarkan 1.000 AP Poin atau AP Coin.</p>
                                        <p className='ap-content-600 ap-font-16 ap-mb-10'>Syarat dan Ketentuan</p>
                                        <ol className='ap-rm-box-list ap-mb-20'>
                                            <li>Redeem voucher hanya bisa dilakukan di aplikasi Aku Pintar.</li>
                                            <li>Voucher hanya bisa dilakukan dalam satu kali transaksi.</li>
                                            <li>Voucher bisa digunakan baik transaksi langsung atau online.</li>
                                            <li>Voucher berlaku hingga 30 hari dari masa pertama klaim.</li>
                                            <li>Voucher tidak dapat digabungkan dengan voucher lainnya.</li>
                                            <li>Voucher tidak dapat diuangkan.</li>
                                            <li>Voucher bisa dibatalkan sewaktu-waktu bila ditemukan kecurangan atau penyalahgunaan yang dapat merugikan Aku Pintar, mitra, dan pihak-pihak lainnya.</li>
                                            <li>Syarat dan Ketentuan dapat berubah sewaktu-waktu, kamu bisa cek secara berkala.</li>
                                            <li>Ketersediaan voucher terbatas.</li>
                                        </ol>
                                        <p className='ap-content-600 ap-font-16 ap-mb-10'>Cara Penggunaan</p>
                                        <ol className='ap-rm-box-list ap-mb-20'>
                                            <li>Pilih voucher yang kamu inginkan.</li>
                                            <li>Baca Syarat dan Ketentuan terlebih dahulu.</li>
                                            <li>Tukarkan voucher tersebut dengan AP Poin atau AP Coin sesuai dengan ketentuan.</li>
                                            <li>Voucher yang sudah ditukar bisa Sobat Pintar lihat di menu “Voucher Saya”.</li>
                                            <li>Voucher sudah siap digunakan deh.</li>
                                        </ol>
                                    </div>
                                    <p className='ap-rm-btn' onClick={ openModal }>Gunakan Melalui Aplikasi Aku Pintar</p>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                ) : null }
        </div>
    )
}

export default RewardModal
