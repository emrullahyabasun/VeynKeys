import React from 'react'

function ContactUs() {
    return (
        <>
            <div>
                {/* contact page map */}
                <div className="contact-page-map mt-50">
                    {/* Google Map Start */}
                    <div className="container">
                        <div className="google-map">
                            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.666476766222!2d29.31389417642164!3d40.923058224667294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb275c7856e323%3A0xd3523f32cfdfae4a!2sArchitecht%20Bili%C5%9Fim%20Sistemleri%20ve%20Pazarlama%20Ticaret%20A.%C5%9E.!5e0!3m2!1str!2str!4v1704047715922!5m2!1str!2str" aria-hidden="false" tabIndex={0} />
                        </div>
                    </div>
                    {/* Google Map End */}
                </div>
                {/* contact page map */}
                {/*=====================Contact Aera Start=========================*/}
                <div className="contact-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-40">
                                <div className="contact-address">
                                    <div className="address-title">
                                        <h3 className="last-title mb-20">Contact Us</h3>
                                    </div>
                                    <div className="contact-message">
                                        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
                                        <ul>
                                            <li><i className="fa fa-fax" /> Address : No 40 Baria Sreet 133/2 NewYork City</li>
                                            <li><i className="fa fa-phone" /> <a href="#">Info@example.com</a></li>
                                            <li><i className="fa fa-envelope-o" /><a href="#">(800) 123 456 789</a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 contact-margin mb-20">
                                <div className="contact-information">
                                    <form className="form-row" action="https://htmldemo.net/circleshop/circleshop/assets/php/circleshop-mail.php" id="contact-form" method="post">
                                        <div className="information-title">
                                            <h3 className="last-title mb-20">Tell us your Project</h3>
                                        </div>
                                        <div className="form_group col-12">
                                            <label className="form-label">Name <span>*</span></label>
                                            <input className="input-form" type="text" placeholder="Your Name" name="name" />
                                        </div>
                                        <div className="form_group col-12">
                                            <label className="form-label">Email<span>*</span></label>
                                            <input className="input-form" type="email" placeholder="Email" name="email" />
                                        </div>
                                        <div className="form_group mb-0 col-12">
                                            <label className="form-label" htmlFor="order-note">Your Message <span>*</span></label>
                                            <textarea className="form-textarea" id="order-note" name="message" defaultValue={""} />
                                        </div>
                                        <div className="form_group mt-20 mb-0 col-12">
                                            <button type="submit" className="btn-secondary">Submit</button>
                                        </div>
                                    </form>
                                    <p className="form-message" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*=====================Contact Aera End=========================*/}
            </div>

        </>
    )
}

export default ContactUs