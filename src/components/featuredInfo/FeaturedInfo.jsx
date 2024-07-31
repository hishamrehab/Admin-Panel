import React from 'react'
import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className='featuredTitle'>
                    Revanue
                </span>
                <div className='featuredMenuContainer'>
                    <span className='featuredMoney'>
                        $2.415 <ArrowUpwardIcon className='featuredIcon positive' />
                    </span>
                    <span className='featuredMoneyRate'>
                        $-18.4  <ArrowDownwardIcon className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>


            <div className="featuredItem">
                <span className='featuredTitle'>
                    Sales
                </span>
                <div className='featuredMenuContainer'>
                    <span className='featuredMoney'>
                        $18.415 <ArrowUpwardIcon className='featuredIcon positive' />
                    </span>
                    <span className='featuredMoneyRate'>
                        $-11.4  <ArrowDownwardIcon className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>


            <div className="featuredItem">
                <span className='featuredTitle'>
                    Const
                </span>
                <div className='featuredMenuContainer'>
                    <span className='featuredMoney'>
                        $8.415 <ArrowUpwardIcon className='featuredIcon positive' />
                    </span>
                    <span className='featuredMoneyRate'>
                        $-2.4  <ArrowDownwardIcon className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>



        </div>
    )
}

export default FeaturedInfo