import style from  "./Button.module.scss"
interface ButtonProps{
    texto: string
}
function Button({texto}:ButtonProps){
    return (
        <button className={style.botao}>
            {texto}
        </button>
    )
}
export default Button