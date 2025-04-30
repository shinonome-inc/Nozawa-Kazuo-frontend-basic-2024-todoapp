import Task from "./index";

export default {
  component:Task,
};

export const Default = {
  args: {
    onTaskNameChange :(taskName) => {
      console.log("taskname changed:",taskName);
    },
    onTaskComplete :() => {
      console.log("task completed");
    },
    taskName : "",
    defaultIsEditing: false,
  },
};
