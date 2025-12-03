import React from 'react'
import './Meet_team.css'
import Common_title from '../../common/common-title/Common_title'
import { Link } from 'react-router-dom'

const Meet_team = () => {
    return (
        <>
            <section className='Meet_team_sec'>
                <div className='container'>
                    <Common_title specialtext={'Meet the Team Behind DriWE'} subtitle={'A passionate group driving innovation in urban transport, one ride at a time.'} />

                    <div className='cardsec'>
                        <div className='row'>
                            <div className='col-lg-10 mx-auto'>
                                <div className='row'>
                                    <div className='col-lg-4  col-sm-6 mb-3'>
                                        <div className='team_card'>
                                            <div className='imgdiv'>
                                                <img className='prsn_img' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/icon.jpg'} />
                                                <div className='name_overlay'>
                                                    <p className='name'>Imroz Khan</p>
                                                </div>
                                            </div>
                                            <div className='team_desc'>
                                                <div className='row'>
                                                    <div className='col-6 pe-0'>
                                                        <p className='emp_position'>CEO</p>
                                                    </div>
                                                    <div className='col-6 ps-0'>
                                                        {/* <div className='d-flex justify-content-end'>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/instagram.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/facebook.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/linkdin.png'} /></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4  col-sm-6 mb-3'>
                                        <div className='team_card'>
                                            <div className='imgdiv'>
                                                <img className='prsn_img' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/icon.jpg'} />
                                                <div className='name_overlay'>
                                                    <p className='name'>Navid Khan</p>
                                                </div>
                                            </div>
                                            <div className='team_desc'>
                                                <div className='row'>
                                                    <div className='col-6 pe-0'>
                                                        <p className='emp_position'>Director</p>
                                                    </div>
                                                    <div className='col-6 ps-0'>
                                                        {/* <div className='d-flex justify-content-end'>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/instagram.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/facebook.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/linkdin.png'} /></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-4  col-sm-6 mb-3'>
                                        <div className='team_card'>
                                            <div className='imgdiv'>
                                                <img className='prsn_img' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/icon.jpg'} />
                                                <div className='name_overlay'>
                                                    <p className='name'>Rozina Khan</p>
                                                </div>
                                            </div>
                                            <div className='team_desc'>
                                                <div className='row'>
                                                    <div className='col-6 pe-0'>
                                                        <p className='emp_position'>Director</p>
                                                    </div>
                                                    <div className='col-6 ps-0'>
                                                        {/* <div className='d-flex justify-content-end'>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/instagram.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/facebook.png'} /></Link>
                                                            <Link to={'/#'}><img className='social_icon' src={process.env.PUBLIC_URL + '/assets/images/about/meet-team/linkdin.png'} /></Link>
                                                        </div> */}
                                                    </div>
                                                </div>
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
export default Meet_team