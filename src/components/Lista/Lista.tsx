import Item from "./Item/Item"
import style from "./Lista.module.scss"
function Lista() {
    const tarefas = [
    {
        tarefa: "react",
        tempo: "02:00:00"
    },
    {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },
    {
        tarefa:"TypeScript",
        tempo:"01:30:00"
    }
    ]

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