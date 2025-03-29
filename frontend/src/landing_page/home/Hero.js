import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5' style={{align:"center"}}>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' style={{width:"60%",display:"block",
  margin:"auto"}} className='mb-5'/>
                <h1 className='mt-5 fs-1'>
                    Invest in Everything.
                </h1>
                <p className='fs-5'>
                    Online Platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button className='p-1 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
        
     );
}

export default Hero;