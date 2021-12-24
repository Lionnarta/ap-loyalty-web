import React, { useState } from 'react'
import './CoinPoin.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import CoinPoinHeader from '../../components/CoinPoinSection/CoinPoinHeader'
import CoinPoinInformation from '../../components/CoinPoinSection/CoinPoinInformation'
import CoinPoinPremiumAccess from '../../components/CoinPoinSection/CoinPoinPremiumAccess'
import CoinPoinPremiumContent from '../../components/CoinPoinSection/CoinPoinPremiumContent'
import CoinPoinVoucher from '../../components/CoinPoinSection/CoinPoinVoucher'
import DownloadModal from '../../components/Modal/DownloadModal'

interface CoinPoinProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const CoinPoin:React.FC<CoinPoinProps> = (props) => {

    const [showDownload, setShowDownload] = useState(false);

    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <div className='ap-w-full'>
                    <CoinPoinHeader sideState={ props.sideState } width = { props.width } setShowDownload={ setShowDownload } />
                    <CoinPoinInformation sideState={ props.sideState } width = { props.width } setShowDownload={ setShowDownload } />
                    <CoinPoinPremiumAccess sideState={ props.sideState } width = { props.width } />
                    <CoinPoinPremiumContent sideState={ props.sideState } width = { props.width } />
                    <CoinPoinVoucher sideState={ props.sideState } width = { props.width } />
                </div>
            </div>
            <DownloadModal showDownload={ showDownload } setShowDownload={ setShowDownload } />
            <Footer />
        </div>
    )
}

export default CoinPoin
