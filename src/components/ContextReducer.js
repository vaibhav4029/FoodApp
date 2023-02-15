import React, { createContext, useReducer ,useContext } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state,action)=>{
    //kaise state ko change krna hai addtocart m kya krna hai removefromcart m kya krna hai and all

    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        case "REMOVE":
            //in case of remove we can't remove directly from state we need to store it first in another variable then remove it.
            let newArr = [...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            let arr = [...state]
            arr.find((food,index)=>{
                if(food.id===action.id){
                    arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price+food.price}
                }
                return arr
            })
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