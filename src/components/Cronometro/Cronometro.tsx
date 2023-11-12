import Button from "../Button/Button";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/tarefa";
import { useState, useEffect } from "react";
interface CronometroProps {
    selecionado: Itarefa | undefined
}
function Cronometro({ selecionado }: CronometroProps) {
    const [tempo, setTempo] = useState<number>()
    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
        }, 1000);
    }
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o crônometro</p>

            <div className={style.relogioWrapper}>
                <Relogio
                    tempo={tempo} />
            </div>
            <Button
                texto="Começar!"
                onCLick={() => regressiva(tempo)}
            />
        </div>
    )
}
export default Cronometro