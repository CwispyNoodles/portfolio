import {Layout} from 'antd';
import MenuList from '../components/MenuList';
import Hero from '../components/Hero';

const {Header, Sider, Content} = Layout;

function Home(){
    return(
        <Layout>
            <Sider collapsed={false} collapsible trigger={null} className='navbar'>
                <MenuList/>
            </Sider>
            <div className='content'>
                <Hero/>

                <div className='section'>
                    <div className='aboutme-overlay'>
                        <div className='aboutme-overlay-filler'/>
                        <div className='aboutme-overlay-1-2'/>
                        <div className='aboutme-overlay-filler'/>
                        <div className='aboutme-overlay-1-4'/>
                    </div>
                    <div className='aboutme'>
                        <div className='aboutme-1-1'>
                            <p className='aboutme-section'>02-1</p>
                            <p className='aboutme-header'>ABOUT ME</p>
                            <p className='aboutme-header-colorcode'>#464646</p>
                            
                        </div>
                        <div className='aboutme-1-2'>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vitae! Beatae ipsum nostrum laborum in, doloribus ad, explicabo et officiis totam labore eos? Cumque hic odit, facilis laborum labore atque.</h1>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <div className='aboutme-overlay'>
                        <div className='aboutme-overlay-filler'/>
                        <div className='aboutme-overlay-filler'/>
                        <div className='aboutme-overlay-2-3'/>
                        <div className='aboutme-overlay-filler'/>
                    </div>
                    <div className='aboutme'>
                        <div className='aboutme-2-1'>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vitae! Beatae ipsum nostrum laborum in, doloribus ad, explicabo et officiis totam labore eos? Cumque hic odit, facilis laborum labore atque.</h1>
                        </div>
                        <div className='aboutme-2-2'>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vitae! Beatae ipsum nostrum laborum in, doloribus ad, explicabo et officiis totam labore eos? Cumque hic odit, facilis laborum labore atque.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home