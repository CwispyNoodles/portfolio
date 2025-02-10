import { Menu } from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";

function MenuList(){
    return(
        <Menu className='menulist'>
            <Menu.Item key="Home" icon={<HomeOutlined/>}>
                Home
            </Menu.Item>
            <Menu.Item key="Resume" icon={<HomeOutlined/>}>
                <Link to="/About">Resume</Link>
            </Menu.Item>  
            
            <Menu.Item key="Contact" icon={<HomeOutlined/>}>
                Contact
            </Menu.Item>
        </Menu>
    )
}

export default MenuList