import React from 'react'
import './LoyaltySection.css'
import backArrow from '../../assets/images/backArrow.png'
import st1 from '../../assets/images/st1.png'
import st2 from '../../assets/images/st2.png'
import st3 from '../../assets/images/st3.png'
import st4 from '../../assets/images/st4.png'
import map from '../../assets/images/map.png'
import poin from '../../assets/images/poin.png'
import benefit from '../../assets/images/benefit.png'
import benefit2 from '../../assets/images/benefit2.png'
import benefit3 from '../../assets/images/benefit3.png'
import benefit4 from '../../assets/images/benefit4.png'
import benefit5 from '../../assets/images/benefit5.png'

interface BenefitListProps {
    setShowBenefit: React.Dispatch<React.SetStateAction<boolean>>,
}

const BenefitList:React.FC<BenefitListProps> = (props) => {
    return (
        <div className='ap-lyl-benefit'>
            <div className="ap-flex ap-align-center ap-mb-16">
                <img src={ backArrow } alt="Kembali" className='ap-mr-20 ap-icon ap-self-center ap-pointer' onClick={ () => props.setShowBenefit(true) } />
                <p className='ap-content-700-v2 ap-font-20 ap-text-darkgrey'>Benefit</p>
            </div>
            <div className='ap-text-black ap-lyl-list'>
                <div className='ap-mb-20'>
                    <div className="ap-flex ap-align-center ap-mb-16">
                        <img src={ st1 } alt="Siswa Baru" className='ap-mr-15' />
                        <div>
                            <p className='ap-content-600 ap-font-14'>Siswa Baru</p>
                            <p className='ap-content-500-v2 ap-font-12'>0 XP</p>
                        </div>
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Jelajah Fitur Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Kamu bisa jelajahi Aku Pintar dan nikmati banyak fitur gratisnya</p>
                        </div>
                        <img src={ map } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                </div>
                <div className='ap-mb-20'>
                    <div className="ap-flex ap-align-center ap-mb-16">
                        <img src={ st2 } alt="Bintang Kelas" className='ap-mr-15' />
                        <div>
                            <p className='ap-content-600 ap-font-14'>Bintang Kelas</p>
                            <p className='ap-content-500-v2 ap-font-12'>600 XP</p>
                        </div>
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>AP Poin</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan <span className='ap-content-700-v2'>1000</span> AP Poin</p>
                        </div>
                        <img src={ poin } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Konten Premium</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Nikmati juga konten premium pilihan untukmu</p>
                        </div>
                        <img src={ benefit } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Webinar Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Akses <span className='ap-content-700-v2'>satu</span> kali webinar secara gratis</p>
                        </div>
                        <img src={ benefit2 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Diskon Konseling Pintar</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan diskon <span className='ap-content-700-v2'>10%</span> untuk fitur Konseling Pintar</p>
                        </div>
                        <img src={ benefit3 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                </div>
                <div className='ap-mb-20'>
                    <div className="ap-flex ap-align-center ap-mb-16">
                        <img src={ st3 } alt="Siswa Berprestasi" className='ap-mr-15' />
                        <div>
                            <p className='ap-content-600 ap-font-14'>Siswa Berprestasi</p>
                            <p className='ap-content-500-v2 ap-font-12'>1500 XP</p>
                        </div>
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>AP Poin</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan <span className='ap-content-700-v2'>2500</span> AP Poin</p>
                        </div>
                        <img src={ poin } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Konten Premium</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Nikmati juga konten premium pilihan untukmu</p>
                        </div>
                        <img src={ benefit } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Webinar Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Akses <span className='ap-content-700-v2'>dua</span> kali webinar secara gratis</p>
                        </div>
                        <img src={ benefit2 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Diskon Konseling Pintar</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan potongan <span className='ap-content-700-v2'>20%</span> untuk satu kali transaksi Konseling Pintar</p>
                        </div>
                        <img src={ benefit3 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Voucher Kursus Pintar</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Nikmati Kursus Pintar dengan voucher diskon senilai <span className='ap-content-700-v2'>Rp10.000</span></p>
                        </div>
                        <img src={ benefit4 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Tryout Premium Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Akses <span className='ap-content-700-v2'>dua</span> kali Tryout secara gratis</p>
                        </div>
                        <img src={ benefit5 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                </div>
                <div className='ap-mb-20'>
                    <div className="ap-flex ap-align-center ap-mb-16">
                        <img src={ st4 } alt="Juara Umum" className='ap-mr-15' />
                        <div>
                            <p className='ap-content-600 ap-font-14'>Juara Umum</p>
                            <p className='ap-content-500-v2 ap-font-12'>4500 XP</p>
                        </div>
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>AP Poin</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan <span className='ap-content-700-v2'>4000</span> AP Poin</p>
                        </div>
                        <img src={ poin } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Konten Premium</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Nikmati juga konten premium pilihan untukmu</p>
                        </div>
                        <img src={ benefit } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Webinar Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Akses <span className='ap-content-700-v2'>tiga</span> kali webinar secara gratis</p>
                        </div>
                        <img src={ benefit2 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Diskon Konseling Pintar</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Dapatkan potongan <span className='ap-content-700-v2'>35%</span> untuk satu kali transaksi Konseling Pintar</p>
                        </div>
                        <img src={ benefit3 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Voucher Kursus Pintar</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Nikmati Kursus Pintar dengan voucher diskon senilai <span className='ap-content-700-v2'>Rp15.000</span></p>
                        </div>
                        <img src={ benefit4 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                    <div className='ap-lyl-benefit-c ap-mb-16'>
                        <div>
                            <p className='ap-text-darkblue ap-content-600 ap-font-14 ap-mb-5'>Akses Tryout Premium Gratis</p>
                            <p className='ap-text-darkgrey ap-content-400-v2 ap-font-12'>Akses <span className='ap-content-700-v2'>tiga</span> kali Tryout secara gratis</p>
                        </div>
                        <img src={ benefit5 } alt="Eksplorasi Loyalty" className='ap-icon-v2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitList
