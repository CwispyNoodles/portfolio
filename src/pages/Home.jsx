import {Layout} from 'antd';
import MenuList from '../components/MenuList';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

const {Header, Sider, Content} = Layout;

function Home(){
    return(
        <Layout>
            <Sider collapsed={true} collapsible trigger={null} className='navbar'>
                <MenuList/>
            </Sider>
            <div className='content'>
                <Hero/>
                <AboutMe/>
            </div>
        </Layout>
    );
}

export default Home