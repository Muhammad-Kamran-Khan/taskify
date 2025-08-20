// taskUtils.js
import moment from "moment";

export const formatTime = (createdAt) => {
  const now = moment();
  const created = moment(createdAt);

  if (created.isSame(now, "day")) return "Today";

  if (created.isSame(now.clone().subtract(1, "days"), "day")) return "Yesterday";

  if (created.isAfter(moment().subtract(6, "days"))) return created.fromNow();

  if (created.isAfter(moment().subtract(3, "weeks"), "week")) return created.fromNow();

  return created.format("DD/MM/YYYY");
};

export const filteredTasks = (tasks, priority) => {
  switch (priority) {
    case "low": return tasks.filter(t => t.priority === "low");
    case "medium": return tasks.filter(t => t.priority === "medium");
    case "high": return tasks.filter(t => t.priority === "high");
    default: return tasks;
  }
};

export const overdueTasks = (tasks) => {
  const todayDate = moment().endOf("day");
  return tasks.filter(t => !t.completed && moment(t.dueDate).isBefore(todayDate));
};
