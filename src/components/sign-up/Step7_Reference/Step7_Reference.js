"use client"

import { useState } from "react"
import { Card, ProgressBar } from "react-bootstrap"
import Common_button from "../../common/common-btn/Common_button"

function Step7_BankDetails({ formData, setFormData, nextStep, prevStep }) {
    const trainingVideos = [
        {
            id: 1,
            title: "How to Navigate the App",
            videoId: "dQw4w9WgXcQ",
            duration: "2:34",
        },
        {
            id: 2,
            title: "How to Accept Orders",
            videoId: "eY52Zsg-KVI",
            duration: "3:45",
        },
    ]

    const [videoProgress, setVideoProgress] = useState({
        1: 75,
        2: 40,
    })

    return (
        <Card className="signup-card">

            <Card.Body>
                <h5 className="training-title">Training videos letting you know how to use app</h5>
                <div className="videos-section">
                    {trainingVideos.map((video) => (
                        <div key={video.id} className="video-card">
                            <div className="video-container">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="youtube-iframe"
                                ></iframe>
                            </div>

                            <div className="video-info">
                                <h6 className="video-title">{video.title}</h6>
                                <span className="video-duration">{video.duration}</span>

                            </div>
                        </div>
                    ))}
                </div>
            </Card.Body>
            <Card.Footer>
                <div className="step-navigation">
                    <Common_button name={"Back"} onClick={prevStep} />
                    <Common_button name={" Continue"} onClick={nextStep} />
                </div>
            </Card.Footer>
        </Card>
    )
}

export default Step7_BankDetails
