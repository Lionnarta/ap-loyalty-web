import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Modal.css'
import ExchangeModal1 from './ExchangeModal1'
import ExchangeModal2 from './ExchangeModal2'
import ExchangeModal3 from './ExchangeModal3'

interface EMProps {
    showEM: boolean,
    setShowEM: React.Dispatch<React.SetStateAction<boolean>>,
    showEM1: boolean,
    setShowEM1: React.Dispatch<React.SetStateAction<boolean>>,
}

const ExchangeModal:React.FC<EMProps> = (props) => {

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showEM ? 1 : 0,
        transform: props.showEM ? `translateY(0%)` : `translateY(-100%)`
    });

    const [showEM2, setShowEM2] = useState(false);
    const [showEM3, setShowEM3] = useState(false);

    useEffect(() => {
        const checkClickOutside = (e:MouseEvent) => {
            if (props.showEM && (e.target as HTMLDivElement).className === "ap-modal-position") {
                props.setShowEM1(false);
                props.setShowEM(false);
                setShowEM2(false);
                setShowEM3(false);
            }
        }

        document.addEventListener("mousedown", checkClickOutside)

        return () => {
            document.removeEventListener("mousedown", checkClickOutside)
        }
    }, [props.showEM1])

    return (
        <div>
            { props.showEM ? (
                <div className='ap-modal-bg'>
                    <animated.div style={ animation }>
                        <div>
                            <ExchangeModal1 showEM1={ props.showEM1 } setShowEM1={ props.setShowEM1 } setShowEM2={ setShowEM2 } setShowEM={ props.setShowEM } />
                            <ExchangeModal2 showEM2={ showEM2 } setShowEM2={ setShowEM2 } setShowEM3={ setShowEM3 } setShowEM={ props.setShowEM } />
                            <ExchangeModal3 showEM3={ showEM3 } setShowEM3={ setShowEM3 } setShowEM={ props.setShowEM } />
                        </div>
                    </animated.div>
                </div>
            ) : null }
        </div>
    )
}

export default ExchangeModal
