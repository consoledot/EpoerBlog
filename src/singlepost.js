import React from 'react'

import './singlepost.css'

const SinglePost = props => {
    return (

        <div className="card">
            <figure>
                <img width="100%" src={props.post.featured_image_thumbnail} alt="" />
            </figure>
            <h2>{props.post.title.rendered}</h2>
            <p>{props.post.excerpt.rendered}</p>
        </div>

    )
}
export default SinglePost