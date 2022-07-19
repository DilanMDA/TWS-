import React, {useEffect, useRef, useState } from 'react';
import { Input, DatePicker, Space, Table, Button, Modal, Dropdown, Menu, Tag } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';

const { RangePicker } = DatePicker;

const columns = [
    {
      title: 'Task Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
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

const CreateProjectModal = () => {
    const handleMenuClick = (e) => {        
        console.log('click', e);
      };

    const menu = (
        <Menu
          onClick={handleMenuClick}
          items={[
            {
              label: '1st menu item',
              key: '1',
              icon: <UserOutlined />,
            },
            {
              label: '2nd menu item',
              key: '2',
              icon: <UserOutlined />,
            },
            {
              label: '3rd menu item',
              key: '3',
              icon: <UserOutlined />,
            },
          ]}
        />
      );
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
    return (
        <>
            <Button onClick={showModal}>Add New Project</Button>
            <Modal title="Create Project" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder='Project Name' />
                <RangePicker />
                <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
                Add Team Member
                </Dropdown.Button>
                <TeamMemberTags/>
            </Modal>
            
        </>

    )

}

const TeamMemberTags = () =>{
const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, []);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: 'inline-block',
        }}
      >
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              e.target.style = 'display: inline-block';
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200,
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  )
}

const ProjectView = ()=>{
    
    return(
        <div>
            <CreateProjectModal/>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            
        </div>
        
    )
}

export default ProjectView;