import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login ,register } from '../Features/auth/authSlice';
import { useNavigate } from 'react-router-dom';


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
    const dispatch = useDispatch();

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
        if (!validateForm()) return;

        try {
            await dispatch(register(formData));
            setIsVerificationSent(true);
        } catch (error) {
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
            navigate("/")
            dispatch(login({ email: formData.email, password: formData.password }));
        } catch (error) {
            console.error('Error verifying email:', error);
            setVerificationError('Invalid verification code');
        }
    };

    return (
        <div className="container mt-5">
            <div className="breadcrumb mb-4">
                <a href="https://www.fos-lighting.eu" className="breadcrumb-item">Home</a>
                <span className="breadcrumb-item active">Create an Account</span>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <h1 className="mb-4 text-center">Create an Account</h1>
                    {isVerificationSent ? (
                        <form onSubmit={handleVerificationSubmit}>
                            <div className="form-group">
                                <label htmlFor="verificationCode">Verification Code</label>
                                <input
                                    type="text"
                                    id="verificationCode"
                                    name="verificationCode"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    className="form-control"
                                />
                                {verificationError && <div className="text-danger">{verificationError}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Verify Email</button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.firstname && <div className="text-danger">{errors.firstname}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.lastname && <div className="text-danger">{errors.lastname}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="telephone">Telephone</label>
                                <input
                                    type="text"
                                    id="telephone"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.telephone && <div className="text-danger">{errors.telephone}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Website</label>
                                <input
                                    type="text"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.company && <div className="text-danger">{errors.company}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="vat">VAT</label>
                                <input
                                    type="text"
                                    id="vat"
                                    name="vat"
                                    value={formData.vat}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.vat && <div className="text-danger">{errors.vat}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="street_address">Street Address</label>
                                <input
                                    type="text"
                                    id="street_address"
                                    name="street_address"
                                    value={formData.street_address}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                                {errors.street_address && <div className="text-danger">{errors.street_address}</div>}
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="postcode">Postcode</label>
                                    <input
                                        type="text"
                                        id="postcode"
                                        name="postcode"
                                        value={formData.postcode}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.postcode && <div className="text-danger">{errors.postcode}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.city && <div className="text-danger">{errors.city}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="">Select Country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                                {errors.country && <div className="text-danger">{errors.country}</div>}
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="confirmation">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmation"
                                        name="confirmation"
                                        value={formData.confirmation}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                    {errors.confirmation && <div className="text-danger">{errors.confirmation}</div>}
                                </div>
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    id="accept_terms"
                                    name="accept_terms"
                                    checked={formData.accept_terms}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="accept_terms" className="form-check-label">
                                    I have read and accept the terms of cooperation
                                </label>
                                {errors.accept_terms && <div className="text-danger">{errors.accept_terms}</div>}
                            </div>
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    id="accept_gdpr"
                                    name="accept_gdpr"
                                    checked={formData.accept_gdpr}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="accept_gdpr" className="form-check-label">
                                    I agree to the terms of personal data protection
                                </label>
                                {errors.accept_gdpr && <div className="text-danger">{errors.accept_gdpr}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Create Account</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateAccountForm ;
