import React,{Component} from "react";
import TodoItem from "./TodoItem"
import {Todo} from "./Todo"

interface Tasks{
    tasks: Todo[]
}

class TodoList extends Component<Tasks>{
    render(){
        const list = this.props.tasks.map((todo,index)=>{
            return <TodoItem {...todo} key={index} />
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;