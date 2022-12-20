import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='toprleft'>
                    <span className='logo'>lamadmin</span>
                </div>
                <div className='topright'>
                    <div className='topbarIcons'>
                        <NotificationsNoneIcon className='Icon' />
                        <span className='topBedge'>2</span>
                    </div>
                    <div className='topbarIcons'>
                        <LanguageIcon className='Icon' />
                        <span className='topBedge'>2</span>
                    </div>
                    <div className='topbarIcons'>
                        <SettingsIcon className='Icon' />
                    </div>
                    <img className='topbarImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' />
                </div>
            </div>


        </div>
    )
}
