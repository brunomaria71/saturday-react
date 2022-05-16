import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemList from './components/TodoItemList';

function App() {

  const itemList = [
    {title: "Need Butter", isCompleted: true},
    {title: "Need Bread", isCompleted: false},
    {title: "Need Banana", isCompleted: true},
    {title: "Need Booze", isCompleted: true},
    {title: "Need Berries", isCompleted: true},
    {title: "Need Butter", isCompleted: true}




  
  ]

  return (
    <div className="App">
      <header className="App-header">
        <TodoItemList items={itemList} />
        <TodoItem title={itemList[0].title} isCompleted={itemList[0].isCompleted}/>
        <TodoItem title={itemList[1].title} />

      </header>
    </div>
  );
}

export default App;
