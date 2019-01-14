import React from 'react';
import ReactDOM from 'react-dom';
import { CheckList } from './CheckList';


export class Card extends React.Component {
	render(){
		return(
			<div className="">
			   <div className="">
			     <div className="">{this.props.title}</div>   
			      {this.props.description}
			      <CheckList cardId={this.props.id} tasks={this.props.tasks} />
			   </div>
			</div>
		);
	}
}