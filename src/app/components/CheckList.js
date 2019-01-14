import React from 'react';
import ReactDOM from 'react-dom';

export class CheckList extends React.Component {
	render(){
		let tasks = this.props.tasks.map((task)=>(
			<li key={task.id} className="">
			   <input type="checkbox" defaultChecked={task.done} />
			   {task.name}
			   <a href="#" className="" />
			</li>
		));

		return(
           <div className="">
              <ul>{tasks}</ul>
           </div>
		);

	}
}