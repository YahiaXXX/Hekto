import React,{useEffect, useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import {AiFillDelete} from "react-icons/ai"
import PopupOrder from '../components/PopupOrder';
import axios from 'axios';
import { timeFormat } from "d3-time-format";



function Orders() {
  let bs=process.env.REACT_APP_QUERY_BASE_URL
  let bs2=process.env.REACT_APP_COMMAND_BASE_URL
  let urlGet=`${bs}orders/getAllOrdersByShopId`
  let urlDelete=`${bs2}orders/delete/`
  const [showPopup,setShowPopup]=useState(false)


  const [orders,setOrders]=useState([])

  const getOrders= async ()=>{
    try{
      let res = await axios.get(urlGet,{withCredentials:true})
      console.log(res)
      setOrders(res.data)
    }
    catch(e){
      console.log(e)
    }

  }
 

  useEffect(()=>{
    getOrders()
  },[])


  const columns = [
    {
      field: "orderId",
      headerName: "Order",
      minWidth:200,
      flex:4,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => (
        <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
          {param.formattedValue}
        </p>
      ),
    },
    {
      field: "ordeDate",
      headerName: "Date",
      minWidth:200,
      flex:1,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => {
        const date = new Date(param.formattedValue);
        const formatSpecifier = "%Y-%m-%d %H:%M";
        const formatDate = timeFormat(formatSpecifier);
        let res = formatDate(date);
        return <div className=" hover:cursor-pointer w-full">{res}</div>;
      },
    },
    {
        field: "userId",
        headerName: "Customer",
        minWidth:200,
        flex:2,
        headerClassName: "super-app-theme--header",
        renderCell: (param) => (
          <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
            {param.formattedValue}
          </p>
        ),
      },
      {
        field: "orderStatus",
        headerName: "Status",
        minWidth:200,
        flex:1,
        headerClassName: "super-app-theme--header",
        renderCell: (param) => {
          let color = "";
      let value = param.formattedValue;
      if (value === "NEW") color = "#3F51B5";
      if (value === "PENDING") color = "#800080";
      if(value==="ON_HOLD") color="#0000FF"
      if (value === "SHIPPED") color = "#607D8B";
      if (value === "DELIVERED") color = "#FF0000";
      if (value === "CLOSED") color = "#000";
         return (
          <div
          style={{ background: color,width:120 }}
          className=" flex text-white font-semibold justify-center items-center px-2 py-1 bg-opacity-80  rounded-xl "
        >
          <p className=" hover:cursor-pointer w-full flex justify-center items-center ">
            {param.formattedValue}
          </p>
        </div>
          
        )},
      },
      {
        field: "totalPrice",
        headerName: "Price",
        minWidth:200,
        flex:1,
        headerClassName: "super-app-theme--header",
        renderCell: (param) => (
          <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
            {param.formattedValue}
          </p>
        ),
      },
      {
        field: "btn",
        headerName: "",
        minWidth:200,
        flex:1,
        headerClassName: "super-app-theme--header",
        renderCell: (param) => (
          <div className=' flex flex-row justify-center items-center gap-4' >
            <button onClick={()=>{
              setOrderInfo(param.row)
              setShowPopup(true)}} className=' font-semibold px-4 py-1 bg-green-500 bg-opacity-40' >Consulter</button>
             <AiFillDelete className=' text-[20px] text-red-600' />

          </div>
        ),
      },
    
  ];

  const [orderInfo,setOrderInfo]=useState(null)
  return (
    <div className=' w-full flex flex-col justify-center items-center py-5 sm:px-16 px-8' >
      {  showPopup && <div className="fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  " >
                <PopupOrder 
                 setShowPopup={setShowPopup}
                 orderInfo={orderInfo}
                
                />
                
              </div>
               
                }            
         <div className=' mt-5 py-4 px-4 bg-white flex flex-col gap-4 rounded-2xl w-[100%] h-[80vh] ' >
            <div className=' w-full flex flex-row justify-start' >
                <div className=' flex flex-col  ' >
                <h1 className=' font-bold text-[25px] text-black' >All Orders</h1>

                </div>
               
                

            </div>
            <div className=' h-full ' >
                <DataGrid
            rows={orders}
            columns={columns}
            pageSize={100}
            getRowId={(row) => row.orderId}
            onRowClick={()=>{}}
            rowsPerPageOptions={[100]}
            localeText={{ noRowsLabel: "" }}
            sx={{
            position: "relative",
            backgroundImage:  undefined,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
              ".super-app-theme--header": {
                fontWeight: 900,
                color:"gray",
                fontSize: "15px",
                fontFamily: "unset",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              "& .MuiDataGrid-row": {
                border: "none",
              },
              '& .MuiDataGrid-cell:focus': {
                outline: 'none',
              },
              // "& .MuiDataGrid-footerContainer": {
              //   display: "none",
              // },
              ".MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "&.MuiDataGrid-root": {
                border: "none",
                color:`black`,
              },
              "& .MuiTablePagination-root": {
                color:`black`,
              },
              "& .MuiDataGrid-iconSeparator": {
                color:`black`,
              },
              "& .MuiTablePagination-caption": {
                color:`black`,
              },
              "& .MuiTablePagination-select": {
                color:`black`,
              },

              "& .MuiDataGrid-page": {
                color:`black`,
              },
              "& .MuiTablePagination-selectIcon": {
                color:`black`,
              },

              "& .MuiTablePagination-actions button": {
                color:`black`,
              },
              "& .MuiTablePagination-actions button:hover": {
                backgroundColor: "red",
                color:`black`,
              },
              "& .MuiPaginationItem-root": {
                color:`black`,
              },
              "& .MuiPaginationItem": {
                color:`black`,
              },
            }}
          />
                </div>




        </div>

    </div>
  )
}

export default Orders