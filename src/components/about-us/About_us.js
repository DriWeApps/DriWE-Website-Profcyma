import React, { useEffect } from "react";
import About_content from './about-content/About_content'
import Mission_vision from './mission-vision/Mission_vision'
import Counter from '../home/counter/Counter'
import Downlaod_app from '../home/download-app/Downlaod_app'
import Meet_team from './meet-team/Meet_team'

const About_us = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <About_content />
        <Mission_vision />
        <Counter />
        <Meet_team />
        <Downlaod_app />
        
    </>
  )
}

export default About_us