// 'use client'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import ProductQuickview from './ProductQuickview' // Assume this is the path to your Quickview component

// const products = [
//   {
//     id: 1,
//     name: 'Dynamo X1',
//     href: '#',
//     price: '$7000',
//     availability: 'Mountain Racer',
//     imageSrc: '/images/dynamox1.jpg',
//     imageAlt:
//       'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
//   },
//   {
//     id: 2,
//     name: 'Electra X3',
//     href: '#',
//     price: '$1600',
//     availability: 'Mountain Enthusiast',
//     imageSrc: '/images/electrax3.jpg',
//     imageAlt:
//       'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
//   },
//   {
//     id: 3,
//     name: 'Volt X1',
//     href: '#',
//     price: '$1200',
//     availability: 'Commuter Beginner',
//     imageSrc: '/images/voltx1.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   {
//     id: 4,
//     name: 'Fuse X2',
//     href: '#',
//     price: '$2600',
//     availability: 'Commuter Beginner',
//     imageSrc: '/images/fusex2.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

// export default function ProductList() {
//   const [quickViewOpen, setQuickViewOpen] = useState(false)
//   const [selectedProduct, setSelectedProduct] = useState(null)

//   const handleProductClick = (product) => {
//     setSelectedProduct(product)
//     setQuickViewOpen(true)
//   }

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="product-card cursor-pointer"
//               onClick={() => handleProductClick(product)}
//             >
//               <a
//                 key={product.id}
//                 href={product.href}
//                 className="group overflow-hidden rounded-lg text-sm shadow-lg"
//               >
//                 <div className="aspect-w-1 aspect-h-1 flex w-full items-center justify-center overflow-hidden rounded-lg   group-hover:opacity-75">
//                   <div className="flex h-full w-full items-center justify-center">
//                     <Image
//                       src={product.imageSrc}
//                       alt={product.imageAlt}
//                       layout="responsive"
//                       width={150}
//                       height={100}
//                       objectFit="contain"
//                     />
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   {' '}
//                   {/* Padding added for spacing around the text content */}
//                   <h3 className="mt-4 font-medium text-gray-900">
//                     {product.name}
//                   </h3>
//                   <p className="italic text-gray-500">{product.availability}</p>
//                   <p className="mt-2 font-medium text-gray-900">
//                     {product.price}
//                   </p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
//   {
//     quickViewOpen && (
//       <ProductQuickview
//         product={selectedProduct}
//         open={quickViewOpen}
//         setOpen={setQuickViewOpen}
//       />
//     )
//   }
// }
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ProductQuickview = dynamic(() => import('./ProductQuickview'), {
  ssr: false,
})

const products = [
  {
    id: 1,
    name: 'Dynamo X1',
    href: '#',
    price: '$7000',
    availability: 'Mountain Racer',
    imageSrc: '/images/dynamox1.jpg',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Electra X3',
    href: '#',
    price: '$1600',
    availability: 'Mountain Enthusiast',
    imageSrc: '/images/electrax3.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Volt X1',
    href: '#',
    price: '$1200',
    availability: 'Commuter Beginner',
    imageSrc: '/images/voltx1.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 4,
    name: 'Fuse X2',
    href: '#',
    price: '$2600',
    availability: 'Commuter Beginner',
    imageSrc: '/images/fusex2.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function ProductList() {
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (e, product) => {
    e.preventDefault() // Prevent the link from navigating
    setSelectedProduct(product)
    setQuickViewOpen(true)
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="product-card cursor-pointer">
              <a
                href={product.href}
                onClick={(e) => handleProductClick(e, product)}
                className="group overflow-hidden rounded-lg text-sm shadow-lg"
              >
                <div className="aspect-w-1 aspect-h-1 flex w-full items-center justify-center overflow-hidden rounded-lg group-hover:opacity-75">
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      layout="responsive"
                      width={150}
                      height={100}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mt-4 font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="italic text-gray-500">{product.availability}</p>
                  <p className="mt-2 font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {quickViewOpen && (
        <ProductQuickview
          product={selectedProduct}
          open={quickViewOpen}
          setOpen={setQuickViewOpen}
        />
      )}
    </div>
  )
}
