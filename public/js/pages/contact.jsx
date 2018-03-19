import React from 'react';
import FormContact from '../form-contact/form-contact';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		const contact = (
			<section className='contacto flex-center' id='Contact' onTouchMove={this.props.onTouchMove}>
				<FormContact />
			</section>
		);
		return contact;
	}

}
