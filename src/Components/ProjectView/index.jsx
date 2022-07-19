import React, {useEffect, useRef, useState } from 'react';
import { Input, DatePicker, Space, Table, Button, Modal, Dropdown, Menu, Tag } from 'antd';
import CreateProjectModal from './CreateProjectModal';
const { RangePicker } = DatePicker;


const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
    },
    {
      title: 'End Date',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Status',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'Team',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
        title: 'Actions',
        render: () => (<Button>Add Tasks</Button>)
    }
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];
  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
const ProjectView = ()=>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    }
    
    return(
        <div>
            <div style={{display:"grid",justifyContent:"end"}}>
                <Button onClick={showModal}>Create New Project</Button>
            </div>
            <CreateProjectModal modalVisibility={isModalVisible} handleOK={handleOk} handleCancel={handleCancel}/>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            
        </div>
        
    )
}

export default ProjectView;