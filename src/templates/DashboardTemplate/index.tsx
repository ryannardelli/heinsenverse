import { Sidebar } from "../../components/Sidebar";

type DashboardTemplateProps = {
    children: React.ReactNode;
}

export default function DashboardTemplate({children}: DashboardTemplateProps) {
    return(
        <>
            <Sidebar />
            {children}
        </>
    );
}