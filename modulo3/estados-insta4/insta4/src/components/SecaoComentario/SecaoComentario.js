import React from 'react'
import './style.css'

export function SecaoComentario(props) {

	return (
		
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={''}
				value={''}
				onChange={props.onChangeComentario}
			/>
			<h4>
				
			</h4>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}
