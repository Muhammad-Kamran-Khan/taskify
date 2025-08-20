import { useUserContext } from "./userContext"; // adjust as needed
import RightSidebar from "../components/RightSidebar";

function SidebarProvider() {
  const { user } = useUserContext() || {};
  const userId = user && user._id;

  return <>{userId && <RightSidebar />}</>;
}

export default SidebarProvider;