import React from 'react'
import './CoinPoin.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import CoinPoinHeader from '../../components/CoinPoinSection/CoinPoinHeader'
import CoinPoinInformation from '../../components/CoinPoinSection/CoinPoinInformation'

interface CoinPoinProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const CoinPoin:React.FC<CoinPoinProps> = (props) => {
    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <div className='ap-w-full'>
                    <CoinPoinHeader sideState={ props.sideState } width = { props.width } />
                    <CoinPoinInformation sideState={ props.sideState } width = { props.width } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CoinPoin
