import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
  Form,
  Button,
  Modal,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Space,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AdminView = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Kevin",
      address: "kevin address",
      email: "kevin@gmail.com",
    },
    {
      id: 2,
      name: "akila",
      address: "akila address",
      email: "akila@gmail.com",
    },
    {
      id: 3,
      name: "dilan",
      address: "dilan address",
      email: "dilan@gmail.com",
    },
    {
      id: 4,
      name: "Udara",
      address: "udara address",
      email: "udara@gmail.com",
    },
  ]);
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Name", dataIndex: "name" },
    { key: "3", title: "Address", dataIndex: "address" },
    { key: "4", title: "Email", dataIndex: "email" },
    {
      key: "5",
      title: "Action",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditEmployee(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteEmployee(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddAdmin = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newAdmin = {
      id: randomNumber,
      name: "Name" + randomNumber,
      address: " address" + randomNumber,
      email: randomNumber + "@gmail.com",
    };

    setDataSource((pre) => {
      return [...pre, newAdmin];
    });
  };

  const onDeleteEmployee = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this employee?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((employee) => employee.id !== record.id);
        });
      },
    });
  };

  const onEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null);
  };

  return (
    <Form component={false}>
      <Button title='Add new Admin' onClick={onAddAdmin}>
        Add a new Admin
      </Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title='Edit Employee'
        visible={isEditing}
        okText='Save'
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((employee) => {
              if (employee.id === editingEmployee.id) {
                return editingEmployee;
              } else {
                return employee;
              }
            });
          });
          resetEditing();
        }}>
        <Input
          value={editingEmployee?.name}
          onChange={(e) =>
            setIsEditing((pre) => {
              return { ...pre, name: e.target.value };
            })
          }
        />
        <Input
          value={editingEmployee?.address}
          onChange={(e) =>
            setIsEditing((pre) => {
              return { ...pre, address: e.target.value };
            })
          }
        />
        <Input
          value={editingEmployee?.email}
          onChange={(e) =>
            setIsEditing((pre) => {
              return { ...pre, email: e.target.value };
            })
          }
        />
      </Modal>
    </Form>
  );
};

export default AdminView;
