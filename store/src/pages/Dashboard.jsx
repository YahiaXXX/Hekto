import React from 'react'
// import { ResponsiveAreaBump } from '@nivo/bump'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'
import {IoPersonOutline} from "react-icons/io5"
import mobile from "../assets/mobile.png"
import { ResponsiveRadar } from '@nivo/radar'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const dataRadar = [
 {
    "key":"age",
    "-18": 56,
    "18-30": 47,
    "30-40": 92,
    "40-50": 55,
    "50-60":56
  },]
  

const MyResponsiveRadar = ({data}) => (
  <ResponsiveRadar
      data={data}
      keys={[ "-18",
      "18-30",
      "30-40",
      "40-50",
      "50-60"]}
      indexBy="key"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 50, bottom: 40, left: 50 }}
      borderColor={{ from: 'color' }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      colors={{ scheme: 'nivo' }}
      blendMode="multiply"
      motionConfig="wobbly"
      
  />
)



const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.2
              ]
          ]
      }}
     
      
      fill={[
          {
              match: {
                  id: 'ruby'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'c'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'go'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'python'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'scala'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'lisp'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'elixir'
              },
              id: 'lines'
          },
          {
              match: {
                  id: 'javascript'
              },
              id: 'lines'
          }
      ]}
  />
)
export default function Dashboard() {
  let bs=process.env.REACT_APP_QUERY_BASE_URL
  let urlGet=`${bs}statistics/getMyStatistics?topProductNumber=10`
  let urlGetAge=`${bs}statistics/getMyAge`
  const [totalRev,setTotalRev]=useState(0)
  const [ages,setAges]=useState({
    between18_30: 0,
between30_40: 0,
between40_50: 0,
between50_60: 0,
under18: 0
  })
  const [dataPie,setDataPie]=useState({
    men:0,
    women:0
  })
  const [dataLine,setDataLine]=useState([])
  const [stats,setStats]=useState({
    totalSelling: 0,
    monthlyTotalPrice: {},
    totalMaleSubs: 0,
    totalFemaleSubs: 0,
    bestSelling: []
})

const getAges=async ()=>{
  try{
    let res= await axios.get(urlGetAge,{withCredentials:true})
    console.log(res)
    setAges(res.data.body.body)

  }
  catch(e){

  }
}

const getStats= async()=>{
  try{
     let res = await axios.get(urlGet,{withCredentials:true})
     setDataPie({
      men:res?.data?.totalMaleSubs,
      women:res?.data?.totalFemaleSubs})
      setTotalRev(res?.data?.totalSelling)
     let keyTable=Object.keys(res?.data?.monthlyTotalPrice)
     let valueTable=Object.values(res?.data?.monthlyTotalPrice)
     let tmp = keyTable.map((item,index)=>(
      {
        "x": keyTable[index],
        "y": valueTable[index]
      }
     ))
     setDataLine([
      { "x": "January 2023", "y": 150 },
      { "x": "February 2023", "y": 250 },
      { "x": "March 2023", "y": 200 },
      { "x": "April 2023", "y": 350 },
      { "x": "May 2023", "y": 400 },
      { "x": "June 2023", "y": 300 },
      { "x": "July 2023", "y": 450 },
      { "x": "August 2023", "y": 500 },
      { "x": "September 2023", "y": 550 },
      { "x": "October 2023", "y": 400 },
      { "x": "November 2023", "y": 300 },
      { "x": "December 2023", "y": 250 }
    ])
  }
  catch(e){

  }
}
useEffect(()=>{
 getStats()
 getAges()
},[])
  return (
    <div className=' px-5 py-5 w-full gap-6 justify-center items-center flex flex-col' >
      <div className='w-full sm:h-[60vh] justify-center items-center flex sm:flex-row flex-col gap-6' >
        <div className=' rounded-2xl bg-white drop-shadow-xl px-4 flex h-full flex-col sm:w-[65%] w-full ' >
          <div className=' px-10 flex flex-col justify-start items-start w-full' >
            <h1 className=' text-[25px] font-bold text-gray-400' >Total Revenue:</h1>
            <p className=' text-[30px] font-semibold text-black' >{`${totalRev}$`}</p>
          </div>
          <ResponsiveLine
        data={[
          {
            "id": "Totale seling",
            "color": "hsl(69, 70%, 50%)",
            "data": dataLine
          },
         
          
          ]}
        margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        // axisLeft={{
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: 'count',
        //     legendOffset: -40,
        //     legendPosition: 'middle'
        // }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        




        </div>
        <div className='flex-col rounded-2xl bg-white drop-shadow-xl h-full flex sm:w-[30%] w-full'  >
        <div className=' px-10 flex flex-col justify-start items-start w-full' >
            <h1 className=' text-[25px] font-bold text-gray-400' >Customers:</h1>
            <p className=' text-[18px] font-semibold text-gray-500' >Information about customers</p>

          </div>
          <div className='h-full w-full' >
            <MyResponsivePie data={[
    {
      "id": "m",
      "label": "Men",
      "value": dataPie.men,
      "color": "hsl(285, 70%, 50%)"
    },
    {
      "id": "f",
      "label": "Women",
      "value": dataPie.women,
      "color": "hsl(14, 70%, 50%)"
    },
    
  ]} />

          </div>
          

        </div>

      </div>

      <div className=' w-full sm:h-[40vh] justify-center items-center flex sm:flex-row flex-col gap-6' >
        <div className='bg-white rounded-2xl drop-shadow-xl px-4 py-8 flex h-full flex-col sm:w-[65%] w-full ' >
          <div className=' w-full flex flex-row gap-4 justify-around items-center ' >
          <div className=' px-4 bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total orders</p>
                <p className=' text-gray-500' >100</p>
              </div>
           </div>
           <div className=' px-4 bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total customers</p>
                <p className=' text-gray-500' >100</p>
              </div>
           </div>
           
          </div>

          <div className=' mt-4 w-full flex flex-col gap-2 ' >
            <div className=' w-full flex justify-start items-center' >
              <h1 className=' text-[25px] text-gray-400 font-semibold' >Top products:</h1>
            </div>
            <div className=' mt-4 bg-[#EEEEEE] rounded-lg px-4 py-3 gap-2 flex flex-row w-full' >
              <div className=' w-[40%] flex flex-row' >
                <img src={mobile} alt="" />
                <div className=' flex flex-col' >
                  <p className=' text-gray-300 ' >Galaxy S20 Ultra</p>
                  <p>Pink - 50 order</p>

                </div>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>

            </div>

            <div className=' bg-gray-200 rounded-lg px-4 py-3 gap-2 flex flex-row w-full' >
              <div className=' w-[40%] flex flex-row' >
                <img src={mobile} alt="" />
                <div className=' flex flex-col' >
                  <p className=' text-gray-300 ' >Galaxy S20 Ultra</p>
                  <p>Pink - 50 order</p>

                </div>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>
              <div className=' w-[15%] flex flex-col justify-center items-center' >
                <p>Inventory</p>
                <p>700</p>

              </div>

            </div>


          </div>
          

        </div>
        <div className=' rounded-2xl bg-white drop-shadow-xl px-4 py-4 flex h-full flex-col sm:w-[30%] w-full'  >
          <div className=' flex flex-col ' >
            <h1 className='text-[#535353] font-bold text-[25px] ' >Stats Overview:</h1>
            <p className=' text-[#A7A7A7]'  >Information about store visits</p>

          </div>
          <div className='w-full h-[90%]' >

          <MyResponsiveRadar data={dataRadar} />
          </div>
          
          <div>

          </div>

        </div>

      </div>



    </div>
  )
}
