import React from "react"
import { Tabs } from 'antd';
import UserEntryForm from "./UserEntryForm";
const { TabPane } = Tabs;


const UserEntryTabs = () =>{
    return(
        <Tabs defaultActiveKey="1">
        <TabPane tab="Admin" key="1">
            <UserEntryForm/>
        </TabPane>
        <TabPane tab="Member" key="2">
            <UserEntryForm/>
        </TabPane>
        <TabPane tab="Manager" key="3">
          <UserEntryForm/>
        </TabPane>
      </Tabs>
    )
}

export default UserEntryTabs;