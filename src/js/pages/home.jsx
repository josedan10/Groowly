import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

	render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };

		const home = (
            <div>
                <section style={style} className='home' id='Home'> 
                    <h1>Hola groowly!</h1>
                </section>
            </div>
		);

		return home;
	}
}
