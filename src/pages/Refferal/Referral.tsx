import React, { useState } from 'react';
import './Referral.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';

const Referral = () => {

    const [sideState, setSideState] = useState(true);

    const toggleSide = () => {
        setSideState(!sideState);
    }

    return (
        <div>
            <NavigationBar toggleSide={ toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    sideState?<SideBar />:null
                }
            </div>
            <Footer />
        </div>
    )
}

export default Referral;
