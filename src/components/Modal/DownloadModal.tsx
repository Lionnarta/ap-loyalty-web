import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import timesIcon from '../../assets/images/times.png'
import astrid from '../../assets/images/astrid.png'
import googlePlay from '../../assets/images/googleplay.png'
import appStore from '../../assets/images/appstore.png'
import downloadimg from '../../assets/images/downloadimg.png'

interface DownloadProps {
    showDownload: boolean,
    setShowDownload: React.Dispatch<React.SetStateAction<boolean>>,
}

const DownloadModal:React.FC<DownloadProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showDownload ? 1 : 0,
        transform: props.showDownload ? `translateY(0%)` : `translateY(-100%)`
    });

    return (
        <div>
            { props.showDownload ? (
                <div className="ap-modal-bg">
                    <animated.div style = { animation }>
                        <div className='ap-modal-position'>
                            <div className="ap-modal-container-v4">
                                <div className='ap-close-modal' onClick={ () => props.setShowDownload(false) }>
                                    <img src={ timesIcon } alt="Close Modal" className='ap-icon-v5' />
                                </div>
                                <div className='ap-flex ap-space ap-align-center'>
                                    <img src={ astrid } alt="Astrid" className='ap-download-astrid' />
                                    <div>
                                        <p className='ap-carousel-header ap-font-25 ap-content-700 ap-right ap-text-darkgrey ap-mb-10'>Belajar Pintar Dibikin Seru dalam Genggamanmu!</p>
                                        <p className='ap-carousel-header ap-content-400-v2 ap-font-16 ap-right ap-text-darkgrey ap-mb-20'>Dapatkan aplikasi Aku Pintar dengan klik di bawah ini:</p>
                                        <div className='ap-download-app'>
                                            <a href="" className='ap-mr-20'><img src={ googlePlay } alt="Aplikasi AkuPintar" /></a>
                                            <a href=""><img src={ appStore } alt="Aplikasi AkuPintar" /></a>
                                        </div>
                                    </div>
                                </div>
                                <img src={ downloadimg } alt="Aku Pintar" className='ap-download-img' />
                            </div>
                        </div>
                    </animated.div>
                </div>
            ) : null }
        </div>
    )
}

export default DownloadModal
