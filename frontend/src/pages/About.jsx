import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>In literature or poetry, duplicate sentences can be used for stylistic effect. This could be for emphasis, to create a sense of rhythm, or to highlight a recurring theme.The act of sharing story.</p>
              <p>a narrative account of events, either real or imagined, told for various purposes like entertainment, education, or cultural preservation. Stories can be shared orally, written down, or presented through other media. They can be short or long, fictional or non-fictional. </p>
              <b className='text-gray-800'>Our Mission</b>
              <p>It can typically be read in a single sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. </p>
           </div>
      </div> 
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>The short story is a crafted form in its own right. Short stories make use of plot, resonance and other dynamic components as in a novel, but typically to a lesser degree.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>A story should be a story; a record of things happening full of incidents, swift movements, unexpected development, leading through suspense to a climax and a satisfying denouement.</p>
         </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
