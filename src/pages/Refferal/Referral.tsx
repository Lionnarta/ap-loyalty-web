import React, { useState, useEffect } from 'react';
import './Referral.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import ReferralSection from '../../components/ReferralSection/ReferralSection';

interface ReferralProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const Referral:React.FC<ReferralProps> = (props) => {

    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <ReferralSection sideState={ props.sideState } width = { props.width } />
            </div>
            <Footer />
        </div>
    )
}

export default Referral;
