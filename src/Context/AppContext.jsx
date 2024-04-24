import React from "react";
import { useState } from "react";
import { createContext } from "react";

//context created as AppCtx
export const AppCtx=createContext(null);

export default function AppContext({children}){

    //necessary values for the cart
    const productImg="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN_823x.jpg?v=1694605258";
    const productName="i Phone 15";
    const productDescription="An apple mobile which is nothing like apple";
    const productRating="4.69";
    const productPrice=65999;
    const productDiscount=99;
    
    //necessary states for the cart
    const [cartCount,setCartCount]=useState(0);
    const [productStock,setProductStock]=useState(94);
    const [subTotal,setSubTotal]=useState(0);
    const [total,setTotal]=useState(0);
    const [saved,setSaved]=useState(0);
    

    return(
       
        //context values and states is passed
           <AppCtx.Provider 
            value={{
                productImg,
                productName,
                productDescription,
                productRating,
                productPrice,
                productDiscount,
                cartCount,
                setCartCount,
                productStock,
                setProductStock,
                subTotal,
                setSubTotal,
                total,
                setTotal,
                saved,
                setSaved
            }}
           >
            {/* children property used to use the context for all the childrens */}
            {children}
           </AppCtx.Provider>
       
    )
}