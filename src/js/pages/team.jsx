import React from 'react';
import PresentationFrame from '../presentation-container/presentation';

const datos = [
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	},
	{
		nombre: 'Jose Quintero',
		cargo: 'Web Developer',
		img: 'src/img/meCaricautre.jpg',
		descripcion: ' Consectetur in incididunt culpa est do pariatur. Do et magna ut mollit sunt adipisicing sunt sit ipsum.'
	}
];

export default class Team extends React.Component {
    constructor(props){
        super(props);
    }
    
	render() {
		const team = (
			<section className='team flex-center' id='Team' onTouchMove={this.props.onTouchMove}>
				<PresentationFrame datos={datos}/>
			</section>
		);
		return team;
	}
}


