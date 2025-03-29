import React from 'react';

function Footer() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/logo.svg' style={{width:"50%"}}></img>

                </div>
                <div className='col'>
                    <p>Company</p>
                    <a href=''>About</a><br/>
                    <a href=''>Pricing</a><br/>
                    <a href=''>Referral programme</a><br/>
                    <a href=''>Products</a><br/>
                    <a href=''>Careers</a><br/>
                    <a href=''>Zerodha.tech</a><br/>
                    <a href=''>Open source</a><br/>
                    <a href=''>Press & media</a><br/>
                    <a href=''>Zerodha Cares (CSR)</a><br/>
                </div>
                <div className='col'>
                    <p>Support</p>
                    <a href=''>Contact us</a><br/>
                    <a href=''>Support portal</a><br/>
                    <a href=''>Z-Connect blog</a><br/>
                    <a href=''>List of charges</a><br/>
                    <a href=''>Downloads & resources</a><br/>
                    <a href=''>Videos</a><br/>
                    <a href=''>Market overview</a><br/>
                    <a href=''>How to file a complaint?</a><br/>
                    <a href=''>Status of your complaints</a><br/>

                </div>
                <div className='col'>
                    <p>Account</p>
                    <a href=''>Open an account</a><br/>
                    <a href=''>Fund transfer</a><br/>               
                </div>

            </div>
        </div>

    );
}

export default Footer;