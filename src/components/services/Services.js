import React, { useEffect } from "react";
import Service_content from './service-content/Service_content'
import How_to_book from './how-to-book/How_to_book'
import Ratings from './ratings/Ratings'
import Downlaod_app from '../home/download-app/Downlaod_app'

const Services = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
            <Service_content />
            <How_to_book />
            <Ratings />
            <Downlaod_app />

        </>
    )
}

export default Services