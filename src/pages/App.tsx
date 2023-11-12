import Cronometro from "../components/Cronometro/Cronometro"
import Form from "../components/Form/Form"
import Lista from "../components/Lista/Lista"
import { Itarefa } from "../types/tarefa"
import style from "./App.module.scss"
import {useState} from "react"


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>()
   
  const selecionaTarefa = (tarefaSelecionada : Itarefa) =>{
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) =>
          tarefa.id === selecionado.id
            ? {
                ...tarefa,
                selecionado: false,
                completado: true,
              }
            : tarefa
        )
      );
    }
  };
  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas}/>
        <Lista 
          tarefas={tarefas}
          selecionaTarefa = {selecionaTarefa}/>
        <Cronometro 
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
      </div>
    </>
  )
}

export default App
