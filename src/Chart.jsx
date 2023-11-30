/* eslint-disable react/prop-types */
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '',
        uv: 0,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Jan',
        uv: 40000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Feb',
        uv: 115000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'March',
        uv: 100000,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'April',
        uv: 105000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'May',
        uv: 110000,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jun',
        uv: 120000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Jul',
        uv: 123000,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 190000,
        pv: 4300,
        amt: 2100,
    },
];

const Chart = () => {



    const CustomToolTip = props => {
        const { active, payload} = props;
        if (active && payload) {
            return (

                <div
                    className="custom-tooltip "
                >
                    <p className='label text-[#7180BF] bg-white/50 px-2 py-1 rounded-lg '>
                    £{payload[0].value.toLocaleString()}
                    </p>
                
                   
                </div>
            );
        }
        return null;
    }


    <Tooltip  formatter={(value) => new Intl.NumberFormat('en').format(value)} />
    return (

        <div className=' pb-12 relative'>

            <div className='mt-8 mx-16'>
                <h1 className='text-3xl'>Portfolio</h1>
                <button className="bg-[#CBD0E1]/20 text-sm hover:bg-[#CBD0E1]/50 text-[#7180BF] py-2 px-8  rounded-2xl mt-4 ">Buy New</button>
            </div>
            <h1 className='absolute z-10 right-36 bottom-36  text-[#7180BF] bg-white/70 p-2 cursor-none '>Our Prediction</h1>

            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%">
                    <AreaChart

                        data={data}
                        margin={{
                            top: 10,
                            right: 5,
                            left: 5,
                            bottom: 0,
                        }}
                    >

                        <XAxis   domain={["dataMin", "dataMax + 1"]} tickLine={false} tickMargin={10} dataKey="name" axisLine={false} />
                        <Tooltip  content={<CustomToolTip />} />
                        <Area type="monotone" dataKey="uv" strokeWidth={5} stroke="#7180BF" fill="#AFBDEA"  />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;