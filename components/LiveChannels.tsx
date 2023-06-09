import React from 'react'
import LiveChannelItem from './LiveChannelItem'
import Live1 from '../public/assets/live/live1.jpeg';
import Live2 from '../public/assets/live/live2.jpeg';
import Live3 from '../public/assets/live/live3.jpeg';
import Live4 from '../public/assets/live/live4.jpeg';
import Live5 from '../public/assets/live/live5.jpeg';
import Live6 from '../public/assets/live/live6.jpeg';
import Live7 from '../public/assets/live/live7.jpeg';
import Live8 from '../public/assets/live/live8.jpeg';
import Live9 from '../public/assets/live/live9.jpeg';
import Live10 from '../public/assets/live/live10.jpeg';


export default function LiveChannels() {
  return (
    <div id="live" className='p-2 md:p-8'>
        <h2 className='text-2xl font-bold px-2'><span className='text-[#9147ff]'>Live Channels</span> we think you'll like.</h2>
        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
            <LiveChannelItem img={Live1}/>
        </div>
    </div>
  )
}
