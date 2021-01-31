import React from 'react'

export default function Background({ src, alt }) {
    return (
        <div className='background'>
            <img className='season-background' src={src} alt={alt}></img>
        </div>
    )
}
