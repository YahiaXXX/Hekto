import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import CartContext from "../contexts/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TableRow = ({ item, bool, cartContent, setCartContent }) => {
  const incrementQte = (itemId, incrementAmount) => {
    setCartContent((prevCartContent) => {
      return prevCartContent.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            qte: item.qte + incrementAmount,
          };
        }
        return item;
      });
    });
  };
  const desincrementQte = (itemId, incrementAmount) => {
    setCartContent((prevCartContent) => {
      return prevCartContent.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            qte: item.qte - incrementAmount,
          };
        }
        return item;
      });
    });
  };

  return (
    <tr className=" border-b-[1px] border-[#9AAFC5] ">
      <td className=" py-5 ">
        <div className=" flex flex-row gap-2 ">
          <img src={item.url} className=" h-20 w-20" alt="" />
          <div className=" flex flex-col">
            <h1 className=" font-semibold">{item.name}</h1>
            <p className=" text-[14px] text-gray-400">Color:Brown</p>
            <p className=" text-[14px] text-gray-400">Size:XXL</p>
          </div>
        </div>
      </td>
      <td className=" py-5 ">
        {" "}
        <div className=" flex justify-center items-center">{`${item.price}$`}</div>{" "}
      </td>
      <td className=" py-5 ">
        {" "}
        <div className=" flex justify-center items-center">{item.qte}</div>{" "}
      </td>
      <td className=" py-5 ">
        {" "}
        <div className=" flex justify-center items-center">{`${(
          item.price * item.qte
        ).toFixed(2)}$`}</div>
      </td>
      {bool && (
        <td>
          <div className=" flex justify-center items-center gap-4 ">
            <button
              onClick={() => {
                incrementQte(item.id, 1);
              }}
              className=" p-2 bg-green-400"
            >
              <GrAdd />
            </button>
            <button
              onClick={() => {
                desincrementQte(item.id, 1);
              }}
              className=" p-2 bg-green-400"
            >
              <AiOutlineMinus />
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

function Cart() {
  const [bool, setBool] = useState(false);
  const navigate=useNavigate()
  const urlPost = "http://localhost:8080/orders/create";
  const [adr, setAdr] = useState({
    ville: "",
    wilaya: "",
    street: "",
    post: "",
  });

  const { cartContent, setCartContent, subtotal } = useContext(CartContext);

  const createOrder = async () => {
    const reform = cartContent.map((item) => ({
      productId: item.id,
      productName: item.name,
      productPrice: item.price,
      productQuantity: item.qte,
      categoryName: item.category,
      shopId: item.shop,
      
    }));
    
    try {
      let res = await axios.post(
        urlPost,
        {
          products: reform,
          address: {
            ville: adr.ville,
            wilaya: adr.wilaya,
            street: adr.street,
            codePostal: parseInt(adr.post),
          },
        },
        { withCredentials: true }
      );
      console.log(res)
      setCartContent([])
      navigate("/payment")
      
    } catch (e) {}
  };
  useEffect(() => {
    console.log(cartContent);
  }, []);

  return (
    <div className=" w-full">
      <div className=" bg-[#BDE9C8] flex justify-center items-center top-0 w-full h-[20vh]">
        <div className="w-[50%] flex flex-col justify-center items-start ">
          <h1 className="  font-roboto ss:leading-[70px] leading-[50px] text-[40px] text-[#101750] font-bold">
            My Cart
          </h1>
        </div>
      </div>
      <div className="bgSlider m-2 w-full sm:py-16 py-8 flex flex-row justify-center items-center">
        <div className=" md:w-[70%] w-[90%] flex sm:flex-row flex-col gap-10 justify-center items-center ">
          <div className=" flex flex-col sm:w-[50%] w-full ">
            <div className=" h-[60vh] overflow-scroll">
              <table className="border-collapse w-full">
                <thead className=" bg-white sticky top-0  w-full">
                  <th className=" py-5 ">Product</th>
                  <th className=" py-5 ">Price</th>
                  <th className=" py-5 ">Quantity</th>
                  <th className=" py-5 ">Totale</th>
                </thead>
                <tbody className=" h-full overflow-y-auto w-full">
                  {cartContent?.map((item, index) => (
                    <TableRow
                      cartContent={cartContent}
                      setCartContent={setCartContent}
                      item={item}
                      key={index}
                      bool={bool}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            <div className=" mt-4 flex flex-row justify-between w-full">
              <button
                onClick={() => setBool((prev) => !prev)}
                className=" text-white rounded-[3px] bg-green-500 px-4 w-[150px] "
              >
                {bool ? "Confirm" : "Update"}
              </button>
              <button
                onClick={() => {
                  setCartContent([]);
                }}
                className=" text-white rounded-[3px] bg-green-500 px-4 py-2"
              >
                Clear
              </button>
            </div>
          </div>
          <div className=" sm:w-[30%] w-full flex flex-col gap-6 ">
            <div className=" w-full justify-center items-center flex flex-col gap-4">
              <h1 className=" text-[20px] font-semibold">Totals</h1>

              <div className=" justify-center items-center flex flex-col w-full px-5 py-16 bg-gray-200">
                <div className=" py-2 border-b-[2px] border-[#9AAFC5] w-full flex gap-4 flex-row items-center justify-center">
                  <p className=" text-[20px] font-semibold">Subtotals:</p>
                  <p className=" text-[25px] font-semibold">{subtotal}$</p>
                </div>
                <p className=" text-gray-500 flex flex-row justify-center items-center gap-2 mt-4">
                  <AiOutlineCheck className=" text-green-400 h-5 w-5" />{" "}
                  Shipping & taxes calculated at checkout
                </p>

                {/* <button className=" text-white mt-6 bg-green-400 h-10 px-10 ">
                  Calculate shipping
                </button> */}
              </div>
            </div>

            <div className=" w-full justify-center items-center flex flex-col gap-4">
              <h1 className=" text-[20px] font-semibold">Calculate Shopping</h1>

              <div className=" w-full flex flex-col gap-4 px-5 bg-gray-200 py-8">
                <input
                  className=" border-[#9AAFC5] px-4  py-1 border-b-[1px] outline-none bg-transparent"
                  type="text"
                  placeholder="wilaya"
                  value={adr.wilaya}
                  onChange={(e) => setAdr({ ...adr, wilaya: e.target.value })}
                />
                <input
                  className=" border-[#9AAFC5] px-4 py-1 border-b-[1px] outline-none bg-transparent"
                  type="text"
                  placeholder="ville"
                  value={adr.ville}
                  onChange={(e) => setAdr({ ...adr, ville: e.target.value })}
                />
                <input
                  className=" border-[#9AAFC5] px-4 py-1 border-b-[1px] outline-none bg-transparent"
                  type="text"
                  placeholder="street"
                  value={adr.street}
                  onChange={(e) => setAdr({ ...adr, street: e.target.value })}
                />
                <input
                  className=" border-[#9AAFC5] px-4 py-1 border-b-[1px] outline-none bg-transparent"
                  type="text"
                  placeholder="code postale"
                  value={adr.post}
                  onChange={(e) => setAdr({ ...adr, post: e.target.value })}
                />

                <button onClick={createOrder} className=" bg-green-400 text-white h-10 w-[50%] ">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
