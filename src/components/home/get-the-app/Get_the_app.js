import React from 'react';
import './get-the-app.css';

const Get_the_app = () => {
    return (
        <>
            <section className='Get_the_app_sec'>
                <div className='box_layer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-10 mx-auto'>
                                <div className='getapp_box'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='text-div'>
                                                <p className='wherep'>Wherever you go, DriWE is with you.</p>
                                                <h6 className='geth6'>Get the app!</h6>
                                            </div>
                                        </div>
                                        <div className='col-md-6 text-center my-auto'>
                                            <div className='d-flex justify-content-center'>
                                                <a 
                                                    href="https://apps.apple.com/in/app/driwe/id6753580252" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    <img 
                                                        className='playstore' 
                                                        src={process.env.PUBLIC_URL + '/assets/images/home/get-app/ios.png'} 
                                                        alt="Download on App Store"
                                                    />
                                                </a>
                                                <a 
                                                    href="https://play.google.com/store/apps/details?id=com.driwe" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                >
                                                    <img 
                                                        className='playstore' 
                                                        src={process.env.PUBLIC_URL + '/assets/images/home/get-app/android.png'} 
                                                        alt="Get it on Google Play"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Get_the_app;
