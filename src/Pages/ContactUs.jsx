import React from "react"

const ContactUs = () => {

return (
    <>
    <div id="maincontent" className="maincontent">
<div className="container-fluid contact-wrapper">
   <div className="container-fluid contact-wrapper">
    <div className="section-bg-w-br-30" >
    <div class="row text-center">
            <div class="col-12 mb-3">
                <div class="headingtitle pb-0">
                    <h1>Contact Us</h1>
                </div>

            </div>
        </div>
        <div className="row contact-shops-container text-center">
    <div className="col-12 col-md contact-form-shop py-4">
        <div className="inner">
            <p style={{textAlign: "center"}}><br/>
                <strong>Omikron Pro Lighting LTD</strong>
            </p>
            <p style={{textAlign: "center"}}>Athens</p>
            <p style={{textAlign: "center"}}>Dervenion 31, Metamorfosi, Greece 14451<br/>
                Mon - Fri , 09:00 - 17:00 GMT +2<br/><br/>
                Tel: +30 210 2811300
            </p>
        </div>
    </div>

    <div className="col-12 col-md contact-form-shop py-4 mt-4 mt-md-0">
        <div className="inner">
            <p style={{textAlign: "center"}}><br/>
                <strong>FOS Technologies LTD</strong>
            </p>
            <p style={{textAlign: "center"}}>Sofia Industrial Park</p>
            <p style={{textAlign: "center"}}>Gara Elin Pelin, Sofia, Bulgaria 2109<br/><br/>
                info@fos-lighting.eu
            </p>
            <p style={{textAlign: "center"}}>Call Center: +30 210 2819909</p>
        </div>
    </div>
    

</div>
<div className="row contact-form my-4">
    <div className="col mb-5">
        <form name="contact_us" id="contact_us" action="https://www.fos-lighting.eu/contact-submit.php" method="post" className="ContactForm" noValidate>
            <input type="hidden" name="action" value="send"/>
            <input type="hidden" name="form_origin" value="contact_form"/>
            <div className="content mainwrap">
                <div className="col-12 text-center">
                    <h3>Contact Form</h3>
                </div>
                <div className="field">
                    <div className="fieldlabel">Fullname:</div>
                    <div className="fieldkey">
                        <input type="text" name="name" id="name"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">E-Mail:</div>
                    <div className="fieldkey">
                        <input type="text" name="email" id="email"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Telephone:</div>
                    <div className="fieldkey">
                        <input type="text" name="telephone_number" id="telephone_number"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Company Details:</div>
                    <div className="fieldkey">
                        <input type="text" name="company_details" id="company_details"/>
                    </div>
                </div>
                {/* Uncomment the following fields if needed */}
                 <div className="field">
                    <div className="fieldlabel">Address:</div>
                    <div className="fieldkey">
                        <input type="text" name="street_address" id="street_address"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">City:</div>
                    <div className="fieldkey">
                        <input type="text" name="city" id="city"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Postcode:</div>
                    <div className="fieldkey">
                        <input type="text" name="postcode" id="postcode"/>
                    </div>
                </div>
                <div className="field">
                    <div className="fieldlabel">Country:</div>
                    <div className="fieldkey">
                        <select name="country">
                            <option value="">Select</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                </div> 
                <div className="field">
                    <div className="fieldlabel">Message:</div>
                    <div className="fieldkey">
                        <textarea name="enquiry" wrap="soft" cols="5" rows="5" id="enquiry" className="selectform"></textarea>
                    </div>
                </div>
                <div className="field terms">
                    <div className="cboxcontainer">
                        <input type="checkbox" name="agree_terms" value="0" id="agree_terms" style={{display: "none"}}/>
                        <label htmlFor="agree_terms" className="css-label">I agree with <a className="ml-1" href="https://www.fos-lighting.eu/gdpr.php" target="_blank" style={{textDecoration: "underline"}}>personal data terms</a></label>
                    </div>
                </div>
                <div className="field captcha py-3">
                    <div className="fieldkey" style={{textAlign: "center"}}>
                        {/* Add reCAPTCHA component here */}
                    </div>
                </div>
                <div className="field" style={{display: "none !important"}}>
                    <div className="fieldkey accept_terms">
                        <input type="checkbox" name="security_field_by_web_experts" value="1" style={{display: "none !important"}} tabIndex="-1" autoComplete="off"/>
                    </div>
                </div>
                <div className="field last text-center mt-3">
                    <div className="fieldkey">
                        <input type="submit" border="0" alt="Send" value="Send" title="Send" className="shop-btn"/>
                    </div>
                </div>
            </div>
        </form>
        <div className="contactFormSuccess">
            <i className="las la-check-circle"></i>
            Your enquiry has been successfully sent. Thank you for your interest. We will contact you back soon. Please check your inbox and spam folder.
        </div>
    </div>
</div>
    </div>
   </div>
   
</div>
</div>
</>

)
}

export default ContactUs ;