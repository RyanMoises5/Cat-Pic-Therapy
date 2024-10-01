import { useState, useEffect } from "react"

export default function ImageContainer () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_CAT_API

    fetch(`https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=${apiKey}`)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          setData(data);
        });
      } else {
        console.log("Error: " + response.statusText);
      }
    });
  }, [])

  console.log(data)

  return (
    <div className='image-container top-0 columns-3 m-5'>
      {data.map((item, index) => (
        <div key={index} className="my-2">
          <img src={item.url}></img>
        </div>
      ))}
    </div>
  )
}