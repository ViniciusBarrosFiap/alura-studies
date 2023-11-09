import Item from "./Item/Item"
import style from "./Lista.module.scss"
import { Itarefa } from "../../types/tarefa"
function Lista({  tarefas  } : {tarefas: Itarefa[]}) {
    return (
        <aside className={style.listaTerefas}>
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => {
                    return (
                        <Item
                            key={index}
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