import React from 'react';
import Swipeable from 'react-swipeable';

export default class Community extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			community: null
		};
	}
    
	showCommunity(e) {
		var communities = document.getElementsByClassName('view-screen');
		let index;
		e.target.classList.add('target');

		for (let i = 0; i < communities.length; i++) {
			if (communities[i].classList.contains('target')) {
				index = i;
				break;
			}
		}
        
		this.setState({
			community: index
		});

		document.getElementById('communityTitle').classList.remove('show');
		document.getElementById('communityTitle').classList.add('hide');
		document.getElementById('widget').classList.add('slideInDown');
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
	}
    
	closeWidget() {        
		

		document.getElementsByClassName('target')[0].classList.remove('target');

		document.getElementById('communityTitle').classList.add('show');
		document.getElementById('communityTitle').classList.remove('hide');

		document.getElementById('widget').classList.add('slideOutUp');

		setTimeout(() => {
			this.setState({
				community: null
			});
			if (window.innerWidth <= 768)
				document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		}, 800);
	}

	render() {
		return (
			<div className='flex-center'>

				<h1 id='communityTitle'>MEET OUR OWN DIGITAL COMMUNITY</h1>
				<div className='flex-presentation'>

					{this.props.communities.map(community => 
						(<div className='flex-center' key={'community-' + community.name} onClick={this.showCommunity.bind(this)}>
							<img className='community-image image-big' src={community.img_big} />
							<img className='community-image image-mobile' src={community.img_mobile} />
							<div className='view-screen' />
						</div>)
					)}
	
				</div>
				<InstagramWidget communities={this.props.communities} index={this.state.community} onClick={this.closeWidget.bind(this)}/>
			</div>
		);
	}
}

class CommunityData extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='flex-center community-data'>
				<h3>{this.props.community.name}</h3>
				<h4>{this.props.community.followers}K followers</h4>
				<div className='descripcion'>
					{this.props.community.description}
				</div>
			</div>
		);
	}
}

class InstagramWidget extends React.Component {
	constructor(props) {
		super(props);
		this.widgets = this.props.communities.map(
			community => community.script
		);
	}

	render() {
		console.log(this.widgets);
		
		let container = <div className='community-widget' id='widget'/>;
        
		if (this.props.index !== null) {
            
			container = (
				<Swipeable onSwipingUp={this.props.onClick}>
					<div id='widget' className='community-widget slideInDown' onClick={this.props.onClick}>
						<div className='widget-container flex-center'>
							<Swipeable onSwipingUp={this.props.onClick}>
								{this.widgets[this.props.index]}
							</Swipeable>
						</div>
						{/* <CommunityData community={this.props.communities[this.props.index]}/> */}
					</div>
				</Swipeable>
			);
		}
        
		return container;
	}
}
