import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

export class KanbanBoard extends React.Component {
	render(){
		return(
			<div className="">
			   <List id='' title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")} />
			   <List id='' title="In Progress" cards={this.props.cards.filter((card) => card.status === "in-progress")} />
			   <List id='' title="Done" cards={this.props.cards.filter((card) => card.status === "done")} />
			</div>
		);
	}
}