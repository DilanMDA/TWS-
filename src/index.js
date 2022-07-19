import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { UserViewRoute, TasksViewRoute, ProjectViewRoute } from './Layouts/LayoutConstant';
import PageNotFound from './Components/Error/PageNotFound';
import SiderLayout from './Layouts/SiderLayout';
import UserView from './Components/UserView';
import ProjectView from './Components/ProjectView';
import TaskView from './Components/TaskView';
import Register from './Components/Register/Register';
import KanbanBoard from './Components/Kanban';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/sider" element={<SiderLayout/>}></Route>
      <Route path="admin">
        <Route path="users" element={<UserViewRoute/>}></Route>
      </Route>
      <Route path="manager">
        <Route path="projects" element={<ProjectViewRoute/>}></Route>
        <Route path="tasks" element={<TasksViewRoute/>}></Route>
      </Route>
      <Route path="member">
        <Route path="projects" element={<ProjectViewRoute/>}></Route>
        <Route path="tasks" element={<TasksViewRoute/>}></Route>
      </Route>
      <Route path="taskSheet" element={<KanbanBoard/>}></Route>
      <Route
      path="*"
      element={
        <PageNotFound/>
      }
    />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
