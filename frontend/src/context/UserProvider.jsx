import { UserContextProvider } from "./userContext";
import { TasksProvider } from "./taskContext";


export function UserProvider({ children }) {
  return (
    <UserContextProvider>
      <TasksProvider>{children}</TasksProvider>
    </UserContextProvider>
  );
}
