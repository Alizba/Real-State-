import React from "react";
import './Contact.css'
import contactImg from "/images/contactImg.jpg"
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contact = () => {
    return (
        <div className="contact-page">
            <section className="c-wrapper">
                <div className="padding innerWidth flexCenter c-container">
                    <div className="flexColStart c-left">
                        <div>
                            <span className="orangeText">Our Contact</span>
                            <span className="primaryText">Easy to contact us</span>
                            <span className="secondaryText">We always ready to help by providing the best services for you. We believe a good place to live so you can make your life better.</span>

                            <div className="flexStart contactModes">
                                <div className="flexColStart row">
                                    <div className="flexColCenter mode">
                                        <div className="flexStart icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>
                                                Call
                                            </span>
                                            <span>
                                                021 123 145 14
                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="flexStart row">
                                    <div className="flexColCenter mode">
                                        <div className="flexStart icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>
                                                Chat
                                            </span>
                                            <span>
                                                021 123 145 14
                                            </span>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="flexStart row">
                                    <div className="flexColCenter mode">
                                        <div className="flexStart icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>
                                                Video Call
                                            </span>
                                            <span>
                                                021 123 145 14
                                            </span>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className="flexStart row">
                                    <div className="flexColCenter mode">
                                        <div className="flexStart icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span>
                                                Message
                                            </span>
                                            <span>
                                                021 123 145 14
                                            </span>
                                        </div>
                                    </div>
                                  
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="c-right">
                        <div className="image-container">

                            <img src={contactImg} alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default contact