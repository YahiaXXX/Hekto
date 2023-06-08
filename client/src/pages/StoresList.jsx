import React, { useContext,useState } from 'react'
import {AiFillStar}  from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {BsFillGridFill} from "react-icons/bs"
import {BsListUl} from "react-icons/bs"
import searchsvg from "../assets/search.svg"
import item from "../assets/item.png"
import AuthContext from '../contexts/AuthContext'
import axios from 'axios'
import {motion} from "framer-motion"


export const StoreItem=()=>{
  return <div className=' flex flex-col justify-center items-center w-[30%] h-[250px] ' >
    <img src={item} alt="" className=' w-[200px] h-[200px] rounded-full object-cotain' />
    <h1 className='text-[#111C85] text-[20px] font-semibold' >Boutique 1</h1>
  </div>

}


export const Rating=({number})=>(
  <div className=' flex flex-row justify-center items-center' >
     {Array.from({ length: number }, (_, index) => (
  <AiFillStar className=' text-[20px] text-yellow-300' />
))}
{Array.from({ length: 5-number }, (_, index) => (
  <AiOutlineStar className='text-[20px]' />
))}
  </div>

)



function StoresList() {
  const bs=useContext(AuthContext)
  let urlGet=`${bs}getAllShops`
  const [search,setSearch]=useState("")
  const [view,setView]=useState("grid")
  
  const getStores= async()=>{
    try{
      let res = axios.get(urlGet,{withCredentials:true})
      console.log(res)

    }
    catch(e){

    }
  }
 


  return (
    <div className=' w-full min-h-screen flex flex-col '  >
      <div className=' bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[200px]' >
    <div className='w-[50%] flex flex-col justify-center items-start ' >
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold" >Stores</h1>
        </div>
        
      </div>



      <div className='px-8 my-10 w-full flex flex-row' >
        <div className=' flex w-[20%] flex-col gap-4 ' >
            <div className=' w-full  flex flex-col gap-1 justify-start items-center' >
                <h1 className=' text-[22px] underline underline-offset-8 font-semibold w-full' >Rating boutique</h1>
                <div className=' mt-3 w-full flex flex-row gap-2 justify-start items-center' >
                    <input type="checkbox" />
                    <Rating number={5} />
                    <p>(235)</p>

                </div>
                <div className=' mt-3 w-full flex flex-row gap-2 justify-start items-center' >
                    <input type="checkbox" />
                    <Rating number={4} />
                    <p>(235)</p>

                </div>
                <div className=' mt-3 w-full flex flex-row gap-2 justify-start items-center' >
                    <input type="checkbox" />
                    <Rating number={3} />
                    <p>(235)</p>

                </div>
                <div className=' mt-3 w-full flex flex-row gap-2 justify-start items-center' >
                    <input type="checkbox" />
                    <Rating number={2} />
                    <p>(235)</p>

                </div>
                <div className=' mt-3 w-full flex flex-row gap-2 justify-start items-center' >
                    <input type="checkbox" />
                    <Rating number={1} />
                    <p>(235)</p>

                </div>
                

            </div>

            


        </div>
        <div className=' w-[80%]' >
          <div className=' w-full flex justify-between items-center' >
            <div className=' flex flex-col' >
              <h1 className=' text-[#151875] font-bold text-[22px] ' >Ecommerce boutique</h1>
              <p className=' text-gray-300' >About 9,620 results (0.62 seconds)</p>

            </div>
            <div className=' flex flex-row gap-2 ' >
              <div className=' gap-1 flex flex-row justify-center items-center' >
                <h1>Sort by:</h1>
                <select name="" id="" className=' border-[1px] border-[#000] ' >
                  <option value="">Best Match</option>
                  <option value="">Best Match</option>
                  <option value="">Best Match</option>

                </select>
              </div>
              <div className=' gap-4 flex flex-row justify-center items-center'  >
                <h1>View:</h1>
                <motion.p whileHover={{scale:1.1}} transition={{duration:0.5}} onClick={()=>setView("grid")} className={`${view==="grid" ? " text-green-500 "   :"" } text-[20px] hover:cursor-pointer `} ><BsFillGridFill/></motion.p> 
                <motion.p whileHover={{scale:1.1}} transition={{duration:0.5}} onClick={()=>setView("list")} className={`${view==="list" ? " text-green-500 "   :"" } text-[20px] hover:cursor-pointer `} ><BsListUl/></motion.p>


              </div>
             
              <div className="px-4 flex  justify-start items-center relative">
      <input className=' w-[60%] px-10 py-1 border-[#000] border-[1px] outline-none' type="search" placeholder='Search...'  />
      <img src={searchsvg} className="absolute ml-2 w-4 h-4" alt="search" />
      </div>



            </div>

          </div>
 
          <div className='mt-5 flex flex-row flex-wrap gap-4 h-full w-full' >
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>
            <StoreItem/>





          </div>

        </div>

      </div>
    

    </div>
  )
}

export default StoresList