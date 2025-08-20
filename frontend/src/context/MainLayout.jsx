import Modal from "../components/Modal";
import ProfileModal from "../components/ProfileModal";
import { useTasks } from "./taskContext";


function MainLayout({ children }) {
  const { isEditing, profileModal } = useTasks();
  return (
    <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto">
      {isEditing && <Modal />}
      {profileModal && <ProfileModal />}
      {children}
    </div>
  );
}

export default MainLayout;