import { RouterLinks } from "../RouterLinks";

type IconSidebarProps = {
    children: React.ReactNode;
    href: string;
}

export function IconSidebar({ children, href }: IconSidebarProps) {
    return(
        <RouterLinks href={href}>
            {children}
        </RouterLinks>
    );
}