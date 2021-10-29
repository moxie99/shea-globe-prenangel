import React from 'react'
import loading from '../sheaglobalImages/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>Section Data loading...</h4>
            <img src={loading} alt="loading" />
        </div>
    )
}
