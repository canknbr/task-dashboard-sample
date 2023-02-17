import { RxDashboard } from 'react-icons/rx';
import { RiTaskLine,RiSettings5Line } from 'react-icons/ri';
import {AiOutlineProject} from 'react-icons/ai';

export const NAVIGATION_MENU = [
    {
        id:0,
        title: 'Home',
        icon: <RxDashboard />,
        href : '/'
    },
    {
        id:1,
        title: 'Tasks',
        icon: <RiTaskLine />,
        href : '/tasks'
    },{
        id:2,
        title: 'Projects',
        icon: <AiOutlineProject />,
        href : '/projects'
    },
    {
        id:3,
        title: 'Settings',
        icon: <RiSettings5Line />,
        href : '/settings'
    }
]