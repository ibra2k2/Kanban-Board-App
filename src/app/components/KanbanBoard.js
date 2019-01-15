import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

export class KanbanBoard extends React.Component {
	render(){
		return(
			<div className="container">
			  <div className="row justify-content-center">
			   <List className="col-4" title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")} />
			   <List className="col-4" title="In Progress" cards={this.props.cards.filter((card) => card.status === "in-progress")} />
			   <List className="col-4" title="Done" cards={this.props.cards.filter((card) => card.status === "done")} />
			  </div> 
			</div>
		);
	}
}