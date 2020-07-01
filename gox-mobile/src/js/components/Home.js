import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Swiper from 'react-id-swiper';
import Fade from 'react-reveal/Fade';

import Navbar from '../navbar'
import Footer from '../footer'
import '../../sass/main.scss'
import 'swiper/css/swiper.css';

class Home extends Component{     
    componentDidMount(){
        window.addEventListener('scroll', () => {
            let header = document.getElementById("navbar");

            if (window.pageYOffset > 0) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
    }
    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            rebuildOnUpdate: true,
            shouldSwiperUpdate: true,
            breakpoints: {
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }
        }

        return(
            <div className="container homepage">
                <Navbar />
                <Fade clear>
                    <div className="content-container">
                        <div className="content-header">
                            <div className="header row">
                                <div className="left-content col-12 col-sm-5">
                                    <div className="left-content_body">
                                        <img src="../../assets/images/logo.png" className="logo" alt="logo" /> <br/>
                                        <img src="../../assets/images/logo-leftbar.png" className="logo-leftbar" alt="logo left bar" />
                                        <div className="leftbar row">
                                            <div className="sosmed">
                                                <a href="#">
                                                    <img className="insta" src="../../assets/images/sos-ig.png" alt="logo instagram"/>
                                                </a>
                                                <a href="#">
                                                    <img className="wa" src="../../assets/images/sos-wa.png" alt="logo whatsapp"/>
                                                </a>
                                                <a href="#">
                                                    <img className="mail" src="../../assets/images/sos-mail.png" alt="logo mail"/>
                                                </a>
                                            </div>
                                            <hr/>
                                            <p className="text-better">BETTER THAN THE BEST</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-content col-12 col-sm-7 fade-in">
                                    <h1>LOREM IPSUM</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nesciunt, veritatis magnam perferendis eaque impedit sunt itaque, nemo iusto architecto ipsa cum eum.</p>
                                    <button className="btn primary">DISCOVER THEIR STORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="content-container mob-c" id="nav-story">
                        <div className="content-story fade-in">
                            <h2>
                                IF IT CAN BE <span className="font-sec">IMAGINED</span>, <br/>
                                IT CAN BE <span className="font-sec">CREATED</span>
                            </h2>
                            <div className="content-story_body row">
                                <div className="logo-story col-12 col-lg-5">
                                    <img src="../assets/images/logo-full.png"/>
                                </div>
                                <div className="description-story col-12 col-lg-7">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nesciunt, veritatis magnam perferendis eaque impedit sunt itaque, nemo iusto architecto ipsa cum eum placeat ab deserunt iure hic, nostrum officia.</p>
                                    <button className="btn secondary">READ OUR STORY</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="content-container" id="nav-products">
                        <div className="content-products">
                            <h2><span className="font-sec">OUR</span> LEATHERS</h2>
                            <div className="list-product">
                                <Swiper {...params}>
                                    <div className="product product1">
                                        <div className="logo-product">
                                            <img src="../assets/images/logo-product1.png"/>
                                        </div>
                                            <p className="see-btn">SEE THE PRODUCT</p>
                                    </div>
                                    <div className="product product2">
                                        <div className="logo-product">
                                            <img src="../assets/images/logo-product2.png"/>
                                        </div>
                                        <p className="see-btn">SEE THE PRODUCT</p>
                                    </div>
                                    <div className="product product3">
                                        <p className="see-btn">SEE THE PRODUCT</p>
                                    </div>
                                    <div className="product product4">
                                        <div className="logo-product">
                                            <img src="../assets/images/logo-product4.png"/>
                                        </div>
                                        <p className="see-btn">SEE THE PRODUCT</p>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="content-container mob-c">
                        <div className="content-people-story row">
                            <div className="description-story col-12 col-md-6">
                                <h2>
                                    EVERY VISION HAS <br/> 
                                    ITS OWN <span className="font-sec">STORY</span>
                                </h2>
                                <div className="desc-content">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nesciunt, veritatis magnam perferendis eaque impedit sunt itaque</p>
                                    <button className="btn secondary">DISCOVER THEIR STORY</button>
                                </div>
                            </div>
                            <div className="people-img col-12 col-md-6">
                                <img src="../assets/images/people-img.png"/>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="content-container">
                        <div className="content-seat-makers row">
                            <div className="leather-bkg col-12 col-md-5">
                                <h2>
                                    <span className="font-sec">SEAT</span> MAKERS
                                </h2>
                                <div className="desc-content">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nesciunt, veritatis magnam perferendis eaque impedit sunt itaque, nemo iusto architecto ipsa cum eum placeat ab deserunt iure hic, nostrum officia.</p>
                                    <p className="small-text">dolor sit amet consectetur adipisicing elit</p>
                                    <button className="btn secondary" style={{minWidth: '250px'}}>ENTER A PLACE OR CITY</button> <br/>
                                    <button className="btn secondary" style={{minWidth: '250px'}}>DEALER IN ALL CITY</button> <br/>
                                    <button className="btn primary">SEARCH</button>
                                </div>
                            </div>
                            <div className="maps col-12 col-md-7">
                                <img src="../assets/images/maps.png"/>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade left>
                    <div className="content-container">
                        <div className="content-warranty">
                            <h2>CHECK YOUR <span className="font-sec">WARRANTY</span></h2>
                            <div className="warranty-form row">
                                <div className="col-12 col-md-8">
                                    <input placeholder="ENTER LOREM IPSUM DOLOR"/>
                                </div>
                                <div className="col-12 col-md-4">
                                    <button className="btn primary">SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Footer />
            </div>
        );
    }
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;