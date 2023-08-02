import React from 'react'

// App imports
import AnimationWipeOnShow from '../animations/AnimationWipeOnShow'
import AnimationFadeOnShow from '../animations/AnimationFadeOnShow'

function ContactSection() {
    return (
        <>
            <AnimationWipeOnShow wipeDirection = "top" borderRadius = {"1.8rem 1.8rem 0rem 0rem"}>
                <div className="bg-dark py-5 p-4 p-sm-5 rounded-5 rounded-bottom-0 text-white">
                    <div className="container-fluid">
                        <div className="mb-4">
                            <AnimationFadeOnShow>
                                <h4 className="text-uppercase fw-bold font-monospace text-secondary mb-2">Get in touch</h4>
                            </AnimationFadeOnShow>

                            <AnimationFadeOnShow>
                                <h2 className="fw-bold">
                                    Considering to be in contact with me regarding a project? Perhaps collaboration? Or just about anything?
                                </h2>
                            </AnimationFadeOnShow>
                        </div>

                        <AnimationFadeOnShow>
                            <div className="mt-4 ms-0 ms-sm-3 ms-md-5">
                                <div className="mb-3">
                                    <form action="https://formsubmit.io/send/jjcabreraaaa@gmail.com" method="POST" target="_blank">
                                        <label className="form-label text-secondary  fw-bold">Send me a message!</label>
                                        <div className="row gy-3">
                                            <div className="col">
                                                <input className="form-control" type="text" name="name" placeholder="Name" required></input>
                                            </div>
                                            <div className="col">
                                                <input className="form-control" type="email" name="email" placeholder="Email" required></input>
                                            </div>
                                            <div className="col-12">
                                                <textarea name="message" rows={2} className="form-control" placeholder="Message" required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-outline-light btn-sm" type="submit">Send message</button>
                                            </div>
                                        </div>
                                        <input name="_formsubmit_id" type="text" style={{ display: 'none' }}></input>
                                    </form>
                                </div>
                            </div>
                        </AnimationFadeOnShow>

                        <AnimationFadeOnShow>
                            <div className="mt-4 ms-0 ms-sm-3 ms-md-5">
                                <p>I don't have any job experience yet<span className="text-secondary">─currently willing to get exploited just to get that experience jkjk</span>, but I am confident that I have the skills to take on any challenging job that matches my interest.</p>
                                <p className="">Sincerely, a broke ass tea-powered programmer badly in need of money.</p>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-geo-alt-fill fs-4 me-2"></i>
                                    <small>Currently based in Philippines</small>
                                </div>
                            </div>
                        </AnimationFadeOnShow>

                        <AnimationFadeOnShow>
                            <div className="mt-5 d-flex align-items-center">
                                <a href="mailto:jjcabreraaaa@gmail.com" className="btn btn-light me-3 font-monospace text-uppercase"><small>Hire me!</small></a>
                                <small>Made with tears: <span className="fw-bold">© JCabrera 2022</span></small>
                            </div>
                        </AnimationFadeOnShow>
                    </div>
                </div>
            </AnimationWipeOnShow>
        </>
    )
}

export default ContactSection