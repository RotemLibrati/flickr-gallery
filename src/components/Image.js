import React from 'react';
import '../App.css';


const Image = ({ image }) => {

    return <div className='image'>
        <h2>{image.title} </h2>
        <a href={image.url_s+"?h="+image.height_s+"&w="+image.width_s} >
            <img src={image.url_s} alt="" height={250} width={300}

            />
        </a>

    </div>;
};

export default Image;
