import {
    TeamOutlined,    
  } from '@ant-design/icons';
  import {Layout, Menu } from 'antd';
  import React from 'react';
  import {Link} from 'react-router-dom';

  const { Header, Content, Footer, Sider } = Layout;
  
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    {label:<Link to="/manager/projects">Projects</Link>,key:'0'},
    {label:<Link to="/manager/tasks">Tasks</Link>,key:'1'},
    {label:<Link to="/manager/teams">Teams</Link>,key:'2',icon:<TeamOutlined />},
    {label:'TimeSheets',key:'3'},    
  ];
  
  const SiderLayout = (ContentDiv) => ({...props}) =>{
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={false} onCollapse={(value) => console.log('test')}>
        <img src="https://logomaker-assets.s3.amazonaws.com/sites/all/themes/logomaker/images/2021-LogoMaker-Site-Logo.png" alt="LogoMaker Logo" class="align-4 max-width-100 " width="190" height="60"/>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >        
            <ContentDiv {...props}/>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default SiderLayout;