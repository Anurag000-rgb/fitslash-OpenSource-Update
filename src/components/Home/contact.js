import React from 'react';
import Title from "../global/title";

export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="Contact Us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form method="POST" action="https://formspree.io/realagam.1997@gmail.com">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="mno@xyz.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Mobile No</label>
                            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="123-456-7890" />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className="form-control" rows="5" placeholder="Your description goes here"></textarea>
                        </div>
                        {/* submit button */}
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                    </form>
                </div>
            </div>
           
        </section>
    )
}
