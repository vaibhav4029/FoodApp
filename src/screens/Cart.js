import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import trash from "../trash.svg";
export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();
    if(data.length===0){
        return(
            <div>
                <div className="m-5 w-100 text-center fs-3">The Cart is Empty</div>
            </div>
        )
    }
    let totalPrice = data.reduce((total,food)=> total+food.price,0)
  return (
    <div>
        <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md table-responsive-lg">
            <table className="table table-hover">
                <thead className="text-success fs-4">
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Home</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food,index) => (
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td>
                                <button type="button" className='btn p-0'>
                                    <img src={trash} alt="delete" onClick={()=>dispatch({typr:"REMOVE",index:index})}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className="btn bg-succeess mt-5">
                    Check Out
                </button>
            </div>
        </div>
    </div>
  )
}
