import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active'>
                            <LineStyleIcon />
                            <span>Home</span>
                        </li>
                        <li className='sidebarListItem'>
                            <TimelineIcon />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUpIcon />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <PersonIcon />
                            Users
                        </li>
                        <li className='sidebarListItem'>
                            <InventoryIcon />
                            Products
                        </li>
                        <li className='sidebarListItem'>
                            <AttachMoneyIcon />
                            Tranasctions
                        </li>
                        <li className='sidebarListItem'>
                            <AssessmentIcon />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <LocalPostOfficeIcon />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeedIcon />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleIcon />
                            Message
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkIcon />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <TimelineIcon />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <ReportIcon />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
