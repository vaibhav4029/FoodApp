import React, { createContext, useReducer ,useContext } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state,action)=>{
    //kaise state ko change krna hai addtocart m kya krna hai removefromcart m kya krna hai and all

    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        
        default:
            console.log("Error in Reducer")
    }


}

//dispatch has multiple action type
export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[])//initaila state of reducer will be empty array
    return(
        <>
            <CartDispatchContext.Provider value= {dispatch}>
                <CartStateContext.Provider value={state}>
                    {children}
                </CartStateContext.Provider>
            </CartDispatchContext.Provider>
        </>
    )
}

export const useCart =()=>useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);