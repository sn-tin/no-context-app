import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import NorthRoundedIcon from '@mui/icons-material/NorthRounded';

const ScrollToTop = () => {

    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        pageYOffset > 400? setVisibility(true) : setVisibility(false)
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    
    if(!visible) {
        return false
    }

    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <NorthRoundedIcon fontSize="large"/>
        </div>
    )
}

export default ScrollToTop;