import React from 'react';
import Layout from '../components/layout';


export default function Contact() {
    return (
        <Layout>
            <section className="contact py-5">
                <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="display-4 text-capitalize font-weight-bold">Welcome to fitslash partner programe</h1>
                        <h4>Signup here to be a wholesale partner with Fitslash.</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form method="POST" action="https://formspree.io/f/xgepdgkg">
                            {/* name */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Mobile No.</label>
                                <input type="text" className="form-control" name="mobileNo" id="mobileNo" placeholder="Enter your contact number" required/>
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" id="email" placeholder="abc@xyz.com" required/>
                            </div>
                            {/* description */}
                            <div className="form-group">
                                <label htmlFor="email">Firm Name(If registered)</label>
                                <input type="text" className="form-control" name="firmName" id="firmName" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">GSTIN(If registered)</label>
                                <input type="text" className="form-control" name="GSTIN" id="GSTIN" oninput="this.value = this.value.toUpperCase()" placeholder="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">City</label>
                                <input type="text" className="form-control" name="City" id="City" placeholder="ex. Jaipur" required />
                            </div>
                            <div className="form-group" required>
                                <label htmlFor="email">What will be your monthly purchase capacity?</label>
                                <br />
                                {/* <input type="text" className="form-control" name="City" id="City" placeholder="ex. Jaipur" /> */}
                                <input type="radio" id="Value" name="Value" value="<50,000" />
                                <label for="male"> less than 50,000</label><br />
                                    <input type="radio" id="VAlue" name="Value" value="50,000-1L" />
                                <label for="female"> 50,000-1L</label><br />
                                    <input type="radio" id="Value" name="Value" value="1L-2L" />
                                    <label for="other"> 1L-2L</label>
                            </div>
                            {/* submit button */}
                            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">Submit</button>
                        </form>
                    </div>
                </div>

            </section>
        </Layout>
        
    )
}
