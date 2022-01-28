import React from 'react';
import '../App.css';
import Spinner from './Spinner';

const Image = ({ image }) => {
    const imageClick = (temp) => {
        console.log(temp);
    }

    return <div className='image'>
        <h2>{image.title} </h2>
        <a href={image.url_s}>
            <img src={image.url_s} alt="" height={250} width={300}
            //onClick={() => imageClick(image.title)}

            />
        </a>

    </div>;
};

export default Image;
