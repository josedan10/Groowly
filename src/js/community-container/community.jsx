import React from 'react';

export default class Community extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			community: null
		};
	}
    
	showCommunity(e) {
		var communities = document.getElementsByClassName('community-image');
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
		}, 800);
	}

	render() {
		return (
			<div className='flex-center'>
				<InstagramWidget communities={this.props.communities} index={this.state.community} onClick={this.closeWidget.bind(this)}/>

				<h1 id='communityTitle'>MEET OUR OWN DIGITAL COMMUNITY</h1>
				<div className='flex-presentation'>

					{this.props.communities.map(community => 
						(<div className='flex-center' key={'community-' + community.name} onClick={this.showCommunity.bind(this)}>
							<div className='view-screen' />
							<img className='community-image' src={community.img} />
						</div>)
					)}
	
				</div>
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
		this.widgets = [
			<iframe src='//lightwidget.com/widgets/3faadf6a917f56c794bd99ad839f02ca.html' scrolling='no' allowtransparency='true' className='lightwidget-widget' style={{ width: '100%', border: '0', overflow: 'hidden' }}/>

		];
	}

	render() {
		let container = <div className='community-widget' id='widget'/>;
        
		if (this.props.index !== null) {
            
			container = (
				<div id='widget' className='community-widget slideInDown' onClick={this.props.onClick}>
					<div className='widget-container flex-center'>
						{this.widgets[this.props.index]}
					</div>
					{/* <CommunityData community={this.props.communities[this.props.index]}/> */}
				</div>
			);
		}
        
		return container;
	}
}
