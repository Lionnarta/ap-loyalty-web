import React from 'react'
import './PremiumAccess.css'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SideBar from '../../components/SideBar/SideBar'
import PremiumAccessSection from '../../components/PremiumContentSection/PremiumAccessSection'

interface PremiumAccessProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const PremiumAccess:React.FC<PremiumAccessProps> = (props) => {
    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <div className='ap-w-full'>
                    <PremiumAccessSection sideState={ props.sideState } width = { props.width } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PremiumAccess
