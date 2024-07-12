import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../Features/auth/authSlice';
import {  Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde',
    'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the',
    'Congo, Republic of the', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
    'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
    'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia',
    'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

const CreateAccountForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmation: '',
        firstname: '',
        lastname: '',
        telephone: '',
        website: '',
        company: '',
        vat: '',
        street_address: '',
        postcode: '',
        city: '',
        country: '',
        accept_terms: false,
        accept_gdpr: false,
    });

    const [verificationCode, setVerificationCode] = useState('');
    const [errors, setErrors] = useState({});
    const [isVerificationSent, setIsVerificationSent] = useState(false);
    const [verificationError, setVerificationError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = 'First name is required';
        if (!formData.lastname) newErrors.lastname = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmation) newErrors.confirmation = 'Passwords do not match';
        if (!formData.company) newErrors.company = 'Company name is required';
        if (!formData.vat) newErrors.vat = 'VAT is required';
        if (!formData.street_address) newErrors.street_address = 'Street address is required';
        if (!formData.postcode) newErrors.postcode = 'Postcode is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.accept_terms) newErrors.accept_terms = 'You must accept the terms of cooperation to continue';
        if (!formData.accept_gdpr) newErrors.accept_gdpr = 'You must agree to the terms of personal data protection to continue';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("All fields are required ! , and confirmation password must be provided");
            return;
        }
        try {
            await dispatch(register(formData));
            toast.success('Account created successfully! Please verify your email.');
            setIsVerificationSent(true);
        } catch (error) {
            toast.error('Error registering user');
            console.error('Error registering user:', error);
        }
    };

    const handleVerificationSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/auth/verifEmail', {
                email: formData.email,
                verificationCode,
            });
            toast.success('Email verified successfully! Redirecting...');
            navigate("/");
        } catch (error) {
            toast.error('Invalid verification code');
            setVerificationError('Invalid verification code');
            console.error('Error verifying email:', error);
        }
    };
    

    return (
        <div className="mainbody">
            <ToastContainer />
            {!isVerificationSent ? (
                <div className="container-fluid">
                    <div className="section-bg-w-br-30 create-account px-3 px-lg-5 pb-0 pb-lg-5">
                        <form name="create_account" id="create_account" action="https://www.fos-lighting.eu/create_account.php" method="post" noValidate>
                            <input type="hidden" name="action" value="process" />
                            <div className="row text-center">
                                <div className="col-12 col-lg-11 offset-lg-1">
                                    <div>
                                        <h1 className="headingtitle text-left pt-4 pb-3 pt-lg-5 pb-lg-5">Create Account</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-5 mb-5">
                                <div className="col-lg-5 offset-lg-1">
                                    <div className="create-account-title">Personal Details</div>
                                    <div className="separator"></div>
                                    <div className="field">
                                        <div className="fieldlabel">First name:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                value={formData.firstname}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Last name:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="lastname"
                                                id="lastname"
                                                value={formData.lastname}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Email Address:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Password:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Confirmation:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="password"
                                                name="confirmation"
                                                id="confirmation"
                                                value={formData.confirmation}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Telephone:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="telephone"
                                                id="telephone"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Website:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="website"
                                                id="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="create-account-title">Company Details</div>
                                    <div className="separator"></div>
                                    <div className="field">
                                        <div className="fieldlabel">Company:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">VAT:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="vat"
                                                id="vat"
                                                value={formData.vat}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Street Address:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="street_address"
                                                id="street_address"
                                                value={formData.street_address}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Postcode:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="postcode"
                                                id="postcode"
                                                value={formData.postcode}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">City:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <div className="field">
                                        <div className="fieldlabel">Country:</div>
                                        <div className="fieldkey">
                                            <select
                                                name="country"
                                                id="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a country</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="checkbox-container mt-3 mb-4">
                                        <div className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                name="accept_terms"
                                                id="accept_terms"
                                                checked={formData.accept_terms}
                                                onChange={handleChange}
                                            />
                                            I accept the <a href="https://www.fos-lighting.eu/terms-conditions" target="_blank" rel="noopener noreferrer">terms of cooperation</a>
                                        </div>
                                        <span className="inputRequirement">*</span>
                                    </div>
                                    <div className="checkbox-container mb-4">
                                        <div className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                name="accept_gdpr"
                                                id="accept_gdpr"
                                                checked={formData.accept_gdpr}
                                                onChange={handleChange}
                                            />
                                            I agree to the <a href="https://www.fos-lighting.eu/gdpr" target="_blank" rel="noopener noreferrer">terms of personal data protection</a>
                                        </div>
                                        <span className="inputRequirement">*</span>
                                    </div>
                                </div>
                                <div className="col-lg-10 offset-lg-1">
                                    <Button type="submit" className="btn-submit btn-rounder btn-filled" onClick={handleSubmit}>Create Account</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className="section-bg-w-br-30 create-account px-3 px-lg-5 pb-0 pb-lg-5">
                        <form name="verification_form" id="verification_form" noValidate>
                            <div className="row text-center">
                                <div className="col-12 col-lg-11 offset-lg-1">
                                    <div>
                                        <h1 className="headingtitle text-left pt-4 pb-3 pt-lg-5 pb-lg-5">Email Verification</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row pb-5 mb-5">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="field">
                                        <div className="fieldlabel">Verification Code:</div>
                                        <div className="fieldkey">
                                            <input
                                                type="text"
                                                name="verificationCode"
                                                id="verificationCode"
                                                value={verificationCode}
                                                onChange={(e) => setVerificationCode(e.target.value)}
                                            />
                                            <span className="inputRequirement">*</span>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                    <Button type="submit" className="btn-submit btn-rounder btn-filled" onClick={handleVerificationSubmit}>Verify Email</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateAccountForm;
