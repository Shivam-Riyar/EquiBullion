import React from 'react';
function Education() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
                <img src='media/images/education.svg' style={{width:"70%"}}></img>
            </div>
            <div className='col-6'>
            <h1 className='mb-3 fs-2'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
            <a href='' style={{textDecoration:"none"}}>Versity</a>
            <p className='mt-5'>TradingQ&A, the most active trading and invesment community in India for all your</p>
            <a href='' style={{textDecoration:"none"}}>TradingQ&A</a>
            </div>
          </div>
        </div>
      );
}

export default Education;