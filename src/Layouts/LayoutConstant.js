import SiderLayout from "./SiderLayout";
import UserView from "../Components/UserView";
import TaskView from "../Components/TaskView";
import ProjectView from "../Components/ProjectView";
export const UserViewRoute = SiderLayout(UserView);
export const TasksViewRoute = SiderLayout(TaskView);
export const ProjectViewRoute = SiderLayout(ProjectView);