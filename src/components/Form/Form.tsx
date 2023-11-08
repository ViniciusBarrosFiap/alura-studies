import Button from "../Button/Button"
import "./style.scss"
function Form() {
    return (
        <form action="" className="novaTarefa">
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você gostaria de estudar..."
                required />
            </div>

            <div className="inputContainer">
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required />
            </div>
            <Button />
        </form>
    )
}
export default Form