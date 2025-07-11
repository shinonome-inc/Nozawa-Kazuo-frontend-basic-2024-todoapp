import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";
import Task from "../../../components/Molecules/Task/index.jsx";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index.jsx";

export default function TodoCard() {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTaskList([...taskList, newTask]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      setTaskList(taskList.filter((_, i) => i !== index));
    } else {
      setTaskList(
        taskList.map((task, i) =>
          i === index ? { ...task, name: value } : task
        )
      );
    }
  };

  useEffect(() => {
    const TaskJson = localStorage.getItem("taskList");
    if (TaskJson){
    setTaskList(JSON.parse(TaskJson))
    }
    }, []);

  useEffect(() => {
    localStorage.setItem("taskList",JSON.stringify(taskList))
  },[taskList]);


  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  align-items: flex-start;
`;
const StyledTaskList = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;
