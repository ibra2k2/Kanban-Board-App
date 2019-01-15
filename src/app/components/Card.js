import React from 'react';
import ReactDOM from 'react-dom';
import { CheckList } from './CheckList';
import marked from 'marked';


export class Card extends React.Component {
	constructor () {
		super(...arguments);
		this.state = {
			showDetails: 'false'
		};
	}
    toggleDetails() {
    	this.setState({showDetails: !this.state.showDetails});
    }

	render(){
		let cardDetails;
		if (this.state.showDetails){
			cardDetails = (
				<div className="card-text">
				  <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
			      <CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
			);
		}
		let sideColor={
			// position: "absolute",
			//backgroundColor: this.props.color,
			borderLeft: "4px solid" + this.props.color,
			paddingLeft: "5px",
		};
		return(
			   <div className="card">
			    <div style={sideColor}>
			     <div className="card-title" onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
			     {cardDetails}
			    </div>    
			   </div>

		);
	}
}