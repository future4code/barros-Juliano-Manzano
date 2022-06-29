import React from 'react'
import './style.css'

export function SecaoComentario(props) {
	return (
		
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder ={'comentario'}
				value={props.valor}
				onClick={props.onChangeComentario}
			/>
			
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}
