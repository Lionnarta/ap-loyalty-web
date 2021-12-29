import React, { useState } from 'react'
import './Loyalty.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import LoyaltySection from '../../components/LoyaltySection/LoyaltySection'

interface LoyaltyProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const Loyalty:React.FC<LoyaltyProps> = (props) => {
    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <LoyaltySection sideState={ props.sideState } width = { props.width } />
            </div>
            <Footer />
        </div>
    )
}

export default Loyalty
