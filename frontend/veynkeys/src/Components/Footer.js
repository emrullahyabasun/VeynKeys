import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

           
            {/* Footer Top Start */}
            <hr />
            <div className="footer-top mt-50 mb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-single-widget">
                                <div className="footer-logo mb-40">
                                    <a href="/home"><img src="https://www.keychron.com/cdn/shop/files/keychron-logo-transparent-1_e481c26f-93a1-4c14-80c9-4d80ad096f3a.png?v=1614760292&width=350" alt="" /></a>
                                </div>
                                <div className="widget-body">
                                    <p>Keychron designs and produces custom and wireless productive tools for Mac, Windows, iPhone and Android.</p>
                                    <div className="widget-address mt-30 mb-20">
                                        <p><strong>Address:</strong> 123 Main Street, Anytown, CA 12345 USA.</p>
                                        <p><strong>Number Phone:</strong> (800) 123 456 - (800) 123 456.</p>
                                        <p><strong>Address Email:</strong> support@circleshop.com</p>
                                    </div>
                                </div>
                                <div className="footer_social">
                                    <ul className="d-flex">
                                        <li><a className="facebook" href="https://www.facebook.com/keychron/"><i className="zmdi zmdi-facebook" /></a></li>
                                        <li><a className="twitter" href="https://twitter.com/KeychronMK"><i className="zmdi zmdi-twitter" /></a></li>
                                        <li><a className="youtube" href="#https://www.youtube.com/@KeychronKeyboard"><i className="zmdi zmdi-youtube" /></a></li>
                                        <li><a className="google" href="https://www.keychron.com/"><i className="zmdi zmdi-google-plus" /></a></li>
                                        <li><a className="linkedin" href="https://www.linkedin.com/company/keychron/about/"><i className="zmdi zmdi-linkedin" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="widgets_container">
                                        <h6>Information</h6>
                                        <div className="footer_menu">
                                            <ul>
                                                <li><Link to="/AboutUsPage">About Us</Link></li>
                                                <li><Link to="/ContactUs">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="widgets_container">
                                        <h6>My Account</h6>
                                        <div className="footer_menu">
                                            <ul>
                                                <li><a href="#">My Account</a></li>
                                                <li><a href="#">Older History</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                                <li><a href="#">Newslatter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="widgets_container">
                                        <h6>Find It Fast</h6>
                                        <div className="footer_menu">
                                            <ul>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">Laptop &amp; Mobile</a></li>
                                                <li><a href="#">Components</a></li>
                                                <li><a href="#">Terms &amp; Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="widgets_container">
                                        <h6>Customer Service</h6>
                                        <div className="footer_menu">
                                            <ul>
                                                <li><a href="#">Sitemap</a></li>
                                                <li><a href="#">My Account</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Delivery Information</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="widget-box mt-30">
                                        <div className="widget-single-box">
                                            <p><strong>Address:</strong></p>
                                            <ul>
                                                <li><a href="#">Order</a></li>
                                                <li><a href="#">Affiliate</a></li>
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Sourcing</a></li>
                                                <li><a href="#">Gadgets</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget-single-box">
                                            <p><strong>Headphones:</strong></p>
                                            <ul>
                                                <li><a href="#">Beats</a></li>
                                                <li><a href="#">Headphone Bose</a></li>
                                                <li><a href="#">Headphone Nocx</a></li>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Headphone</a></li>
                                                <li><a href="#">Headphone Mini</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget-single-box">
                                            <p><strong>Computers:</strong></p>
                                            <ul>
                                                <li><a href="#">Mini Laptops</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">Laptop Mouse</a></li>
                                                <li><a href="#">Laptop Pad</a></li>
                                                <li><a href="#">GB Laptop</a></li>
                                                <li><a href="#">XL Laptop</a></li>
                                            </ul>
                                        </div>
                                        <div className="widget-single-box">
                                            <p><strong>Camera:</strong></p>
                                            <ul>
                                                <li><a href="#">Lense Camera</a></li>
                                                <li><a href="#">Frame Camera</a></li>
                                                <li><a href="#">Box Camera</a></li>
                                                <li><a href="#">Mini Camera</a></li>
                                                <li><a href="#">XL Camera</a></li>
                                                <li><a href="#">Point shoot camera</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Top End */}


        </>
    )
}

export default Footer