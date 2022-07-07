import React, {useState} from "react"

function Form1() {

    return(

        <div>
            <form>
                <label>Digite seu usuário
                    <input 
                         type='text' 
                        name='usuario'
                    />
                </label>
                <input type='submit' value='Enviar'/>
            </form>

        </div>
    )

    
}

export default Form1