import { PencilLine } from "phosphor-react";
import style from './SideBar.module.css';
import { Avatar } from "./Avatar";

export function SideBar() {
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'" alt="" />
            
            <div className={style.profile}>
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/85140913?v=4" />

                <strong>Gabriel Melo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}