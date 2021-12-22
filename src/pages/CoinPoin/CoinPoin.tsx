import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';

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
            </div>
            <Footer />
        </div>
    )
}

export default CoinPoin
