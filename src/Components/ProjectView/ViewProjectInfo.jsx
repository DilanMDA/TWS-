import React, {useEffect, useRef, useState } from 'react';
import { Input, DatePicker, Modal, Tag } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';

const { RangePicker } = DatePicker;
const ViewProjectModal = ({modalVisibility,handleOK,handleCancel}) => {
    return (
        <>            
            <Modal title="Create Project" visible={modalVisibility} onOk={handleOK} onCancel={handleCancel}>
                <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <Input placeholder='Project Name' />
                <RangePicker />                        
                </div>                
            </Modal>            
        </>
    )
}

export default ViewProjectModal;