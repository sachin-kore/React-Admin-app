import { Chart } from '../chart/Chart'
import { FeaturedInfo } from '../featuredInfo/FeaturedInfo';
import './home.css'
import { userData } from '../../dummyData';
import { WidgetLg } from '../widgetLg/WidgetLg';
import { WidgetSm } from '../WidgetSm/WidgetSm';




export const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active user" />
            <div className='homewidgets'>
                <WidgetSm className='homewidgetSm' />
                <WidgetLg className='homewidgetLg' />
            </div>
        </div>
    )
}
