import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return(
        <article className={style.post}>
            <header className={style.header}>
                <div className={style.author}>
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/85140913?v=4"/>
                    <div className={style.authorInfo}>
                        <strong>Gabriel Melo</strong>
                        <span>Developer</span>
                    </div>
                </div>
                <time title='22 de novembro de 2023 ás 18:30' dateTime='22/11/2023 18:30:30'>Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={style.form}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>

                <footer className={style.footer}>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}