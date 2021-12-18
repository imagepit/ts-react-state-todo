import React,{Component} from "react";

interface Props{
    addTodo:(title:string) => void
}
interface State{
    inputValue: string
}

class TodoInput extends Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = { inputValue: '' }
    }
    handleClick = () => {
        this.props.addTodo(this.state.inputValue);
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value });
    }
    render(){
        return (
            <div>
                <input placeholder="新規TODOを入力してください" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>登録</button>
            </div>
        );
    }
}
export default TodoInput;