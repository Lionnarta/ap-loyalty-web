import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'

interface TermProps {
    showTerm: boolean,
    setShowTerm: React.Dispatch<React.SetStateAction<boolean>>,
}

const TermModal:React.FC<TermProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showTerm ? 1 : 0,
        transform: props.showTerm ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showTerm ? (
                    <div className='ap-modal-bg'>
                        <animated.div style={ animation }>
                            <div className='ap-modal-position'>
                                <div className='ap-modal-container-v1'>
                                    <div className='ap-close-modal' onClick={ () => props.setShowTerm(false) }>
                                        <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                    </div>
                                    <p className='ap-font-22 ap-content-600 ap-center ap-mb-20'>Syarat dan Ketentuan</p>
                                    <div className='ap-term-ol-container ap-content-400-v2'>
                                        <ol className='ap-term-ol'>
                                            <li>Program "Ajak Teman" berlaku untuk seluruh pengguna Aku Pintar.</li>
                                            <li>Kode referralmu hanya bisa digunakan maksimal oleh 10 teman.</li>
                                            <li>
                                                Setiap satu teman yang menggunakan kode referralmu kamu akan mendapatkan 2 XP
                                                dan 100 poin. Berlaku kelipatan 2 untuk jumlah XP dan kelipatan 100 untuk jumlah
                                                poin.
                                            </li>
                                            <li>
                                                Kamu akan mendapatkan maksimal 184 XP dan 5500 poin, dengan ketentuan:
                                            </li>
                                            <ol className='ap-term-sub-ol' type='a'>
                                                <li>
                                                    XP berlaku selamanya yang bisa digunakan untuk fitur AP Loyalty guna
                                                    mendapatkan benefit yang lebih besar;
                                                </li>
                                                    <li>
                                                    Poin bisa ditukarkan dalam bentuk Coin atau benefit lainnya, dan akan hangus
                                                    dalam waktu enam bulan dihitung dari tanggal pertama klaim.
                                                </li>
                                            </ol>
                                            <li>
                                                Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat
                                                merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk
                                                mendiskualifikasi atau tidak mengikutsertakan kamu lebih lanjut pada progrom "Ajak
                                                Teman" dan program Aku Pintar lainnya tanpa perlu memberikan pemberitahuan dan
                                                penjelasan lebih lanjut.
                                            </li>
                                            <li>
                                                Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan
                                                Program "Ajak Teman". Disarankan untuk melihat dan membacanya secara berkala.
                                                Penggunaan fitur "Ajak Teman" berarti kamu sudah menyetujui dan memahami
                                                syarat dan ketentuan yang berlaku.
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

export default TermModal
