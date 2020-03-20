import React, {useState, useEffect} from "react";
import axios from "axios";
import Date from "./Date";

const PhotoCard = () => {
  const [apod, setApod] = useState({});

  useEffect(() => {

    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=HxKpxviDJLToIBzuk69LUkM6R3UhitfEZgXL7Xhd")
    .then(response => {
      console.log(response.data)
        setApod(response.data);
    })
    .catch(error => console.log("Photo not found", error));
  }, []);
  console.log(apod)
    return <img src={apod.url} alt = "pic of the day" />;

    // <Date 
    //   title={apod.title}
    //   date={apod.date}
    //   explain={apod.explanation}
    //   img={apod.url}
    //   copyright={apod.copyright}
    // />

  };
  
  export default PhotoCard;


  