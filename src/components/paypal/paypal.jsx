import React,{ useEffect, useRef,  } from "react"

export const Paypal =()=>{
    const paypal = useRef()

    useEffect=(()=>{
        window.paypal.Buttons({
            createOrder: (data,action,err)=>{
                return action.order.create({
                    intend : "Capture",
                    purchase_units : [
                        {
                            describtion: "Donate",
                            amount:{
                                currency_code:"USD",
                                value: 100
                            }
                        }
                    ]
                })
            },
onApprove: async(data,action)=>{
    const order = await action.order.capture();
    console.log( order)
},
onError:(err)=>{
    console.log(err)
}
        }).render(paypal.current)
    })
    return(
        <div>
            <div ref={paypal}></div>
        </div>

    )
}