import React from 'react'

export default function Jumbotron() {
    return (
        <div class="jumbotron pt-5">
            <h1 class="display-4 text-center header-font">
                <span>
                    <span className='green'>Green</span> & <span className='gold'>Gold</span>
                </span>
            </h1>
            <h1 class="display-4 text-center mb-4 header-font">
                <span className='brown'>Landscaping</span>
            </h1>
            <h2></h2>
            <p class="description">With more than 20 years of lawncare and snow removal experience, Green & Gold Landscaping is ready to tackle any project on your list no matter what season. Call today and get a competetive quote for your home or business.</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
            <div className='j-background'></div>
        </div>
    )
}
