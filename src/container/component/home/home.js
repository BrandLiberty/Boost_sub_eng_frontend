import React from 'react'
// import Slider from '../../adOns/molecules/Slider.js'
import Social from './homeComponent/homeServices.js'
import About from './homeComponent/homeFeaturedServices.js'
import Section from './homeComponent/homeWhyUs.js'
import Psec from './homeComponent/homeProject.js'
// import '../../assets/css/component/home/home.css'
// import ContactComp from '../../atoms/contactComponent.js'


const Home = () => {

    // const el = useRef(null)

    // useEffect(() => {
    //     const typed = new Typed(el.current, {
    //         strings: ["Mehanical Engineering", "Electronic Engineering", "Civil Engineering", "Electrical Engineering"], // Strings to display
    //         // Speed settings, try diffrent values untill you get good results
    //         startDelay: 300,
    //         typeSpeed: 100,
    //         backSpeed: 100,
    //         backDelay: 100,
    //         loop: true,
    //         showCursor: false
    //     });

    //     // Destropying
    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <>
            {/* <Slider /> */}
            <About />
            <Section />
            <Social />
            <Psec />
            
            
        </>
    )
}


export default Home