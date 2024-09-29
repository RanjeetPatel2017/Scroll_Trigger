import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Cards() {
    const images=[
        '/images/1.png',
        '/images/2.png',
        '/images/3.png',
        '/images/4.png',
        '/images/5.png',
        '/images/6.png'
    ]

    useEffect(()=>{
        gsap.utils.toArray('.card').forEach(card=>{
            gsap.to(card,{
                scale: 0.8,
                opacity: 0,
                scrollTrigger:{
                    trigger: card,
                    start: 'top 15%',
                    end: 'bottom 15%',
                    markers:true,
                    scrub:true
                   
                }
            })
        })
    })
  return (
    <main className=' w-full text-white flex flex-col gap-5 items-center py-[15vh] '>
  
{
    images.map((image,index) =>{
        return(

            <div id={index} className="card text-center sticky top-[15vh] flex items-center flex-col w-[27vw] gap-5 px-[30px] py-[15vh] rounded-lg bg-[#383027] ">
            <img className='w-[150px]' src={image} alt="" />
            <h1 className='text-4xl'>The <br /> <span className='font-bold'>Algorithm</span></h1>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, expedita?</p>
        </div>

        )
    })
}

    </main>
  )
}

export default Cards