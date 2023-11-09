import style from  "./Button.module.scss"
interface ButtonProps{
    type?: "button" | "submit" | "reset" | undefined 
    texto?: string
}
function Button({type,  texto}:ButtonProps){
    return (
        <button type={type} className={style.botao}>
            {texto}
        </button>
    )
}
export default Button