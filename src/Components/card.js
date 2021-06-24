import React, {useState, useEffect} from 'react';

const Card = (props) => {

    const {jobs} = props;

    return (
        <div className="card card-jobs">
            <div className="title">
                <p>{jobs.title}</p>
            </div>
            <div className="card-body">
                <p>{jobs.descriptionPreview}</p>
            </div>
        </div>
    );
}

export default Card;