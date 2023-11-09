import { Itarefa } from "../../types/tarefa"
import Button from "../Button/Button"
import style from "./Form.module.scss"
import {useState} from "react"
import {v4 as uuidv4} from "uuid"
interface Iform {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}
function Form({setTarefas} : Iform) {
    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState("")

    const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas, {tarefa: tarefa, tempo: tempo, selecionado: false, completado: false, id: uuidv4()},

            ])
    }
    return (
        <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você gostaria de estudar..."
                onBlur={(e)=>setTarefa(e.target.value)}
                required />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                onBlur={(e)=>setTempo(e.target.value)}
                required />
            </div>
            <Button 
                type = "submit"
                texto = "Adicionar"/>
        </form>
    )
}
export default Form