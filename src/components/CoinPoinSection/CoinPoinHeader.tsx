import React from 'react'
import './CoinPoinSection.css'

interface CoinPoinHeaderProps {
    sideState: boolean,
    width: number
}

const CoinPoinHeader:React.FC<CoinPoinHeaderProps> = (props) => {
    return (
        <div className='ap-w-full'>
            <section className='ap-cp'>
                <div className={ (props.sideState && props.width <= 992 && props.width > 768) ? 'ap-cp-header ap-text-white ap-center' : 'ap-cp-header ap-text-white ap-flex' }>
                    <div className='ap-mb-10'>
                        <p className='ap-font-18 ap-mb-5'>Halo, Astro</p>
                        <p className='ap-font-22 ap-content-600'>Yuk Ikuti Challenge di Aplikasi Aku Pintar Untuk Menambah AP Poin Milikmu!</p>
                    </div>
                    <div className='ap-cp-download'>
                        <p className='ap-flex ap-align-center ap-justify-center ap-font-14 ap-content-500'>
                            <svg className='ap-mr-10 ap-cp-download-icon' width="15" height="19" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.07115 16.8889H13.9289C14.2003 16.889 14.4616 16.9906 14.66 17.1731C14.8584 17.3557 14.979 17.6057 14.9975 17.8725C15.016 18.1393 14.931 18.4031 14.7597 18.6106C14.5884 18.818 14.3435 18.9537 14.0746 18.9901L13.9289 19H1.07115C0.799675 18.9999 0.538352 18.8983 0.339986 18.7157C0.141619 18.5332 0.0209972 18.2832 0.00249352 18.0164C-0.0160101 17.7496 0.0689838 17.4858 0.240302 17.2783C0.411619 17.0709 0.656488 16.9352 0.925428 16.8987L1.07115 16.8889H13.9289H1.07115ZM7.35428 0.00985181L7.5 0C7.75892 1.07567e-05 8.00908 0.0923861 8.20422 0.260043C8.39935 0.427699 8.52626 0.659295 8.56147 0.912L8.57148 1.05556V11.8757L11.793 8.70341C11.9747 8.52448 12.2156 8.41582 12.4718 8.39722C12.728 8.37862 12.9825 8.45132 13.1888 8.60207L13.3088 8.70341C13.4904 8.88239 13.6007 9.1197 13.6196 9.3721C13.6385 9.62449 13.5647 9.87517 13.4117 10.0784L13.3088 10.1967L8.25718 15.1719C8.07576 15.3506 7.83524 15.4593 7.57936 15.4782C7.32348 15.497 7.06922 15.4248 6.86283 15.2746L6.74282 15.1719L1.69118 10.1967C1.49946 10.0083 1.38724 9.75546 1.37706 9.48892C1.36689 9.22238 1.45952 8.96192 1.63633 8.75993C1.81315 8.55793 2.06103 8.42936 2.33014 8.40008C2.59926 8.37079 2.86965 8.44296 3.08695 8.60207L3.20696 8.70341L6.42852 11.8785V1.05556C6.42854 0.80048 6.5223 0.554037 6.69249 0.361801C6.86267 0.169565 7.09776 0.044542 7.35428 0.00985181L7.5 0L7.35428 0.00985181Z"/>
                            </svg> Download
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoinPoinHeader
