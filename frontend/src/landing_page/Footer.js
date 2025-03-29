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
                </div>
                <div className='col'>
                    <p>Support</p>
                </div>
                <div className='col'>
                    <p>Account</p>
                </div>

            </div>
        </div>

    );
}

export default Footer;