import React from 'react'

function ContactUsPage() {
  return (
    <div>
      <section className="contact-us-page">
        <div className="container">
            <div className="col-lg-12">
                <div className="contact-page-form">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-heading">
                                            <h2>Don't be Hesitated<br/><em>Send a message now</em>!</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">                 
                                        <input name="first-name" type="text" id="first-name" placeholder="First Name*" required=""/>               
                                    </div>
                                    <div className="col-lg-6">                
                                        <input name="last-name" type="text" id="last-name" placeholder="Last Name*" required=""/>                           
                                    </div>
                                    <div className="col-lg-6">                       
                                        <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>                        
                                    </div>
                                    <div className="col-lg-6">                         
                                        <input name="subject" type="text" id="subject" placeholder="Subject*" required=""/>                        
                                    </div>
                                    <div className="col-lg-12">                           
                                        <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>                          
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" id="form-submit" className="main-button ">Send Message</button>                            
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-info">
                                <ul>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>
                                        <h6>Mailing Address</h6>
                                        <span>Sunny Isles Beach, Florida 33160, USA</span>
                                    </li>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="44" viewBox="0 0 24 24" width="44"><g><rect fill="none" height="24" width="24"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h9v-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M19,15l4,4 l-4,4v-3h-4v-2h4V15z"/></g></svg></div>
                                        <h6>Email Address</h6>
                                        <span>contact@company.com</span>
                                    </li>
                                    <li>
                                        <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48" viewBox="0 0 24 24" width="48"><g><rect fill="none" height="24" width="24"></rect></g><g><g><path className="icon" d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"></path><circle className="icon" cx="9" cy="13" r="1"></circle><circle className="icon" cx="15" cy="13" r="1"></circle><path className="icon" d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"></path></g></g></svg></div>
                                        <h6>Chat With Us</h6>
                                        <span>chat@company.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ContactUsPage;
