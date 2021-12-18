import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {Todo} from './Todo';

interface Props{}
interface State{
  tasks: Todo[]
  uniqueId: number
}
class App extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
    const todo: Todo = {title:"デフォルトTODO", id:0}
    this.state = { tasks: [todo],uniqueId: 1};
  }
  addTodo = (title: string) => {
    const task = { title, id: this.state.uniqueId + 1}
    const newTasks = [...this.state.tasks,task];
    this.setState({
      tasks: newTasks,
      uniqueId: this.state.uniqueId + 1,
    });
  }
  resetTodo = () => {
    this.setState({ tasks: [], uniqueId: 0 });
  }
  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;