import style from  "./Button.module.scss"
interface ButtonProps{
    type?: "button" | "submit" | "reset" | undefined 
    texto?: string
    onCLick?: ()=> void
}
function Button({type,  texto, onCLick}:ButtonProps){
    return (
        <button onClick={onCLick} type={type} className={style.botao}>
            {texto}
        </button>
    )
}
export default Button