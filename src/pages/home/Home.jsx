import React from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Cahrt from '../../components/chart/Cahrt'
import { userData } from '../../components/dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Cahrt data={userData} title="User Analytics" dataKey="Active User" pv="pv" />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home