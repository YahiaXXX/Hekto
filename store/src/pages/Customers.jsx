import React from 'react'
import {FiUsers} from "react-icons/fi"
import {BsArrowDown} from "react-icons/bs"
import { DataGrid } from "@mui/x-data-grid";

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

function Customers() {
  return (
    <div className=' px-5 py-5 flex flex-col' >
        <div className=' bg-white w-[80%] justify-center items-center rounded-2xl px-4 py-3 gap-10 flex flex-row ' >
            <div className=' w-[30%] flex flex-row gap-4' >
            <div className=' flex justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-5 py-5 rounded-full ' >
                    <FiUsers className=' text-[20px]' />
                </div>
                </div> 
                <div className=' flex flex-col' >
                    <p className=' text-gray-400' >Total Customers</p>
                    <h1 className=' font-bold text-gray-500' >5,435</h1>
                    <p className=' gap-1 flex flex-row justify-center items-center' >
                        <span className=' font-semibold gap-1 flex flex-row justify-center items-center text-red-600' ><BsArrowDown/> 16%</span>
                        this month
                        
                    </p>

                </div>


            </div>
            <div className=' h-[40px] w-[2px] bg-gray-200' />
            <div className=' w-[30%] flex flex-row gap-4' >
            <div className=' flex justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-5 py-5 rounded-full ' >
                    <FiUsers className=' text-[20px]' />
                </div>
                </div> 
                <div className=' flex flex-col' >
                    <p className=' text-gray-400' >Total Customers</p>
                    <h1 className=' font-bold text-gray-500' >5,435</h1>
                    <p className=' gap-1 flex flex-row justify-center items-center' >
                        <span className=' gap-1 font-semibold flex flex-row justify-center items-center text-red-600' ><BsArrowDown/> 16%</span>
                        this month
                        
                    </p>

                </div>


            </div>
            <div className=' h-[40px] w-[2px] bg-gray-200' />
            <div className=' w-[30%] flex flex-row gap-4' >
            <div className=' flex justify-center items-center ' > 
               <div className=' bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-5 py-5 rounded-full ' >
                    <FiUsers className=' text-[20px]' />
                </div>
                </div> 
                
                <div className=' flex flex-col' >
                    <p className=' text-gray-400' >Total Customers</p>
                    <h1 className=' font-bold text-gray-500' >5,435</h1>
                    <p className=' gap-1 flex flex-row justify-center items-center' >
                        <span className=' font-semibold gap-1 flex flex-row justify-center items-center text-red-600' ><BsArrowDown/> 16%</span>
                        this month
                        
                    </p>

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

export default Customers