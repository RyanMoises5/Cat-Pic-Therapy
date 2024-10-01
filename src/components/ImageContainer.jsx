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

  // let setLeft = [], setMid = [], setRight = [];

  // data.map((item, index) => {
  //   if (index % 3 === 0) setLeft.push(item)
  //   if (index % 3 === 1) setMid.push(item)
  //   if (index % 3 === 2) setRight.push(item)
  // })

  // console.log('left', setLeft)
  // console.log('mid', setMid)

  // const Column1 = function() {
  //   return (
  //     <div className="colLeft">
  //       {setLeft.map((item, index) => {
  //         <p className="opacity-100">TEST</p>
  //       })}
  //     </div>
  //   )
  // }

  return (
    <div className='absolute top-0 gap-2 m-5'>
      {data.map((item, index) => (
        // <div key={index} className={`transition-all ease-in-out duration-[2000ms] my-2 ${showImages ? `opacity-100` : `opacity-0 translate-y-[100rem]`}`} style={{ "--delay": index * 0.25 + "s" }}>
        <div key={index} className={`${showImages ? `animate-slideIn` : null} opacity-0 my-3`} style={{ "--delay": index * 0.05 + "s" }}>
          <img src={item.url}></img>
        </div>
      ))}
      {/* <Column1 /> */}
    </div>
  )

  // return (
  //   <div className='absolute top-0 columns-3 gap-0 m-5'>
  //     {data.map((item, index) => (
  //       <div key={index} className={`${showImages ? 'animate-slideIn opacity-100' : 'opacity-0'} my-3`} style={{'--delay': index * 0.25 + "s", 'transition': 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out', 'transitionDelay': `${index * 0.25}s`}}>
  //         <img src={item.url} alt={`item-${index}`} />
  //       </div>
  //     ))}
  //   </div>
  // )
}