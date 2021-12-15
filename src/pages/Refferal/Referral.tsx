import React, { useState, useEffect } from 'react';
import './Referral.css';
import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import ReferralSection from '../../components/ReferralSection/ReferralSection';

const Referral = () => {

    const [sideState, setSideState] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    
    const toggleSide = () => {
        setSideState(!sideState);
    }

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
            if (width < 768) {
                setSideState(false);
            }
            else {
                setSideState(true);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    })

    return (
        <div>
            <NavigationBar toggleSide={ toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (sideState && width > 768)?<SideBar />:null
                }
                <ReferralSection />
            </div>
            <Footer />
        </div>
    )
}

export default Referral;
