import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'

interface TermCPProps {
    showTermCP: boolean,
    setShowTermCP: React.Dispatch<React.SetStateAction<boolean>>,
}

const TermModalCP:React.FC<TermCPProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showTermCP ? 1 : 0,
        transform: props.showTermCP ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showTermCP ? (
                <div className='ap-modal-bg'>
                    <animated.div style={ animation }>
                        <div className='ap-modal-position'>
                            <div className='ap-modal-container-v1'>
                                <div className='ap-close-modal' onClick={ () => props.setShowTermCP(false) }>
                                    <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                </div>
                                <p className='ap-font-22 ap-content-600 ap-center ap-mb-20'>Syarat dan Ketentuan</p>
                                <div className='ap-term-ol-container'>
                                    <p className='ap-mb-10 ap-content-600 ap-term-pos'>AP Poin</p>
                                    <ol className='ap-term-ol'>
                                        <li>Program "AP Poin" berlaku untuk seluruh pengguna Aku Pintar.</li>
                                        <li>AP Poin dapat hangus dalam waktu enam bulan sejak pertama diklaim.</li>
                                        <li>AP Poin dapat ditukarkan dalam bentuk:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Konten Premium</li>
                                            <li>Voucher Merchant</li>
                                        </ol>
                                        <li>AP Poin bisa didapat melalui:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Weekly Check-in</li>
                                            <li>Ajak Teman</li>
                                            <li>Challenge</li>
                                        </ol>
                                        <li>
                                            Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat 
                                            merugikan Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk mendiskualifikasi 
                                            atau tidak mengikutsertakan kamu lebih lanjut pada program "AP Poin" dan program Aku Pintar 
                                            lainnya tanpa perlu memberikan pemberitahuan dan penjelasan lebih lanjut.
                                        </li>
                                        <li>
                                            Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan Program "AP Poin". 
                                            Disarankan untuk melihat dan membacanya secara berkala. Penggunaan fitur "AP Poin" 
                                            berarti kamu sudah menyetujui dan memahami syarat dan ketentuan yang berlaku.
                                        </li>
                                    </ol>
                                    <p className='ap-mb-10 ap-mt-20 ap-content-600 ap-term-pos'>AP Coin</p>
                                    <ol className='ap-term-ol'>
                                        <li>Program "AP Coin" berlaku untuk seluruh pengguna Aku Pintar.</li>
                                        <li>AP Coin berlaku selamanya, tanpa ada masa kadaluarsa.</li>
                                        <li>AP Coin dapat ditukarkan dalam bentuk:</li>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Premium access</li>
                                            <li>Konten premium</li>
                                            <li>Voucher merchant</li>
                                        </ol>
                                        <ol className='ap-term-sub-ol' type='a'>
                                            <li>Top-up</li>
                                        </ol>
                                        <li>
                                            Apabila kami menemukan segala bentuk kecurangan dan penyalahgunaan yang dapat merugikan 
                                            Aku Pintar dan pihak-pihak lainnya. Tim Aku Pintar berhak untuk mendiskualifikasi 
                                            atau tidak mengikutsertakan kamu lebih lanjut pada program “AP Coin” dan program Aku Pintar 
                                            lainnya tanpa perlu memberikan pemberitahuan dan penjelasan lebih lanjut.
                                        </li>
                                        <li>
                                            Tim Aku Pintar dapat sewaktu-waktu melakukan perubahan Syarat & Ketentuan Program "AP Coin". 
                                            Disarankan untuk melihat dan membacanya secara berkala. Penggunaan fitur "AP Coin" 
                                            berarti kamu sudah menyetujui dan memahami syarat dan ketentuan yang berlaku.
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

export default TermModalCP
