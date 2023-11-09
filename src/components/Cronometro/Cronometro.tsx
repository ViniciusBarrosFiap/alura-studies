import Button from "../Button/Button";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss"
function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o crônometro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Button
                texto="Começar!"/>
        </div>
    )
}
export default Cronometro