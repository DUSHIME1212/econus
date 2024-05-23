import React from 'react'
import { Acorn, ArrowUpRight, ArrowUp, Divide, Lightning, BoxArrowDown } from "@phosphor-icons/react";

const ststs = "https://utfs.io/f/deced678-0912-453f-8e46-770f08acf412-qcfrdt.png"

const Home = () => {
    return (
        <div className='w-full bg-yellow-100 h-fit'>
            {/* landing page */}
            <div className='p-16 '>
                <div className='border min-w-96 flex flex-row items-center p-16 min-h-fit rounded-xl'>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <p className='w-fit flex gap-2 h-fit bg-green-200 text-green-600 p-2 rounded-xl'>
                            <span><Acorn size={24} /></span>
                            Your trusted 3PL partner for business with China
                        </p>
                        <h1>
                            The future of supply-
                            chain has arrived.
                        </h1>
                        <p>
                            Ecomflow bridges the gap between China and the rest of the
                            world by offering global fulfillment solutions and leveraging a
                            deeply rooted network on the ground in mainland China.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button>
                                Work with us
                            </button>
                            <a className='w-fit text-green-600 flex' href="/">
                                Pricing & benefits
                                <ArrowUpRight size={24} />
                            </a>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col p-4 min-w-56 size-fit'>
                                <h1>100+</h1>
                                <p>Trusted by Brands</p>
                            </div>
                            <div className='flex flex-col p-4 min-w-56 size-fit'>
                                <h1>50,000+</h1>
                                <p>Parcels shipped per day</p>
                            </div>
                            <div className='flex flex-col p-4 min-w-56 size-fit'>
                                <h1>35%</h1>
                                <p>Avg margin improvement</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center relative'>
                        <div className='size-96 bg-contain border-4 rounded-full' style={{ backgroundImage: `url(https://i.pinimg.com/564x/9b/57/ab/9b57ab1d8a4b7cdb3f3b79425223520d.jpg)` }}>
                            <div className='p-4 bg-[#00000032] z-10 w-60 text-white bottom-4 right-4 rounded-xl absolute backdrop-blur'>
                                <h1>30%</h1>
                                <h2>Margin improvement</h2>
                                <div className='flex gap-2'>
                                    <p className='flex w-fit text-green-400 items-center'>
                                        <ArrowUp size={18} />
                                        34%
                                    </p>
                                    <p>vs last year</p>
                                </div>
                            </div>
                            <div className='h-fit overflow-hidden absolute -top-16 p-8 text-white min-w-72 rounded-xl bg-green-800'>
                                <h1>x4.3</h1>
                                <p>Better cash flow</p>
                                <img className='size-48 object-cover' src={ststs} alt="" srcset="" />
                            </div>
                            <div className='size-fit bg-[#0eff1e29] backdrop-blur-sm px-8 p-2 rounded-xl absolute right-16 text-black'>
                                <h1 className='text-green-800'>65+</h1>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* details section */}
            <div className='p-16'>
                <div className='border w-full h-full rounded-xl p-16'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-2 p-4 rounded-xl'>
                            <span className='size-12 p-4 bg-green-200 flex items-center justify-center border-2 rounded-xl border-green-500 text-green-700'>
                                <Divide size={32} />
                            </span>
                            <h1>Higher Margins, </h1>
                            <h1>Higher scale</h1>
                            <p>Cutting costs is the first step
                                towards higher profits. Leverage
                                our buying power, local network,
                                and in-depth expertise of the
                                Chinese market to expand
                                worldwide with higher margins.</p>
                        </div>
                        <div className='flex flex-col gap-2 p-4 rounded-xl'>
                            <span className='size-12 p-4 bg-green-200 flex items-center justify-center border-2 rounded-xl border-green-500 text-green-500'>
                                <BoxArrowDown size={36} />
                            </span>
                            <h1>Higher Margins, </h1>
                            <h1>Higher scale</h1>
                            <p>Cutting costs is the first step
                                towards higher profits. Leverage
                                our buying power, local network,
                                and in-depth expertise of the
                                Chinese market to expand
                                worldwide with higher margins.</p>
                        </div>
                        <div className='flex flex-col gap-2 p-4 rounded-xl'>
                            <span className='size-12 p-4 bg-green-200 flex items-center justify-center border-2 rounded-xl border-green-500 text-green-500'>
                                <Lightning size={36} />
                            </span>
                            <h1>Higher Margins, </h1>
                            <h1>Higher scale</h1>
                            <p>Cutting costs is the first step
                                towards higher profits. Leverage
                                our buying power, local network,
                                and in-depth expertise of the
                                Chinese market to expand
                                worldwide with higher margins.</p>
                        </div>
                    </div>
                    <div className='p-16 border rounded-xl mt-16 flex flex-col gap-4'>
                        <h1>Explore all benefits as a DTC brand owner</h1>

                        <div className='flex'>
                        <p className='w-fit'>Making the switch to direct fulfillment from China comes with lots of benefits for
                            brand owners.
                            <span className='text-green-500'> Click pricing & benefits </span>to see what this can do for your brand. </p>
                            <button className='min-w-56 p-2 bg-gray-300 rounded-xl flex justify-center items-center flex-row' href="">
                                Pricing & benefits
                                <ArrowUp size={24}/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* logos section */}

            <div>

            </div>
            {/* Global Scale section */}
            <div>

            </div>
        </div>
    )
}

export default Home