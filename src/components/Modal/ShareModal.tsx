import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'
import share from '../../assets/images/copy-2.png'
import whatsapp from '../../assets/images/whatsapp.png'
import line from '../../assets/images/line.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import ln from '../../assets/images/ln.png'
import telegram from '../../assets/images/telegram.png'
import discord from '../../assets/images/discord.png'
import twitter from '../../assets/images/twitter.png'

interface ShareProps {
    showShare: boolean,
    setShowShare: React.Dispatch<React.SetStateAction<boolean>>,
}

const ShareModal:React.FC<ShareProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showShare ? 1 : 0,
        transform: props.showShare ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showShare ? (
                    <div className='ap-modal-bg'>
                        <animated.div style={ animation }>
                            <div className='ap-modal-position'>
                                <div className='ap-modal-container-v2'>
                                    <div className='ap-close-modal' onClick={ () => props.setShowShare(false) }>
                                        <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                    </div>
                                    <p className='ap-font-22 ap-content-600 ap-center ap-mb-40'>Ajak teman Melalui</p>
                                    <div className='ap-font-18 ap-content-400-v2'>
                                        <div className='ap-flex ap-mb-30'>
                                            <div className='ap-modal-icon ap-flex-col ap-align-center'>
                                                <div className='ap-modal-copy'>
                                                    <img src={ share } alt="Salin Info" />
                                                </div>
                                                <p className='ap-content-500-v2'>Salin Info</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ whatsapp } alt="Whatsapp" />
                                                <p>Whatsapp</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ line } alt="Line" />
                                                <p>Line</p>
                                            </div>
                                        </div>
                                        <div className='ap-flex ap-mb-30'>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ facebook } alt="Facebook" />
                                                <p>Facebook</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ instagram } alt="Instagram" />
                                                <p>Instagram</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ ln } alt="Linkedin" />
                                                <p>Linkedin</p>
                                            </div>
                                        </div>
                                        <div className='ap-flex'>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ telegram } alt="Telegram" />
                                                <p>Telegram</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ discord } alt="Discord" />
                                                <p>Discord</p>
                                            </div>
                                            <div className='ap-modal-icon ap-center'>
                                                <img src={ twitter } alt="Twitter" />
                                                <p>Twitter</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                ) : null }
        </div>
    )
}

export default ShareModal
