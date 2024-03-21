import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt';

import style from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
    const publishDataFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale:ptBr});
    const publishDataRelativeNow = formatDistanceToNow(publishedAt, {locale:ptBr, addSuffix: true});


    const [newCommenttText, setNewCommenttText] = useState('');
    const [comments, setComments] = useState([
        "Post muito bom!",
    ])
    function handleCreationNewComment() {
        event.preventDefault();

        setComments([...comments,  newCommenttText]);
        setNewCommenttText('');
    }
    function handleNewCommenttText() {
        setNewCommenttText(event.target.value);
    }


  
    return(
        <article className={style.post}>
            <header className={style.header}>
                <div className={style.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishDataFormatted} dateTime={publishedAt.toISOString()}>{publishDataRelativeNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    } 
                })}
            </div>

            <form onSubmit={handleCreationNewComment} className={style.form}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment' 
                    placeholder='Deixe seu comentário'
                    onChange={handleNewCommenttText} 
                    value={newCommenttText}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment content={comment}/>
                    )
                })}
            </div>
        </article>
    )
}