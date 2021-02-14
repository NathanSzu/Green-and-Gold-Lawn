import React from 'react'

export default function Jumbotron() {
    return (
        <div className="jumbotron pt-5">
            <h1 className="display-4 text-center header-font">
                <span>
                <span className='gold'>Gold</span> <span className='n'>n</span> <span className='green'>Green</span>
                </span>
            </h1>
            <h1 className="display-4 text-center mb-4 header-font">
                <span className='brown'>Landscaping</span>
            </h1>
            <h2></h2>
            <p className="description">With more than 20 years of lawncare and snow removal experience, Gold n Green Landscaping is ready to tackle any project on your list no matter what season. Call today and get a competetive quote for your home or business.</p>

            <hr className="my-4"></hr>

            <div className='text-center'>
                <a className="btn btn-dark btn-lg" href='tel:123-456-7890' role="button">Call Now</a>
            </div>

            <div className='j-background'></div>
        </div>
    )
}
