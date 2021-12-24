import React from 'react'
import './CoinPoinSection.css'
import folder from '../../assets/images/folder.png'

interface CPPCProps {
    sideState: boolean,
    width: number,
}

const CoinPoinPremiumContent:React.FC<CPPCProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <section className='ap-cp-v3 ap-text-darkgrey'>
                <p className='ap-font-20 ap-content-700 ap-mb-20'>Konten Premium</p>
                <div className='ap-cp-nocontent'>
                    <img src={ folder } alt="Konten Premium" className='ap-mr-30 ap-cp-folder' />
                    <p className='ap-content-500 ap-font-20 ap-text-black ap-center'>Tidak Ada Konten Premium Tersedia</p>
                </div>
            </section>
        </div>
    )
}

export default CoinPoinPremiumContent
