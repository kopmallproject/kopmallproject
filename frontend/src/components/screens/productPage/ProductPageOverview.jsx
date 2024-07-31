import React, { useEffect } from 'react'
import Header2 from '../../layouts/Header2'
import Footer from '../../layouts/Footer'
import ProductCardii from '../../ProductCardii'
import { flash_sales } from '../../../data'
import { Heart, Recycle, Truck } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../../actions/productsActions'

const Star = ({ filled }) => {
    return (
        <FontAwesomeIcon className={filled ? 'text-[#ffc107] w-[10px] lg:h-[20px] lg:w-[20px] h-[10px]' : 'text-[#ccc] w-[10px] h-[10px] lg:h-[20px] lg:w-[20px]'} icon={faStar} />
    )
}
  
  
const StarRating = (rating) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <span className='' key={index}>
                    <Star className="" filled={rating > index} />
                </span>
            ))}
        </>
    )
}

const ProductPageOverview = ({params}) => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector((state) => state.productDetails)
    const {error, loading, product} = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
        console.log(product)
    }, [dispatch, params])
  return (
    <>
        <Header2 />
        
        <div className="mt-20">

            <div className="flex flex-col lg:flex-row lg:justify-between lg:px-28 px-[5%]">
                <div className="flex flex-row gap-5">
                    <div className="div flex flex-col justify-between">
                        <div className="small_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[85px] h-[69px] lg:w-[170px] lg:h-[137px]">
                            <img className='w-[60px] h-[57px] lg:w-[112px] lg:h-[97px]' src="/assets/ProductOverviewSmallImageI.png" alt="" />
                        </div>
                        <div className="small_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[85px] h-[69px] lg:w-[170px] lg:h-[137px]">
                            <img className='w-[60px] h-[57px] lg:w-[112px] lg:h-[97px]' src="/assets/ProductOverviewSmallImageI.png" alt="" />
                        </div>
                        <div className="small_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[85px] h-[69px] lg:w-[170px] lg:h-[137px]">
                            <img className='w-[60px] h-[57px] lg:w-[112px] lg:h-[97px]' src="/assets/ProductOverviewSmallImageI.png" alt="" />
                        </div>
                        <div className="small_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[85px] h-[69px] lg:w-[170px] lg:h-[137px]">
                            <img className='w-[60px] h-[57px] lg:w-[112px] lg:h-[97px]' src="/assets/ProductOverviewSmallImageI.png" alt="" />
                        </div>
                    </div>
                    <div className="large_image_card flex flex-col justify-center items-center bg-[#F5F5F5] w-[250px] h-[300px] lg:w-[350px] lg:h-[450px] xl:w-[500px] xl:h-[600px]">
                        <img className='w-[223px] h-[157px]  lg:w-[296px] lg:h-[165px] xl:w-[446px] xl:h-[315px]' src={product.image} alt="" />
                    </div>
                </div>
                <div className="div mt-4 lg:mt-0 lg:w-[400px] xl:w-[400px]">
                    <h3 className='text-[24px] font-semibold'>{product.title}</h3>
                    <div className="flex gap-4 items-center  mt-4">
                        <div className="">{StarRating(4)}</div>
                        <span className='text-[#000000] text-[14px] lg:text-[14px] font-weight-semibold opacity-8'>(56) Reviews</span>
                        <span className='text-[#000000] text-[14px] lg:text-[14px] font-weight-semibold opacity-8'>|</span>
                        <span className='text-[14px] text-[#000000] font-weight-semibold opacity-8'>In stock</span>
                    </div>
                    <div className="div  text-left mt-4"><span className='text-[20px] font-medium'>${product.amount}</span></div>
                    <p className="mt-4 text-[14px] font-normal">{product.description}</p>
                    <div className="mt-4 flex flex-row justify-between items-center">
                        <div className='flex items-start flex-row'>
                            <button className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[30px] h-[44px] text-[20px] font-semibold">-</button>
                            <span className="border-[1px] border-solid border-[#00000080] flex flex-col justify-center items-center w-[65px] h-[44px] text-[20px] font-semibold">5</span>
                            <button className="border-[1px] border-solid border-[#FCB349] bg-[#FCB349] text-white flex flex-col justify-center items-center w-[30px] h-[44px] text-[20px] font-semibold">+</button>
                        </div>
                        <button className="w-[179px]  rounded-lg text-[#25133A] text-[20px] py-3 bg-[#FCB349]">Buy Now!</button>
                        <i className="w-[44px] h-[44px] flex flex-col justify-center rounded items-center border-[1px] border-solid border-[#00000080]"><Heart className='w-[21px] h-[19px]' /></i>
                    </div>
                    <div className="mt-6 border-separate border-[1px] border-solid rounded-lg px-4">
                        <div className="flex flex-row items-center gap-3 py-6 border-b-[1px] border-solid">
                            <div className=""><i className=""><Truck className='w-[40px] h-[40px]'/></i></div>
                            <div className="div flex flex-col gap-2">
                                <h4 className='text-[16px] font-medium'>Free Delivery</h4>
                                <span className="text-[12px] font-medium underline">Enter your postal code for Delivery Availability</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-3 py-6">
                            <div className=""><i className=""><Recycle className='w-[40px] h-[40px]'/></i></div>
                            <div className="div flex flex-col gap-2">
                                <h4 className='text-[16px] font-medium'>Return Delivery</h4>
                                <span className="text-[12px] font-medium underline">Free 30 Days Delivery Returns. Details</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="join join-vertical w-full px-[4%] mt-9">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Overview</div>
                    <div className="collapse-content">
                    <p>This is a placeholder for details about the product such as dimension, color, and related content.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Description</div>
                    <div className="collapse-content">
                        <div className="">
                            <div className="flex flex-col gap-3">
                                <div className="card text-[20px] flex flex-row px-5   border-[1px] ">
                                    <span className="py-4 border-r-[1px] pr-4">Weight</span>
                                    <span className='pl-3 py-4'>1.5kg</span>
                                </div>
                                <div className="card text-[20px] flex flex-row px-5   border-[1px] ">
                                    <span className="py-4 border-r-[1px] pr-4">Colour</span>
                                    <span className='pl-3 py-4'>Grey</span>
                                </div>
                                <div className="card text-[20px] flex flex-row px-5   border-[1px] ">
                                    <span className="py-4 border-r-[1px] pr-4">Brand</span>
                                    <span className='pl-3 py-4'>Sony</span>
                                </div>
                            </div>

                            <div className="mt-9">
                                <h5 className="text-[#00000080] text-[16px]">Brand</h5>
                                <p className="text-[#00000080] text-[16px] mt-4">Sony Ps4 Controller Dualshock 4 Wireless Game Pad - Red CamoThe DualShock 4 Wireless Controller features familiar controls, and incorporates several innovative features to usher in a new era of interactive experiences. Its definitive analog sticks and trigger buttons have been improved for greater feel and sensitivity. A multi touch, clickable touch pad expands gameplay possibilities, while the incorporated light bar in conjunction with the PlayStation Camera allows for easy player identification and screen adjustment when playing with friends in the same room. The addition of the Share button makes utilizing the social capabilities of the PlayStation 4 as easy as the push of a button. The DualShock 4 Wireless Controller is more than a controller; it's your physical connection to a new era of gaming. Pair your controller you will need to pair your controller when you use it for the first time and when you use it with another PS4 system. Turn on the PS4 system and connect the controller with the USB cable to complete device pairing charging your controller With the PS4 system turned on or in rest mode, connect your controller using the USB cable.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Warranty</div>
                    <div className="collapse-content">
                        <p>Warranty information not available for this item or the duration of the warranty should be specified.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Reviews</div>
                    <div className="collapse-content">
                    <p>Reviews</p>
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

export default ProductPageOverview