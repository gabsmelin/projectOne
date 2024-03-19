import style from './Avatar.module.css'
 
export function Avatar(props) {
    return(
        <img className={props.hasBorder ? style.avatarWithBorder : style.avatar}  src={props.src} />         
    )
}