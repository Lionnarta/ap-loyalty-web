import React from 'react'
import './Voucher.css'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SideBar from '../../components/SideBar/SideBar'
import VoucherSection from '../../components/PremiumContentSection/VoucherSection'

interface VoucherProps {
    sideState: boolean,
    width: number,
    toggleSide: () => void
}

const Voucher:React.FC<VoucherProps> = (props) => {
    return (
        <div>
            <NavigationBar toggleSide={ props.toggleSide } />
            <div style={{paddingTop: "80px"}}></div>
            <div className='ap-r-layout'>
                {
                    (props.sideState)?<SideBar />:null
                }
                <div className='ap-w-full'>
                    <VoucherSection sideState={ props.sideState } width = { props.width } />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Voucher
