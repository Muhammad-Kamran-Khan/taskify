import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../context/UserProvider";
import MiniSidebar from "../components/LeftSidebar";
import Header from "../components/Header";
import MainContentLayout from "../context/MainContentLayout";
import SidebarProvider from "../context/SidebarProvider";
import MainLayout from "../context/MainLayout";
import GTMInitialiser from "../context/GTMInitialiser";

export default function RootLayout() {
  return (
    <UserProvider>
      <GTMInitialiser />
      <Toaster position="top-center" toastOptions={{
        style: {
          zIndex: 9999,
        },
      }} />
      <div className="h-full flex overflow-hidden min-h-screen">
        <MiniSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <MainContentLayout>
            <MainLayout>
              <Outlet />
            </MainLayout>
            <SidebarProvider />
          </MainContentLayout>
        </div>
      </div>
    </UserProvider>
  );
}
