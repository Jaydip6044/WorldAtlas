import React from 'react'
import countryFacts from '../api/countryData.json';

function About() {
  return (
    <div className='About bg-black text-white text-center p-7'>

     <h1 className='text-3xl font-bold pt-6'>   Here are Interesting Facts
        <br/>
       we're proud of 
     </h1> 

     <div className='cards grid px-[20%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 sm:px-16 '>

        {
            countryFacts.map((card,index)=>{
                const{id,countryName,capital,population,interestingFact}=card; 
                 return <div key={index} className='card w-60 h-45 mt-8 bg-gradient-to-r from-[#080509] via-[#1a171c] to-[#080509] hover:scale-107 duration-200 rounded-2xl'>
                 <div className='p-2 '>
                     <p>{countryName}</p>
                     <p><span className='text-slate-500'>Capital:</span> {capital}</p>
                     <p><span className='text-slate-500'>Population:</span> {population} </p><p>
                     <span className='text-slate-500'>Interesting Fact:</span>{interestingFact}</p>
                 </div>
             </div>
        
            })
        }
        
     
   </div>
    </div>
  )
}

export default About
