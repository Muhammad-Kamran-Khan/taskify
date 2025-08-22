// src/context/taskContext.jsx
import axios from "axios";
import { createContext, useEffect, useContext, useState } from "react";
import { useUserContext } from "./userContext";
import toast from "react-hot-toast";

const TasksContext = createContext();
const serverUrl = import.meta.env.VITE_BACKEND_URL;

export function TasksProvider({ children }) {
  const { user } = useUserContext();
  const userId = user?._id;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [priority, setPriority] = useState("all");
  const [activeTask, setActiveTask] = useState(null);
  const [modalMode, setModalMode] = useState("");
  const [profileModal, setProfileModal] = useState(false);

  const openModalForAdd = () => {
    setModalMode("add");
    setIsEditing(true);
    setTask({});
  };

  const openModalForEdit = (task) => {
    setModalMode("edit");
    setIsEditing(true);
    setActiveTask(task);
  };

  const openProfileModal = () => setProfileModal(true);

  const closeModal = () => {
    setIsEditing(false);
    setProfileModal(false);
    setModalMode("");
    setActiveTask(null);
    setTask({});
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${serverUrl}/tasks`);
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.error("Error getting tasks", err);
    }
    setLoading(false);
  };

  const getTask = async (taskId) => {
    setLoading(true);
    try {
      const res = await axios.get(`${serverUrl}/task/${taskId}`);
      setTask(res.data);
    } catch (err) {
      console.error("Error getting task", err);
    }
    setLoading(false);
  };

  const createTask = async (newTask) => {
    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/task/create`, newTask);
      setTasks((prev) => [...prev, res.data]);
      toast.success("Task created successfully");
    } catch (err) {
      console.error("Error creating task", err);
    }
    setLoading(false);
  };

  const updateTask = async (updatedTask) => {
    setLoading(true);
    try {
      const res = await axios.patch(`${serverUrl}/task/${updatedTask._id}`, updatedTask);
      setTasks((prev) =>
        prev.map((t) => (t._id === res.data._id ? res.data : t))
      );
      toast.success("Task updated successfully");
    } catch (err) {
      console.error("Error updating task", err);
    }
    setLoading(false);
  };

  const deleteTask = async (taskId) => {
    setLoading(true);
    try {
      await axios.delete(`${serverUrl}/task/${taskId}`);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      console.error("Error deleting task", err);
    }
    setLoading(false);
  };

  const handleInput = (name) => (e) => {
    if (name === "setTask") {
      setTask(e);
    } else {
      setTask((prev) => ({ ...prev, [name]: e.target.value }));
    }
  };

  const completedTasks = tasks.filter((t) => t.completed);
  const activeTasks = tasks.filter((t) => !t.completed);

  useEffect(() => {
    if (userId) getTasks();
  }, [userId]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        task,
        getTask,
        createTask,
        updateTask,
        deleteTask,
        priority,
        setPriority,
        handleInput,
        isEditing,
        setIsEditing,
        openModalForAdd,
        openModalForEdit,
        activeTask,
        closeModal,
        modalMode,
        openProfileModal,
        activeTasks,
        completedTasks,
        profileModal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

// ✅ Always top-level, stable hook
export function useTasks() {
  return useContext(TasksContext);
}
