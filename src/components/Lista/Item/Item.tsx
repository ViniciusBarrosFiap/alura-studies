import { Itarefa } from "../../../types/tarefa"
import style from "./item.module.scss"
interface Props extends Itarefa{
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
  }
function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""} `} onClick={()=> selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="Item completo"></span>}
        </li>
    )
}
export default Item