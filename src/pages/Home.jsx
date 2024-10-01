import { TypeAnimation } from 'react-type-animation';
import ImageContainer from "../components/ImageContainer"
import { useState } from 'react';

function Home() {
  const [showImages, statusShowImages] = useState(false);

  return (
    <>
    <div className="h-full flex items-center justify-center relative">
      <TypeAnimation
      sequence={[
        'hey.',
        500,
        '',
        500,
        () => {
          statusShowImages(true)
        },
      ]}
      wrapper="span"
      cursor={true}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
    </div>
    <ImageContainer showImages={showImages}/>
    </>
  )
}

export default Home