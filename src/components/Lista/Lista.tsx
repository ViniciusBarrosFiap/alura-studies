import Item from "./Item/Item"
import style from "./Lista.module.scss"
import { Itarefa } from "../../types/tarefa"
interface Props{
    tarefas: Itarefa[]
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
  }
function Lista({  tarefas, selecionaTarefa  } : Props) {
    return (
        <aside className={style.listaTerefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item) => {
                    return (
                        <Item
                            selecionaTarefa = {selecionaTarefa}
                            key={item.id}
                            // tarefa={item.tarefa}
                            // tempo={item.tempo}
                            {...item}

                        />
                    )
                })}

            </ul>
        </aside>
    )
}
export default Lista