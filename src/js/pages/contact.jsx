import React from 'react';
import FormContact from '../form-contact/form-contact';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		console.log(this.props.history);
		const contact = (
			<section className='contacto .flex-center' id='Contact'>
				<FormContact />
			</section>
		);
		return contact;
	}

}
