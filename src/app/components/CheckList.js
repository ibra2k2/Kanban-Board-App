import React from 'react';
import ReactDOM from 'react-dom';

export class CheckList extends React.Component {
	render(){
		let tasks = this.props.tasks.map((task)=>(
			<li key={task.id} className="">
			   <input type="checkbox" defaultChecked={task.done} />
			   {task.name}{" "}
			   <a className="" href="http://google.com">Google />{" "}
			   <a className="" href="http://facebook.com">Faceboo />
			</li>
		));

		return(
           <div className="">
              <ul>{tasks}</ul>
           </div>
		);

	}
}