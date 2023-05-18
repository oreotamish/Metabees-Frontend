import React from "react";
import { useParams } from "react-router";

import {subscriptions} from '../data'

function PricePage() {
  const { id } = useParams();
  return (
    <div className="flex flex-col">   
    <div className="flex justify-between max-h-[600px]"> 
    <div className="w-full lg:mt-10 lg:ml-14 lg:w-1/4 ">
        <div className="rounded-md lg:rounded-r-5xl mx-auto max-w-sm border border-[#6e25c0]  bg-[#1a1a1a] pb-3 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6 max-sm:mt-20">
          <span className="mb-2 block text-sm font-semibold text-gray-400">
            {(subscriptions[id - 1][0]) === "GOLD"?(<span className="text-[#FFD93D]">{subscriptions[id - 1][0]}</span>):(<span>{subscriptions[id - 1][0]}</span>)}
          </span>
          <span className="flex items-end">
            <span className="text-4xl font-extrabold leading-none text-white">
              {subscriptions[id - 1][1]}
            </span>
            <span className="text-sm font-semibold text-white">/month</span>
          </span>
          <div className="mt-7 border-t border-[#6e25c0] pt-5 text-center">
            <ul>
              {subscriptions[id - 1][2].map((feature) => (
                <li className="mb-6 flex items-center">
                  <span className="ml-2 text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* payment gateway */}
      <div className=" text-white border bg-[#1a1a1a]  border-[#6e25c0] flex flex-col justify-evenly items-center w-8/12 lg:mt-10 rounded mr-10">
        <div className="text-center text-4xl ">Card Payment</div>
        <div className="flex flex-col justify-between h-1/6 w-2/3">
             
            <input type="text" placeholder="card holder name" className="shadow-3xl rounded outline-none  bg-[#171717] h-3/5 p-2 mb-2" />
            <input type="text" placeholder="card number" className="shadow-3xl rounded outline-none  bg-[#171717] h-3/5 p-2" />
        </div>
        <span className="text-2xl">Expired</span>
        <div>
            <div className="flex justify-between">
                <input type="text" placeholder="MM" className="rounded w-1/4 outline-none text-gray-400 p-2 bg-[#171717] shadow-3xl"/>
                <input type="text" placeholder="YY" className="rounded w-1/4 outline-none text-gray-400 p-2 bg-[#171717] shadow-3xl"/>
                <input type="text" placeholder="CVV" className="rounded w-1/3 outline-none text-gray-400 p-2 bg-[#171717] shadow-3xl"/>
            </div>
        </div>
        <button className="button1">Pay Now {subscriptions[id-1][1]}</button>
      </div>

      
    </div>
    {/* terms and condition somethings! */}
    <div className="text-white mt-10  lg:ml-[160px] w-4/5 h-2/3 bg-[#1a1a1a] border-[#6e25c0] rounded p-2 text-center border mb-2">
      <p className="text-xl font-semibold">Note:</p> You have to pay <span className="font-black">{subscriptions[id-1][1]}</span> for this subscription and you'll be getting above mentioned feauters. In case your transaction fails you will be redirected to pricing page of the subscription. In case money has been deducted from your account then purchase has been made and subscription will be provided to you in any case.
      You can cancel subscription anytime in first 14 days and money will be refunded with 2 to 3 business days.
    </div>
    </div> 
  );
}

export default PricePage;
