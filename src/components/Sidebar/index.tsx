import { Bell, Files, LayoutDashboard, SquarePen, User } from 'lucide-react';
import { ContainerLinks } from '../ContainerLinks';
import { IconSidebar } from '../IconSidebar';
import styles from './styles.module.css';

export function Sidebar() {
    return(
        <div className={styles.container}>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <IconSidebar href='/'>
                            <ContainerLinks>
                                <LayoutDashboard />
                                Dashboard
                            </ContainerLinks>
                        </IconSidebar>
                    </li>

                    <li>
                        <IconSidebar href='/'>
                            <ContainerLinks>
                                <Files />
                                Postagens
                            </ContainerLinks>
                        </IconSidebar>
                    </li>

                    <li>
                        <IconSidebar href='/'>
                            <ContainerLinks>
                                <SquarePen />
                                Criar Postagem
                            </ContainerLinks>
                        </IconSidebar>
                    </li>

                    <li>
                        <IconSidebar href='/'>
                            <ContainerLinks>
                                <User />
                                Perfil
                            </ContainerLinks>
                        </IconSidebar>
                    </li>

                    <li>
                        <IconSidebar href='/'>
                            <ContainerLinks>
                                <Bell />
                                Notificações
                            </ContainerLinks>
                        </IconSidebar>
                    </li>
                </ul>
            </div>
        </div>
    );
}