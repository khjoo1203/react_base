//import './App.css';
import {useState, useRef, useCallback} from 'react';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Form from './components/form/Form';
import Todo from './components/todo/Todo';
import List from './components/list/List';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id:3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

    const onRemove = useCallback(
      id=> {
      setTodos(todos.filter(todo => todo.id !== id))
      },
      [todos],
    )
  return (
    <div className="App">
      <Header />
      <Form onInsert={onInsert}/>
      <Layout />
      <Todo todos={todos}  onRemove={onRemove}/>
      <List />
    </div>
  );
}

export default App;
