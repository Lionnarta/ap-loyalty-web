import React from 'react'
import './PremiumContentSection.css'
import '../CoinPoinSection/CoinPoinSection.css'
import backArrow from '../../assets/images/backArrow2.png'
import voucher from '../../assets/images/voucher1.png'
import coin from '../../assets/images/coin.png'
import poin from '../../assets/images/poin.png'

interface PDProps {
    sideState: boolean,
    width: number,
}

const PremiumDetail:React.FC<PDProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v3 ap-text-darkgrey'>
                <div className='ap-flex ap-align-center ap-mb-20'>
                    <a href='/cp/pa' className='ap-flex'><img src={ backArrow } alt="Kembali" className='ap-mr-10 ap-pointer' /></a>
                    <p className='ap-font-24 ap-content-700'>Detail Rewards</p>
                </div>

                <div className='ap-pcs-d-container'>
                    <img src={ voucher } alt="Voucher Pintar" className='ap-pcs-img' />
                    <div className='ap-pcs-img-detail ap-text-darkgrey'>
                        <div>
                            <div className='ap-mb-22'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3'>Jenis Reward</p>
                                <p className='ap-content-500-v2 ap-font-20'>Voucher Pintar</p>
                            </div>
                            <div className='ap-mb-22'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3'>Mitra</p>
                                <p className='ap-content-500-v2 ap-font-20'>Gramedia Pustaka</p>
                            </div>
                            <div className='ap-mb-22'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3'>Masa Berlaku</p>
                                <p className='ap-content-500-v2 ap-font-20'>22 Desember 2021 - 30 Maret 2022</p>
                            </div>
                            <div className='ap-mb-22'>
                                <p className='ap-content-400-v2 ap-font-16 ap-text-silvergrey-v3 ap-mb-10'>Metode Penukaran</p>
                                <div className='ap-pcs-method'>
                                    <div className='ap-flex ap-mr-10'>
                                        <img src={ coin } alt="Coin Pintar" className='ap-pcs-icon ap-mr-10' />
                                        <p className='ap-content-600 ap-font-16 ap-text-orange'>1000 AP Coin</p>
                                    </div>
                                    <p className='ap-content-500-v2 ap-font-18 ap-mr-10'>atau</p>
                                    <div className='ap-flex'>
                                        <img src={ poin } alt="Pin Pintar" className='ap-pcs-icon-v2 ap-mr-10' />
                                        <p className='ap-content-600 ap-font-16 ap-text-darkblue'>1000 AP Poin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ap-pcs-btn'>
                            <p>Tukar</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='ap-content-600 ap-font-22 ap-text-darkblue ap-mb-20'>Gramedia Voucher Rp10.000</p>
                    <p className='ap-content-500 ap-font-18 ap-text-black ap-mb-10'>Deskripsi</p>
                    <p className='ap-content-400-v2 ap-font-16 ap-mb-30'>Kamu bisa mendapatkan potongan harga Rp10.000 untuk semua jenis pembelian di Gramedia dengan menukarkan 1.000 AP Poin atau AP Coin.</p>
                    <p className='ap-content-500 ap-font-18 ap-text-black ap-mb-10'>Syarat dan Ketentuan</p>
                    <ol className='ap-content-400-v2 ap-font-16 ap-text-black ap-ml-20 ap-mb-30 ap-pcs-ol'>
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
                    <p className='ap-content-500 ap-font-18 ap-text-black ap-mb-10'>Cara penggunaan</p>
                    <ol className='ap-content-400-v2 ap-font-16 ap-text-black ap-ml-20 ap-pcs-ol'>
                        <li>Pilih voucher yang kamu inginkan.</li>
                        <li>Baca Syarat dan Ketentuan terlebih dahulu.</li>
                        <li>Tukarkan voucher tersebut dengan AP Poin atau AP Coin sesuai dengan ketentuan.</li>
                        <li>Voucher yang sudah ditukar bisa Sobat Pintar lihat di menu “Voucher Saya”.</li>
                        <li>Voucher sudah siap digunakan deh.</li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default PremiumDetail
