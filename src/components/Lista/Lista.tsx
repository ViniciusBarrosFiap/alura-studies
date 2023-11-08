import "./style.scss"
function Lista() {
    const tarefas = [{
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
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>
            <ul >
                {tarefas.map((item, index) => {
                    return (
                        <li key={index} className="item">
                            <h3>
                                {item.tarefa}
                            </h3>
                            <span>
                                {item.tempo}
                            </span>
                        </li>
                    )
                })}

            </ul>
        </aside>
    )
}
export default Lista