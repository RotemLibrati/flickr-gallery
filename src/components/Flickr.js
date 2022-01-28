import React, { useState, useEffect } from 'react';
//import Axios from 'axios';
import XMLParser from "react-xml-parser";
import axios from 'axios';
import Spinner from './Spinner';
import Image from './Image';
import '../App.css';


const Flickr = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const APP_KEY = "aabca25d8cd75f676d3a74a72dcebf21";


  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=${APP_KEY}`,
    };
    const fetchImages = async () => {
      await axios(config)
        .then(function (response) {
          let xml = new XMLParser().parseFromString(response.data);
          setImages([xml.children[0].children][0]);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchImages();
  }, []);
  return (
    isLoading ? (<div className='App'>
      <Spinner />
    </div>) : (
      <div className='App'>
        <div className='images'>
          {images && images.map(image =>
            <Image key={image.attributes.id} image={image.attributes}/>
          )}
        </div>
      </div>
    )
  )
};

export default Flickr;
