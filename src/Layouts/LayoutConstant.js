import SiderLayout from "./SiderLayout";
import UserView from "../Components/UserView";
import TaskView from "../Components/TaskView";
import ProjectView from "../Components/ProjectView";
import KanbanBoard from "../Components/Kanban";
export const UserViewRoute = SiderLayout(UserView);
export const TasksViewRoute = SiderLayout(TaskView);
export const ProjectViewRoute = SiderLayout(ProjectView);
export const TaskSheetRoute = SiderLayout(KanbanBoard);