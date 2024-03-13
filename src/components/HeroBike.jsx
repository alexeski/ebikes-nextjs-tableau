import React from 'react'
import Image from 'next/image'

const HeroBike = () => {
  return (
    <div>
      {/* Video Section */}
      <div className="relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 min-h-full w-auto min-w-full max-w-none"
          src="/videos/ebikes.mp4"
        >
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex h-screen flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">DYNAMO X2</h1>
          <p className="text-2xl font-normal md:text-3xl">
            CONQUER THE IMPOSSIBLE
          </p>
          <button className="mt-8 rounded-md bg-white px-6 py-3 font-semibold text-black hover:bg-gray-100">
            EXPLORE MORE
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/CyclingGrass.jpg"
          alt="Cycling Grass"
          className="w-full object-cover" // This will ensure the image covers the full width. Adjust object-fit as needed.
          width={1000}
          height={400}
          //   style={{ height: '100vh' }} // This makes the image take the full viewport height
        />

        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">ELECTRA SERIES</h1>
          <p className="text-2xl font-normal md:text-3xl">RIDE WITH POWER</p>
          <button className="mt-8 rounded-md bg-white px-6 py-3 font-semibold text-black hover:bg-gray-100">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroBike
