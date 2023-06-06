import React from 'react'
import { ResponsiveAreaBump } from '@nivo/bump'
import { ResponsivePie } from '@nivo/pie'
import {IoPersonOutline} from "react-icons/io5"
import mobile from "../assets/mobile.png"
import { ResponsiveRadar } from '@nivo/radar'

const dataRadar = [
  {
    "taste": "fruity",
    "chardonay": 47,
    "carmenere": 92,
    "syrah": 55
  },
  {
    "taste": "bitter",
    "chardonay": 116,
    "carmenere": 53,
    "syrah": 43
  },
  {
    "taste": "heavy",
    "chardonay": 72,
    "carmenere": 109,
    "syrah": 35
  },
  {
    "taste": "strong",
    "chardonay": 111,
    "carmenere": 27,
    "syrah": 90
  },
  {
    "taste": "sunny",
    "chardonay": 110,
    "carmenere": 118,
    "syrah": 44
  }
]

const MyResponsiveRadar = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
      data={data}
      keys={[ 'chardonay', 'carmenere', 'syrah' ]}
      indexBy="taste"
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

const dataPie=[
  {
    "id": "css",
    "label": "css",
    "value": 461,
    "color": "hsl(285, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 484,
    "color": "hsl(14, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 217,
    "color": "hsl(12, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 49,
    "color": "hsl(130, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 475,
    "color": "hsl(168, 70%, 50%)"
  }
]
const data = [
  {
    "id": "JavaScript",
    "data": [
      {
        "x": "jan",
        "y": 11
      },
      {
        "x": "feb",
        "y": 29
      },
      {
        "x": 2002,
        "y": 24
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 30
      },
      {
        "x": 2005,
        "y": 28
      }
    ]
  },
  {
    "id": "ReasonML",
    "data": [
      {
        "x": 2000,
        "y": 22
      },
      {
        "x": 2001,
        "y": 18
      },
      {
        "x": 2002,
        "y": 13
      },
      {
        "x": 2003,
        "y": 10
      },
      {
        "x": 2004,
        "y": 18
      },
      {
        "x": 2005,
        "y": 13
      }
    ]
  },
  {
    "id": "TypeScript",
    "data": [
      {
        "x": 2000,
        "y": 22
      },
      {
        "x": 2001,
        "y": 24
      },
      {
        "x": 2002,
        "y": 27
      },
      {
        "x": 2003,
        "y": 29
      },
      {
        "x": 2004,
        "y": 12
      },
      {
        "x": 2005,
        "y": 11
      }
    ]
  },
  {
    "id": "Elm",
    "data": [
      {
        "x": 2000,
        "y": 27
      },
      {
        "x": 2001,
        "y": 10
      },
      {
        "x": 2002,
        "y": 11
      },
      {
        "x": 2003,
        "y": 12
      },
      {
        "x": 2004,
        "y": 12
      },
      {
        "x": 2005,
        "y": 16
      }
    ]
  },
  {
    "id": "CoffeeScript",
    "data": [
      {
        "x": 2000,
        "y": 24
      },
      {
        "x": 2001,
        "y": 26
      },
      {
        "x": 2002,
        "y": 24
      },
      {
        "x": 2003,
        "y": 14
      },
      {
        "x": 2004,
        "y": 25
      },
      {
        "x": 2005,
        "y": 13
      }
    ]
  }
]

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
  return (
    <div className=' px-5 py-5 w-full gap-6 justify-center items-center flex flex-col' >
      <div className='w-full sm:h-[60vh] justify-center items-center flex sm:flex-row flex-col gap-6' >
        <div className=' rounded-2xl bg-white drop-shadow-xl px-4 flex h-full flex-col sm:w-[65%] w-full ' >
          <div className=' px-10 flex flex-col justify-start items-start w-full' >
            <h1 className=' text-[25px] font-bold text-gray-400' >Total Revenue:</h1>
            <p className=' text-[30px] font-semibold text-black' >9871,22$</p>

          </div>
        <ResponsiveAreaBump
      data={data}
      margin={{ top: 40, right: 90, bottom: 40, left: 90 }}
      spacing={8}
      colors={{ scheme: 'nivo' }}
      blendMode="multiply"
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 2,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
          }
      ]}
      fill={[
          {
              match: {
                  id: 'CoffeeScript'
              },
              id: 'dots'
          },
          {
              match: {
                  id: 'TypeScript'
              },
              id: 'lines'
          }
      ]}
      startLabel="id"
      endLabel="id"
      axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36
      }}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32
      }}
  />
        




        </div>
        <div className='flex-col rounded-2xl bg-white drop-shadow-xl h-full flex sm:w-[30%] w-full'  >
        <div className=' px-10 flex flex-col justify-start items-start w-full' >
            <h1 className=' text-[25px] font-bold text-gray-400' >Customers:</h1>
            <p className=' text-[18px] font-semibold text-gray-500' >Information about customers</p>

          </div>
          <div className='h-[50%] w-full' >
            <MyResponsivePie data={dataPie} />

          </div>
          <div className='h-[50%] w-full' >
            <MyResponsivePie data={dataPie} />

          </div>

        </div>

      </div>

      <div className=' w-full sm:h-[40vh] justify-center items-center flex sm:flex-row flex-col gap-6' >
        <div className='bg-white rounded-2xl drop-shadow-xl px-4 py-8 flex h-full flex-col sm:w-[65%] w-full ' >
          <div className=' w-full flex flex-row gap-4 justify-around items-center ' >
          <div className=' bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row w-[15%] ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total visits</p>
                <p className=' text-gray-500' >10.8m</p>
              </div>
           </div>
           <div className=' bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row w-[15%] ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total visits</p>
                <p className=' text-gray-500' >10.8m</p>
              </div>
           </div>
           <div className=' bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row w-[15%] ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total visits</p>
                <p className=' text-gray-500' >10.8m</p>
              </div>
           </div>
           <div className=' bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row w-[15%] ' >
             <IoPersonOutline className=' text-[30px] text-yellow-500' />
              <div className=' flex flex-col'  >
                <p className=' text-gray-500' >Total visits</p>
                <p className=' text-gray-500' >10.8m</p>
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
