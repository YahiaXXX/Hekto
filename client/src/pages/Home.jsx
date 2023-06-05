import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import LatestProducts from '../components/LatestProducts'
import Services from '../components/Services'
import UniqueFeatures from '../components/UniqueFeatures'
import Discount from '../components/Discount'
import TopCategories from '../components/TopCategories'
import Banner from '../components/Banner'
import LatestBlog from '../components/LatestBlog'


function Home() {
  
  return (
    <>
     <div className='' >
    <Hero/>
    </div>
    <div className='' >
      <Featured/>

    </div>
    <div>
      <LatestProducts/>
    </div>
    <div>
      <Services/>
    </div>
    <div>
      <UniqueFeatures/>
    </div>
    <div>
      <Discount/>
    </div>
    <div>
      <TopCategories/>
   </div>
   <div>
    <Banner/>
   </div>
   <div>
    <LatestBlog/>
   </div>
    </>
   
  )
}

export default Home