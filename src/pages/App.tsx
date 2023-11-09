import Cronometro from "../components/Cronometro/Cronometro"
import Form from "../components/Form/Form"
import Lista from "../components/Lista/Lista"
import { Itarefa } from "../types/tarefa"
import style from "./App.module.scss"
import {useState} from "react"
function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas}/>
        <Lista tarefas={tarefas}/>
        <Cronometro/>
      </div>
    </>
  )
}

export default App
