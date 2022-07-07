function Form() {

    function enviarMensagem(evento) {
        evento.preventDefault()
        console.log("cadastrou");
    }

    return(
        <div>
            <form onSubmit={enviarMensagem}>
                <div>
                    <input type="text" placeholder="digite"/>
                </div>
                <div>
                    <input type='submit' value="cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form