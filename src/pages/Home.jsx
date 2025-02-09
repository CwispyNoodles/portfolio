// import Header from "../components/Header";

import {Layout} from 'antd';
import MenuList from '../components/MenuList';
import {Button} from 'antd'
import { useState } from 'react';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'

const {Header, Sider} = Layout;

function Home(){
    const [collapsed, setCollapsed] = useState(true);
    return(
        <Layout>
            <Sider className="sidebar" collapsed={collapsed} collapsible trigger={null}>
                Sidebar
                <MenuList></MenuList>
            </Sider>
            <Layout>
                <Button type='text' className='toggle' onClick={()=>setCollapsed(!collapsed)} icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}>
                </Button>
            </Layout>
        </Layout>
        // <>
        //     <Header title="Home"></Header>
        //     <div className="test">
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>

        //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio debitis ea, at nulla neque nesciunt magnam corrupti quaerat dolorum numquam esse doloribus aspernatur velit a provident quod error ipsa asperiores.</p>
        //     </div>
        // </>
        
        // <div className="a"> 
        //     <div className="b">
        //         <p>1</p>
        //         <p>2</p>
        //         <p>3</p>
        //         <p>4</p>
        //         <p>5</p>
        //     </div>     
        //     <div className="c">
        //         <div className="hero">
        //             <p>1</p>
        //             <p>2</p>
        //             <p>3</p>
        //             <p>4</p>
        //             <p>5</p>                            
        //         </div>
        //         <div className="e">
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum, tempore sit voluptates ullam aliquam molestiae a nemo libero veritatis rerum quia molestias quisquam eum amet repellendus ipsa expedita impedit?</p>
        //         </div>  
        //         <div className="d">
        //             <p>1</p>
        //             <p>2</p>
        //             <p>3</p>
        //             <p>4</p>
        //             <p>5</p>                            
        //         </div>   
        //         <div className="e">
        //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum, tempore sit voluptates ullam aliquam molestiae a nemo libero veritatis rerum quia molestias quisquam eum amet repellendus ipsa expedita impedit?</p>
        //         </div>           
        //     </div>    
        // </div>

        
    );
}

export default Home