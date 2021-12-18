import React,{Component} from "react";
import {Todo} from "./Todo"

class TodoItem extends Component<Todo>{
    render(){
        return(
            <li>
                {this.props.title}
            </li>
        );
    }
}

export default TodoItem;