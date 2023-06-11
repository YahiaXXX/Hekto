import React from "react";
// import { ResponsiveAreaBump } from '@nivo/bump'
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { IoPersonOutline } from "react-icons/io5";
import mobile from "../assets/mobile.png";
import { ResponsiveRadar } from "@nivo/radar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ResponsiveBullet } from "@nivo/bullet";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import {BsBoxSeam} from "react-icons/bs"

const MyResponsiveBullet = ({ data /* see data tab */ }) => (
  <ResponsiveBullet
    data={data}
    margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    spacing={40}
    titleAlign="start"
    titleOffsetX={-50}
    measureBorderColor="rgba(153, 121, 80,0.5)"
    measureBorderWidth={6}
    measureSize={3}
    rangeColors="seq:greens"
    measureColors="greens"
    markerColors="seq:greens"
    markerSize={5}
  />
);

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    fill={[
      {
        match: {
          id: "Men",
        },
        id: "dots",
      },
      {
        match: {
          id: "Women",
        },
        id: "dots",
      },
    ]}
  />
);

export const Prod=(props)=>{
  return  <div className=" mt-4 bg-[#EEEEEE] rounded-lg px-4 py-3 gap-2 flex flex-row justify-between w-full">
  <div className="gap-6 flex flex-row">
    <img src={ props?.productIamgeUrl ?   'data:image/svg+xml;base64,' + props?.productIamgeUrl : mobile } alt="" />
    <div className=" flex flex-col">
      <p className=" text-[20px] text-gray-600 ">{props?.productName}</p>
      <p className=" font-semibold text-black" >{`${props?.ordersCount} order`}</p>
    </div>
  </div>
  
  <div className=" flex flex-col justify-center items-center">
    <p className=" text-black font-semibold" >Price</p>
    <p>{`${props.productPrice}$`}</p>
  </div>
  <div className=" flex flex-col justify-center items-center">
    <p className=" text-black font-semibold" >This month</p>
    <p>{`${props?.ordersCount} order`}</p>
  </div>
</div>
}



export default function Dashboard() {
  let bs = process.env.REACT_APP_QUERY_BASE_URL;
  const { baseUrl } = useContext(AuthContext);
  let urlGetCustomers = `${baseUrl}getMySubscribers`;
  let urlGetOrders=`${bs}orders/getAllOrdersByShopId`
  let urlGet = `${bs}statistics/getMyStatistics?topProductNumber=10`;
  let urlGetAge = `${bs}statistics/getMyAge`;
  const [totalRev, setTotalRev] = useState(0);
  const [ordersCount,setOrdersCount]=useState(0)
  const [customersCount,setCustomersCount]=useState(0)
  const [bestSelling,setBestSelling]=useState([])
  const [ages, setAges] = useState({
    between18_30: 0,
    between30_40: 0,
    between40_50: 0,
    between50_60: 0,
    under18: 0,
    all: 0,
  });

  const getSubs = async () => {
    try {
      let res = await axios.get(urlGetCustomers, { withCredentials: true });
      console.log(res);
      setCustomersCount(res?.data?.length);
    } catch (e) {}
  };
  const getOrders= async ()=>{
    try{
      let res = await axios.get(urlGetOrders,{withCredentials:true})
      console.log(res)
      setOrdersCount(res?.data?.length)
    }
    catch(e){
      console.log(e)
    }

  }

  let data = [
    {
      id: " -18",
      ranges: [0, ages.all],
      measures: [ages.all],
      markers: [ages.under18],
    },
    {
      id: "18-30",
      ranges: [0, ages.all],
      measures: [ages.all],
      markers: [ages.between18_30],
    },
    {
      id: "30-40",
      ranges: [0, ages.all],
      measures: [ages.all],
      markers: [ages.between30_40],
    },
    {
      id: "40-50",
      ranges: [0, ages.all],
      measures: [ages.all],
      markers: [ages.between40_50],
    },
    {
      id: "50-60",
      ranges: [0, ages.all],
      measures: [ages.all],
      markers: [ages.between50_60],
    },
  ];
  const [dataPie, setDataPie] = useState({
    men: 0,
    women: 0,
  });
  const [dataLine, setDataLine] = useState([]);
  const [stats, setStats] = useState({
    totalSelling: 0,
    monthlyTotalPrice: {},
    totalMaleSubs: 0,
    totalFemaleSubs: 0,
    bestSelling: [],
  });

  const getAges = async () => {
    try {
      let res = await axios.get(urlGetAge, { withCredentials: true });
      let obj = res.data.body.body;
      let total = 0;
      Object.values(obj).map((item) => (total = total += item));
      setAges({ ...obj, all: total });
    } catch (e) {}
  };

  const sortByYearAndMonth = (a, b) => {
    const [monthA, yearA] = a[0].split(' ');
    const [monthB, yearB] = b[0].split(' ');
  
    if (yearA !== yearB) {
      return yearA - yearB;
    } else {
      const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      return months.indexOf(monthA) - months.indexOf(monthB);
    }
  };
  const getStats = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      console.log(res)
      setBestSelling(res?.data?.bestSelling || [] )
      setDataPie({
        men: res?.data?.totalMaleSubs,
        women: res?.data?.totalFemaleSubs,
      });
      setTotalRev(res?.data?.totalSelling);
      const arr = Object.entries(res?.data?.monthlyTotalPrice);
      arr.sort(sortByYearAndMonth);

// Extract the sorted values
let tmp = arr.map((item)=>({ x: item[0], y:item[1] }))
      setDataLine(tmp);
    } catch (e) {}
  };
  useEffect(() => {
    getStats();
    getAges();
    getOrders();
    getSubs();
  }, []);
  return (
    <div className=" px-5 py-5 w-full gap-6 justify-center items-center flex flex-col">
      <div className="w-full sm:h-[60vh] justify-center items-center flex sm:flex-row flex-col gap-6">
        <div className=" rounded-2xl bg-white drop-shadow-xl px-4 flex h-full flex-col sm:w-[65%] w-full ">
          <div className=" px-10 flex flex-col justify-start items-start w-full">
            <h1 className=" text-[25px] font-bold text-gray-400">
              Total Revenue:
            </h1>
            <p className=" text-[30px] font-semibold text-black">{`${totalRev}$`}</p>
          </div>
          <ResponsiveLine
            data={[
              {
                id: "Totale seling",
                color: "hsl(69, 70%, 50%)",
                data: dataLine,
              },
            ]}
            margin={{ top: 50, right: 110, bottom: 100, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legendOffset: 36,
              legendPosition: "middle",
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
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="flex-col rounded-2xl bg-white drop-shadow-xl h-full flex sm:w-[30%] w-full">
          <div className=" px-10 flex flex-col justify-start items-start w-full">
            <h1 className=" text-[25px] font-bold text-gray-400">Customers:</h1>
            <p className=" text-[18px] font-semibold text-gray-500">
              Information about customers
            </p>
          </div>
          <div className="h-full w-full">
            <MyResponsivePie
              data={[
                {
                  id: "Men",
                  label: "Men",
                  value: dataPie.men,
                  color: "hsl(285, 70%, 50%)",
                },
                {
                  id: "Women",
                  label: "Women",
                  value: dataPie.women,
                  color: "hsl(14, 70%, 50%)",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className=" w-full sm:h-[40vh] justify-center items-center flex sm:flex-row flex-col gap-6">
        <div className="bg-white rounded-2xl drop-shadow-xl px-4 py-8 flex h-full flex-col sm:w-[65%] w-full ">
          <div className=" w-full flex flex-row gap-4 justify-around items-center ">
            <div className=" px-4 bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row ">
              <BsBoxSeam className=" text-[30px] text-yellow-500" />
              <div className=" flex flex-col justify-center items-center">
                <p className=" text-gray-500">Total orders</p>
                <p className=" text-gray-500">{ordersCount}</p>
              </div>
            </div>
            <div className=" px-4 bg-[#EEEEEE] justify-center gap-2 rounded-md py-3 items-center flex flex-row ">
              <IoPersonOutline className=" text-[30px] text-yellow-500" />
              <div className=" flex flex-col justify-center items-center">
                <p className=" text-gray-500">Total customers</p>
                <p className=" text-gray-500">{customersCount}</p>
              </div>
            </div>
          </div>

          <div className=" mt-4 w-full flex flex-col gap-2 ">
            <div className=" w-full flex justify-start items-center">
              <h1 className=" text-[25px] text-gray-400 font-semibold">
                Top products:
              </h1>
            </div>
           

            {bestSelling?.slice(0,2).map((item,index)=>(
              <Prod key={item.productId} {...item} />
            ))}



          </div>




          
        </div>
        <div className=" rounded-2xl bg-white drop-shadow-xl px-4 py-4 flex h-full flex-col sm:w-[30%] w-full">
          <div className=" flex flex-col ">
            <h1 className="text-[#535353] font-bold text-[25px] ">
              Stats Overview:
            </h1>
            <p className=" text-[#A7A7A7]">Information about store visits</p>
          </div>
          <div className="w-full h-[90%]">
            {/* <MyResponsiveRadar data={dataRadar} /> */}
            <MyResponsiveBullet data={data} />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
