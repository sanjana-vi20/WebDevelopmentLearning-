import React from 'react'

function Home() {
  return (
    <>
    <div  className='flex flex-col gap-5' id="body">
      <img src="https://media6.ppl-media.com/mediafiles/blogs/shutterstock_1805797540_a5cdc3576e.jpg" alt="image1" className='relative' />
       <div className='absolute  p-9 mt-27 w-[49rem]'>
        <h1 className=' font-bold text-5xl text-center p-3'>Welcome to my MakeupStore</h1>
     
      <p className='p-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
        reiciendis dicta totam, pariatur ullam fugit quam eveniet expedita illo
        omnis temporibus quaerat vel, perferendis modi sunt. Eum veniam dolore
      </p>

      <div className='m-auto ml-14'><button className='px-5 border py-3 rounded-2xl bg-black text-amber-50 f'>Shop Now</button></div>
       </div>
      </div>
      </>
    
  )
}

export default Home