import { Menu } from 'antd';
import {HomeOutlined} from '@ant-design/icons';

function MenuList(){
    return(
        <Menu mode='inline' className='menu-bar'>
            <Menu.Item key="Home" icon={<HomeOutlined/>}>
                Home
            </Menu.Item>
            <Menu.Item key="Resume" icon={<HomeOutlined/>}>
                Resume
            </Menu.Item>
            <Menu.Item key="Contact" icon={<HomeOutlined/>}>
                Contact
            </Menu.Item>
        </Menu>
    )
}

export default MenuList