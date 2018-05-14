import React from 'react';

export default class FormContact extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			view: 1
		};
	}

	mostrarFormulario() {
		const emailBtn = document.getElementById('displayEmail');
		const contactBtn = document.getElementById('displayContact');

		emailBtn.classList.remove('active');
		contactBtn.classList.add('active');

		this.setState({
			view: 1
		});
	}

	mostrarCorreo() {
		const emailBtn = document.getElementById('displayEmail');
		const contactBtn = document.getElementById('displayContact');

		emailBtn.classList.add('active');
		contactBtn.classList.remove('active');

		this.setState({
			view: 0
		});
	}

	render() {
		var muestra;
		let form = (
			<div className='form-view flex-center'>
				<form className='grid-container'>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<input type='phone' placeholder='Phone' />
					<input type='text' placeholder='Address' />
					<textarea name='comentario' placeholder='Comment' id='' rows='10' />
					<input type='submit' value='SUBMIT'/>
				</form>
			</div>
		);
        
		let correo = (
			<div className='form-view'>
				<div className='flex-center'>
					<img src='src/img/mail-icon.png' />
					<p>contacto@groowly.com</p>
				</div>
			</div>
		);

		switch (this.state.view) {
		    case 1:
			    muestra = form;
			    break;
            
		    default:
			    muestra = correo;
			    break;
		}
        
        
		return (
			<div className='form-contact flex-center'>
				<h1>CONTACT</h1>
				<p>Comentario genial!</p>
				<div className='btn-actions'>
					<div className='btn-container'>
						<button className='flex-center active' id='displayContact' onClick={this.mostrarFormulario.bind(this)}>FORM</button>
						<button className='flex-center' id='displayEmail' onClick={this.mostrarCorreo.bind(this)}>CONTACT</button>
					</div>
				</div>
				{muestra}
			</div>
		);
        
	}

}
