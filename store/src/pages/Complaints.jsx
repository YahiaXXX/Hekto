import React,{useState} from 'react'
import {FiUsers} from "react-icons/fi"
import {BsArrowDown} from "react-icons/bs"
import { DataGrid } from "@mui/x-data-grid";
import {RiFeedbackLine} from "react-icons/ri"
import {SlRefresh} from "react-icons/sl"
import {MdOutlinePendingActions} from "react-icons/md"
import PopupComplaint from '../components/PopupComplaint';

const dataGrid=[
    {
        id:1,
        name:"yahia",
        company:"google",
        phone:"067465383",
        email:"y.boukh@gmail.com",
        country:"algeria",
        status:"Active"
    },
    {
        id:2,
        name:"yahia",
        company:"google",
        phone:"067465383",
        email:"y.boukh@gmail.com",
        country:"algeria",
        status:"Active"
    },
    {
        id:3,
        name:"yahia",
        company:"google",
        phone:"067465383",
        email:"y.boukh@gmail.com",
        country:"algeria",
        status:"Active"
    },
    {
        id:4,
        name:"yahia",
        company:"google",
        phone:"067465383",
        email:"y.boukh@gmail.com",
        country:"algeria",
        status:"Active"
    },
    {
        id:5,
        name:"yahia",
        company:"google",
        phone:"067465383",
        email:"y.boukh@gmail.com",
        country:"algeria",
        status:"Active"
    },
]
const columns = [
    {
      field: "name",
      headerName: "Customer name",
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
      field: "company",
      headerName: "Company",
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
        field: "phone",
        headerName: "Phone number",
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
        field: "email",
        headerName: "Email",
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
        field: "country",
        headerName: "Country",
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
    
  ];

function Complaints() {
  const [showPopup,setShowPopup]=useState(false)
  return (
    <div className=' px-5 py-5 flex flex-col' >
      {  showPopup && <div className="fixed left-0 top-0 w-[100%] h-screen bg-black bg-opacity-60 backdrop-blur-sm z-[9999] flex justify-center items-center  " >
                <PopupComplaint
                 setShowPopup={setShowPopup}
                
                />
                
              </div>
               
                }      
        <div className=' bg-white w-[80%] justify-center items-center rounded-2xl px-4 py-3 gap-10 flex flex-row ' >
            <div className=' w-[30%] justify-center items-center flex flex-row gap-4' >
            <div className=' flex justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-10 py-10 rounded-full ' >
                    <RiFeedbackLine className=' text-[30px]' />
                </div>
                </div> 
                <div className=' flex flex-col' >
                    <p className=' text-gray-400 font-semibold' >Total Complaints</p>
                    <h1 className=' font-bold text-gray-500 text-[20px]' >1,003</h1>

                </div>


            </div>
            <div className=' h-[40px] w-[2px] bg-gray-200' />
            <div className=' w-[30%] justify-center items-center flex flex-row gap-4' >
            <div className=' flex  justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-10 py-10 rounded-full ' >
                    <SlRefresh className=' text-[30px]' />
                </div>
                </div> 
                <div className=' flex flex-col' >
                    <p className=' text-gray-400 font-semibold' >Complaints response </p>
                    <h1 className=' font-bold text-gray-500 text-[20px]' >600</h1>

                </div>


            </div>
            <div className=' h-[40px] w-[2px] bg-gray-200' />
            <div className=' w-[30%] justify-center items-center flex flex-row gap-4' >
            <div className=' flex justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-10 py-10 rounded-full ' >
                    <MdOutlinePendingActions className=' text-[30px]' />
                </div>
                </div> 
                
                <div className=' flex flex-col' >
                    <p className=' text-gray-400 font-semibold ' >Waiting Complaints</p>
                    <h1 className=' font-bold text-gray-500 text-[20px]' >550</h1>
                    

                </div>


            </div>

        </div>

        <div className=' mt-5 py-4 px-4 bg-white flex flex-col gap-4 rounded-2xl h-[70vh] ' >
            <div className=' w-full flex flex-row justify-start' >
                <div className=' flex flex-col  ' >
                <h1 className=' font-bold text-[25px] text-black' >All Customers</h1>
                <p className=' font-semibold text-green-500' >Active Members</p>

                </div>
               
                

            </div>
            <div className=' h-full ' >
                <DataGrid
            rows={dataGrid}
            columns={columns}
            pageSize={100}
            onRowClick={()=>{
              setShowPopup(true)
            }}
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

export default Complaints