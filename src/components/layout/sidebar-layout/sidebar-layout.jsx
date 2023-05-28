import MainLayout from "../main-layout/main-layout";
import Sidebar from "./sidebar/sidebar";

export default function SidebarLayout(props) {
    return (
        <MainLayout { ...props }>
            <Sidebar />
        </MainLayout>
    )
}
