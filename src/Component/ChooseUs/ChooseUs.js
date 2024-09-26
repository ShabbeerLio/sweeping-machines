import React from 'react'
import "./ChooseUs.css"
import Aboutimg from "../../Assets/About/about.jpg"
import { FaMedal, FaThumbsUp, FaShieldAlt } from "react-icons/fa";

const ChooseUs = () => {
    return (
        <div className='ChooseUs'>
            <div className='ChooseUs-main'>
                <div className='ChooseUs-box'>
                    <div className='ChooseUs-box-left'>
                        <h5>Why Choose Us</h5>
                        <h2>We're the Best Choice for industrial cleaning</h2>
                        <div className="chooseUs-left-card">
                            <p><FaMedal /></p>
                            <div className="choose-left-card-detail">
                                <h4>Experienced Professionals</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nisi soluta a facere eaque explicabo</p>
                            </div>
                        </div>
                        <div className="chooseUs-left-card">
                            <p><FaThumbsUp /></p>
                            <div className="choose-left-card-detail">
                                <h4>Experienced Professionals</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nisi soluta a facere eaque explicabo</p>
                            </div>
                        </div>
                        <div className="chooseUs-left-card">
                            <p><FaShieldAlt /></p>
                            <div className="choose-left-card-detail">
                                <h4>Experienced Professionals</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur maxime nisi soluta a facere eaque explicabo</p>
                            </div>
                        </div>
                    </div>
                    <div className='ChooseUs-box-right'>
                        <img src={Aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs
