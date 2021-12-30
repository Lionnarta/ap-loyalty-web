import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'

interface TermLylProps {
    showTermLyl: boolean,
    setShowTermLyl: React.Dispatch<React.SetStateAction<boolean>>,
}

const TermModalLYL:React.FC<TermLylProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showTermLyl ? 1 : 0,
        transform: props.showTermLyl ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showTermLyl ? (
                <div className='ap-modal-bg'>
                    <animated.div style={ animation }>
                        <div className='ap-modal-position'>
                            <div className='ap-modal-container-v1'>
                                <div className='ap-close-modal' onClick={ () => props.setShowTermLyl(false) }>
                                    <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                </div>
                                <p className='ap-font-22 ap-content-600 ap-center ap-mb-20'>Syarat dan Ketentuan</p>
                                <div className='ap-term-ol-container ap-content-400-v2'>
                                    <p className='ap-mb-10 ap-content-600 ap-term-pos ap-font-20'>AP Loyalty</p>
                                    <ol className='ap-term-ol'>
                                        <li>Program "AP Loyalty" berlaku untuk seluruh pengguna Aku Pintar.</li>
                                        <li>Terdapat empat tingkatan member AP Loyalty:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Siswa Baru</li>
                                            <li>Siswa Teladan</li>
                                            <li>Juara Kelas</li>
                                            <li>Juara Umum</li>
                                        </ol>
                                        <li>Untuk naik level, pengguna harus mengumpulkan XP sejumlah yang sudah ditentukan:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Siswa Baru: -</li>
                                            <li>Siswa Teladan: 600 XP</li>
                                            <li>Juara Kelas: 1500 XP</li>
                                            <li>Juara Umum: 4500 XP</li>
                                        </ol>
                                        <li>XP bisa didapatkan melalui beragam metode yang tersedia:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Melengkapi profil</li>
                                            <li>Daily Check-in</li>
                                            <li>Program "Ajak Teman"</li>
                                            <li>Tes Minat Pintar</li>
                                            <li>Belajar Pintar</li>
                                            <li>Menonton AP Live</li>
                                            <li>Dan lain-lain</li>
                                        </ol>
                                        <li>Semakin tinggi levelmu, semakin banyak keuntungan yang bisa kamu nikmati.</li>
                                        <li>
                                            Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang 
                                            dapat merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk 
                                            mendiskualifikasi atau tidak mengikutsertakan kamu lebih lanjut pada program "AP 
                                            Loyalty" dan program Aku Pintar lainnya tanpa perlu memberikan pemberitahuan 
                                            dan penjelasan lebih lanjut.
                                        </li>
                                        <li>
                                            Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan 
                                            Program "AP Loyalty". Disarankan untuk melihat dan membacanya secara berkala.
                                            Penggunaan fitur "AP Loyalty" berarti kamu sudah menyetujui dan memahami
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null }
        </div>
    )
}

export default TermModalLYL
