
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Table = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    };
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-16'>
                <div>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-base font-medium text-gray-500 "
                                                >
                                                    Stocks
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    <button className="bg-[#CBD0E1]/20 text-sm hover:bg-[#CBD0E1]/50 text-[#7180BF] py-2 px-3  rounded-3xl ">Buy New</button>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 ">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Jackson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£103</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.4%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Mackson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£105</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.3%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Hukson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£101</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.2%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Sikson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£99</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.0%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Pikson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£90</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">1.8%</p>
                                                    </div>
                                                </td>


                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 ">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-base font-medium text-gray-500 "
                                                >
                                                    Options
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                                                >
                                                    <button className="bg-[#CBD0E1]/20 text-sm hover:bg-[#CBD0E1]/50 text-[#7180BF] py-2 px-3  rounded-3xl ">Buy New</button>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 ">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Jackson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£103</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.4%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Mackson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£105</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.3%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Hukson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£101</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.2%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Sikson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£99</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">2.0%</p>
                                                    </div>
                                                </td>


                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 ">
                                                    Pikson PLC
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                                                    <div className="flex gap-4 items-center justify-end">
                                                        <p className="bg-[#D8D8D8]/50 text-sm  text-black py-1 px-3 rounded-md ">£90</p>
                                                        <p className="font-bold text-sm text-[#4D8355]">1.8%</p>
                                                    </div>
                                                </td>


                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <>
                        <Swiper 
                        style={{
                            "--swiper-pagination-color": "#7180BF",
                            "--swiper-pagination-bullet-inactive-color": "#7180BF",
                            "--swiper-pagination-bullet-inactive-opacity": "0.25",
                            "--swiper-pagination-bullet-size": "16px",
                            "--swiper-pagination-bullet-width": "40px",
                            "--swiper-pagination-bullet-height": "3px",
                            "--swiper-pagination-bullet-horizontal-gap": "6px",
                            "--swiper-pagination-bullet-border-radius" : "20%"
                        }}
                            pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <h1 className="px-6 py-3 text-start text-base font-medium text-gray-500 ps-32 ">Tips</h1>
                                <div className="p-8">
                                    <div className='flex flex-col gap-4 bg-[#F7F7F7] p-8 rounded-3xl w-[330px] h-[261px] mx-auto '>
                                        <div className='flex justify-between items-center '>
                                            <h1 className='font-bold text-center'>Gold is up 20%</h1>
                                            <img src="/bar.png" alt="" />
                                        </div>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo…</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1 className="px-6 py-3 text-start text-base font-medium text-gray-500 ps-32 ">Tips</h1>
                                <div className="p-8">
                                    <div className='flex flex-col gap-4 bg-[#F7F7F7] p-8  rounded-3xl w-[330px] h-[261px] mx-auto '>
                                        <div className='flex justify-between items-center '>
                                            <h1 className='font-bold text-center'>Gold is up 20%</h1>
                                            <img src="/bar.png" alt="" />
                                        </div>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo…</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1 className="px-6 py-3 text-start text-base font-medium text-gray-500 ps-32 ">Tips</h1>
                                <div className="p-8">
                                    <div className='flex flex-col gap-4 bg-[#F7F7F7] p-8  rounded-3xl w-[330px] h-[261px] mx-auto '>
                                        <div className='flex justify-between items-center '>
                                            <h1 className='font-bold text-center'>Gold is up 20%</h1>
                                            <img src="/bar.png" alt="" />
                                        </div>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo…</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h1 className="px-6 py-3 text-start text-base font-medium text-gray-500 ps-32 ">Tips</h1>
                                <div className="p-8">
                                    <div className='flex flex-col gap-4 bg-[#F7F7F7] p-8  rounded-3xl w-[330px] h-[261px] mx-auto '>
                                        <div className='flex justify-between items-center '>
                                            <h1 className='font-bold text-center'>Gold is up 20%</h1>
                                            <img src="/bar.png" alt="" />
                                        </div>
                                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo…</p>
                                    </div>
                                </div>
                            </SwiperSlide>
<p className='swiper-button-next absolute right-36 bottom-1 text-right'>Next</p>
                        </Swiper>
                    </>


                </div>
            </div>
        </div>
    );
};

export default Table;