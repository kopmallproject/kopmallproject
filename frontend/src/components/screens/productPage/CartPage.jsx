import React from 'react'
import Header2 from '../../layouts/Header2'
import Footer from '../../layouts/Footer'
import { flash_sales } from '../../../data'
import ProductCardii from '../../ProductCardii'
import CartCard from '../../CartCard'


const data = [
  {
    id: 0,
    rating: 5,
    reviews: 6
  }
]

const CartPage = () => {
  return (
    <>
        <Header2 />

        <div className="div">
            <h4 className='text-[14px] px-[4%] lg:px-28 mt-20'>Account / <span>Havic HV/G-92 Gamepad</span> / <span className='font-semibold'>Cart</span></h4>

            <div className="flex flex-col gap-7 items-center lg:items-start lg:flex-row lg:px-28  mt-8">
                <div className="w-[100%] lg:w-[770px] border-x-[1px] border-solid border-[#0000004D]">
                  <h6 className=" px-[4%] py-5 text-[24px] font-semibold border-y-[1px] border-solid border-[#0000004D]">Cart <span>(1)</span></h6>
                  <div className=" px-[4%] py-5 border-b-[1px] border-solid border-[#0000004D]">
                    <CartCard data={data[0]} />
                  </div>
                </div>

                <div className="w-[369px]   py-4 border-[1px] border-solid border-[#0000004D]">
                  <h6 className="px-4 pb-3 text-[20px] font-semibold border-b-[1px] border-solid border-[#0000004D]">Cart Summary</h6>
                  <div className="mt-5">
                    <div className="px-4 pb-3 flex flex-row justify-between border-b-[1px] border-solid border-[#0000004D]">
                      <span className="text-[20px] font-normal">SubTotal</span>
                      <span className="text-[16px] font-normal">$192.00</span>
                    </div>
                    <div className='flex flex-col items-center'><button className="w-[329px] mx-auto mt-5 rounded-lg text-[#25133A] text-[20px] py-3 bg-[#FCB349]">CHECKOUT <span>($192)</span></button></div>
                  </div>
                </div>
            </div>

            <div className="similar_items_section lg:px-28 px-[5%] mt-20">
              <div className='flex gap-3 items-center '>
                <img className='w-14px h-27px lg:w-[20px] lg:h-[40px]' src="/assets/Rectangle.png" alt="" />
                <span className="text-[#FDAF3E] text-[12px] lg:text-[24px]  font-bold">Picks for you</span>
              </div>
              <div><h3 className='text-[#000000] text-[18px] lg:text-[36px] font-semibold mt-6 lg:mt-8 '>Similar Items you might like</h3></div>

              <div className="product_card_wrapper mt-6 lg:mt-8 pb-3 flex flex-row flex-nowrap gap-6 overflow-x-scroll scrolling-auto">
              
                {flash_sales.map(data => (
                    <ProductCardii key={data.id} data={data} />
                ))}
              </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default CartPage