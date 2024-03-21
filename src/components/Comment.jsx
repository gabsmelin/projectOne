import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react';
import './Comment.module.css';
import style from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment(props) {
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/85140913?v=4"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.author}>
                            <strong>Gabriel Melo</strong>
                            <time title='22 de novembro de 2023 ás 18:30' dateTime='22/11/2023 18:30:30'>Cerde de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'><Trash size={24}/></button>
                    
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}
