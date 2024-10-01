import { useState, useEffect } from "react"

export default function ImageContainer ({ showImages }) {
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

  return (
    <div className='absolute top-0 columns-3 m-5'>
      {data.map((item, index) => (
        <div key={index} className={`transition-all ease-in-out duration-[2000ms] my-2 ${showImages ? `opacity-100` : `opacity-0 translate-y-[100rem]`}`}>
          <img src={item.url}></img>
        </div>
      ))}
    </div>
  )
}