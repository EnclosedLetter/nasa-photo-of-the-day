import React, {useState, useEffect} from "react";
import axios from "axios"

const PhotoCard = () => {
  const [apod, setApod] = useState();

  useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=HxKpxviDJLToIBzuk69LUkM6R3UhitfEZgXL7Xhd")
    .then(response => {
      // console.log(`PhotoCard: response: `response)
        setApod(response.data.url);
    })
    
  }, [])


    return (
      <div className="">
        <img className="" alt="" src={} />
        <h2>{props.breed}</h2>
      </div>
    );


    return <img src={apod} alt = " pic of athe day" />;
  };
  
  export default PhotoCard;
  