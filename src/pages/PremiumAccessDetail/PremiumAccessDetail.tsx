import React from 'react'
import './PremiumAccessDetail.css'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SideBar from '../../components/SideBar/SideBar'
import PremiumDetail from '../../components/PremiumContentSection/PremiumDetail'

interface PADProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const PremiumAccessDetail:React.FC<PADProps> = (props) => {
    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <div className='ap-w-full'>
                    <PremiumDetail sideState={ props.sideState } width = { props.width } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PremiumAccessDetail
