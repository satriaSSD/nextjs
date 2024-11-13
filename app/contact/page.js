
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Contact">
        {/*Start Contact Page*/}
        <section className="contact-page">
            {/*Start Contact Page Top*/}
            <div className="contact-page__top">
                <div className="contact-page__top-pattern"
                    style={{ backgroundImage: 'url(assets/images/pattern/contact-page-top-pattern.png)' }} ></div>
                <div className="container">
                    <div className="row">
                        {/*Start Contact Page Top Content*/}
                        <div className="col-xl-6">
                            <div className="contact-page__top-content">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Contact us</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 float-bob-x3"></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Get in Touch And We’ll <br/> Help Your
                                        Business
                                    </h2>
                                </div>

                                <div className="contact-page__top-content-text1">
                                    <p>Our dedicated team of experts is here to guide you through every step of the
                                        insurance journey, ensuring you make informed choices tailored to your uniq
                                        needs choices tailored to your unique needs. </p>
                                </div>

                                <div className="social-links">
                                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                        {/*End Contact Page Top Content*/}

                        {/*Start Contact Page Top Form*/}
                        <div className="col-xl-6">
                            <div className="contact-page__top-form">
                                <form className="contact-form-validated why-choose-one__form"
                                    action="assets/inc/sendemail.php" method="post" >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="name" placeholder="Name" required=""/>
                                                <div className="icon"><span className="icon-user"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="email" name="email" placeholder="Email" required=""/>
                                                <div className="icon"><span className="icon-email"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <input type="text" name="Phone" placeholder="Phone" required=""/>
                                                <div className="icon"><span className="icon-phone2"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide">
                                                        <option>Subject</option>
                                                        <option>Freight Type 01</option>
                                                        <option>Freight Type 02</option>
                                                        <option>Freight Type 03</option>
                                                        <option>Freight Type 04</option>
                                                        <option>Freight Type 05</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-xl-12">
                                            <div className="input-box">
                                                <textarea name="message" placeholder="Message"></textarea>
                                                <div className="icon style2"><span className="icon-pen"></span></div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="why-choose-one__form-btn">
                                                <button type="submit" className="thm-btn">
                                                    Submit Now
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                        </div>
                        {/*End Contact Page Top Form*/}
                    </div>
                </div>
            </div>
            {/*End Contact Page Top*/}

            {/*Start Contact Page Bottom*/}
            <div className="contact-page__bottom">
                <div className="container">
                    <div className="contact-page__bottom-inner">
                        <ul className="list-unstyled">
                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-address"></span>
                                </div>
                                <div className="content">
                                    <h2>Location</h2>
                                    <p>280 Granite Run Drive <br/> SuiteHobert, LA 90010, USA.</p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-clock2"></span>
                                </div>
                                <div className="content">
                                    <h2>Working Hours</h2>
                                    <p>Wednesday - Sunday <br/> 7:00 AM - 5:00 PM</p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-email"></span>
                                </div>
                                <div className="content">
                                    <h2>Email</h2>
                                    <p>
                                        <Link href="mailto:support@logistra.com">support@logistra.com</Link> <br/>
                                        <Link href="mailto:support@logistra.com">support@logistra.com</Link>
                                    </p>
                                </div>
                            </li>

                            <li className="contact-page__bottom-single">
                                <div className="icon">
                                    <span className="icon-phone"></span>
                                </div>
                                <div className="content">
                                    <h2>Phones</h2>
                                    <p>
                                        <Link href="tel:880123456789">+880 123 456 789</Link> <br/>
                                        <Link href="tel:880123456789">+880 123 456 789</Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*End Contact Page Bottom*/}
        </section>
        {/*End Contact Page*/}

        {/*Start Google Map One*/}
        <section className="google-map-one">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6209.242755903148!2d-77.04363602434464!3d38.90977276948481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1394992895496"
                className="google-map-one__map">
            </iframe>
        </section>
        {/*End Google Map One*/}

            </Layout>
        </>
    )
}