import React,{useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import {AiFillDelete} from "react-icons/ai"
import PopupOrder from '../components/PopupOrder';

const dataGrid=[
    {
        id:1243,
        date:"21/02/2023",
        customer:"boukharouba yahia",
        price:"30$",
        status:"en cours",
        btn:true},
        {
            id:2334,
            date:"21/02/2023",
            customer:"boukharouba yahia",
            price:"30$",
            status:"en cours",
            btn:true},
            {
                id:2875,
                date:"21/02/2023",
                customer:"boukharouba yahia",
                price:"30$",
                status:"en cours",
                btn:true},
]


function Orders() {
  const [showPopup,setShowPopup]=useState(false)
  const columns = [
    {
      field: "id",
      headerName: "Order",
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
      field: "date",
      headerName: "Date",
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
        field: "customer",
        headerName: "Customer",
        minWidth:200,
        flex:3,
        headerClassName: "super-app-theme--header",
        renderCell: (param) => (
          <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
            {param.formattedValue}
          </p>
        ),
      },
      {
        field: "status",
        headerName: "Status",
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
        field: "price",
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
            <button className=' font-semibold px-4 py-1 bg-green-500 bg-opacity-40' >Consulter</button>
             <AiFillDelete className=' text-[20px] text-red-600' />

          </div>
        ),
      },
    
  ];
  return (
    <div className=' flex flex-col justify-center items-center py-5 px-16' >
      {  showPopup && <div className="fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  " >
                <PopupOrder 
                 setShowPopup={setShowPopup}
                
                />
                
              </div>
               
                }            
         <div className=' mt-5 py-4 px-4 bg-white flex flex-col gap-4 rounded-2xl h-[80vh] ' >
            <div className=' w-full flex flex-row justify-start' >
                <div className=' flex flex-col  ' >
                <h1 className=' font-bold text-[25px] text-black' >All Orders</h1>

                </div>
               
                

            </div>
            <div className=' h-full ' >
                <DataGrid
            rows={dataGrid}
            columns={columns}
            pageSize={100}
            onRowClick={()=>setShowPopup(true)}
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