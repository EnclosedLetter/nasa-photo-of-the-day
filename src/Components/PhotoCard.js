import React, {useState, useEffect} from "react";
import axios from "axios";

const PhotoCard = () => {
  const [apod, setApod] = useState();

  useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=HxKpxviDJLToIBzuk69LUkM6R3UhitfEZgXL7Xhd")
    .then(response => {
      console.log(response)
        setApod(response.data.url);
    })
    .catch(error => console.log("Photo not found", error));
  }, []);

    return <img src={apod} alt = "pic of the day" />;
  };
  
  export default PhotoCard;
  