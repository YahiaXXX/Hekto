import React, { useState } from "react";

import { FiUsers } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import { useEffect } from "react";

function Customers() {
  const { baseUrl } = useContext(AuthContext);
  const urlGet = `${baseUrl}getMySubscribers`;
  const bs=process.env.REACT_APP_QUERY_BASE_URL
  const urlGetLastMonth= `${bs}statistics/getMySubscription`
  const [customers, setCustomers] = useState([]);
  const [lastMonth,setLastMonth]=useState(0)
  const columns = [
    {
      field: "name",
      headerName: "Customer name",
      minWidth: 200,
      flex: 2,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => (
        <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
          {param.formattedValue}
        </p>
      ),
    },
    {
      field: "birthdayDate",
      headerName: "bithday",
      minWidth: 200,
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => {
        const timestamp = param.formattedValue;
        var date = new Date(timestamp); // Create a new Date object

        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
        var day = ("0" + date.getDate()).slice(-2);
        var hour = ("0" + date.getHours()).slice(-2);
        var minute = ("0" + date.getMinutes()).slice(-2);
        var second = ("0" + date.getSeconds()).slice(-2);

        var formattedDate =
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second;
        console.log(formattedDate);
        return (
          <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
            {formattedDate}
          </p>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => (
        <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
          {param.formattedValue}
        </p>
      ),
    },
    {
      field: "userGender",
      headerName: "Gender",
      minWidth: 200,
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (param) => (
        <p className=" hover:cursor-pointer w-full flex justify-start items-center ">
          {param.formattedValue}
        </p>
      ),
    },
  ];
  const getLastMonth= async ()=>{
    try{
      let res = await axios.get(urlGetLastMonth,{withCredentials:true})
      console.log(res)
      setLastMonth(res.data.body)

    }
    catch(e){

    }
  }
  const getSubs = async () => {
    try {
      let res = await axios.get(urlGet, { withCredentials: true });
      console.log(res);
      setCustomers(res.data);
    } catch (e) {}
  };
  useEffect(() => {
    getSubs();
    getLastMonth();
  }, []);
  return (
    <div className=" px-5 py-5 flex flex-col">
      <div className=" bg-white md:w-[60%] w-full justify-center items-center rounded-2xl px-4 py-3 gap-10 flex ss:flex-row flex-col ">
        <div className=" ss:w-[30%] w-full flex sm:flex-row flex-col gap-4">
          <div className=" flex justify-center items-center ">
            <div className=" bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-5 py-5 rounded-full ">
              <FiUsers className=" text-[20px]" />
            </div>
          </div>
          <div className=" justify-center items-center flex flex-col">
            <p className=" text-gray-400">Total Subscribers</p>
            <h1 className=" font-bold text-gray-500">{customers.length}</h1>
            {/* <p className=" gap-1 flex flex-row justify-center items-center">
              <span className=" font-semibold gap-1 flex flex-row justify-center items-center text-red-600">
                <BsArrowDown /> 16%
              </span>
              this month
            </p> */}
          </div>
        </div>
        <div className=" ss:flex hidden h-[40px] w-[2px] bg-gray-200" />
        <div className=" ss:w-[30%] w-full flex sm:flex-row flex-col gap-4">
          <div className=" flex justify-center items-center ">
            <div className=" bg-[#00AC4F] bg-opacity-50 flex justify-center items-center px-5 py-5 rounded-full ">
              <FiUsers className=" text-[20px]" />
            </div>
          </div>
          <div className=" justify-center items-center flex flex-col">
            <p className=" text-gray-400">Subscribed this month</p>
            <h1 className=" font-bold text-gray-500">{lastMonth}</h1>
            <p className=" gap-1 flex flex-row justify-center items-center">
              <span className=" gap-1 font-semibold flex flex-row justify-center items-center text-green-500">
                <BsArrowUp /> {`${(customers.length/lastMonth).toFixed(2)*100}%`}
              </span>
              this month
            </p>
          </div>
        </div>
       </div>

      <div className=" mt-5 py-4 px-4 bg-white flex flex-col gap-4 rounded-2xl h-[70vh] ">
        <div className=" w-full flex flex-row justify-start">
          <div className=" flex flex-col  ">
            <h1 className=" font-bold text-[25px] text-black">All Customers</h1>
            <p className=" font-semibold text-green-500">Active Members</p>
          </div>
        </div>
        <div className=" h-full ">
          <DataGrid
            rows={customers}
            columns={columns}
            pageSize={100}
            getRowId={(row) => row.userId}
            rowsPerPageOptions={[100]}
            localeText={{ noRowsLabel: "" }}
            sx={{
              position: "relative",
              backgroundImage: undefined,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
              ".super-app-theme--header": {
                fontWeight: 900,
                color: "gray",
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
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              // "& .MuiDataGrid-footerContainer": {
              //   display: "none",
              // },
              ".MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "&.MuiDataGrid-root": {
                border: "none",
                color: `black`,
              },
              "& .MuiTablePagination-root": {
                color: `black`,
              },
              "& .MuiDataGrid-iconSeparator": {
                color: `black`,
              },
              "& .MuiTablePagination-caption": {
                color: `black`,
              },
              "& .MuiTablePagination-select": {
                color: `black`,
              },

              "& .MuiDataGrid-page": {
                color: `black`,
              },
              "& .MuiTablePagination-selectIcon": {
                color: `black`,
              },

              "& .MuiTablePagination-actions button": {
                color: `black`,
              },
              "& .MuiTablePagination-actions button:hover": {
                backgroundColor: "red",
                color: `black`,
              },
              "& .MuiPaginationItem-root": {
                color: `black`,
              },
              "& .MuiPaginationItem": {
                color: `black`,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;
