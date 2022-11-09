import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import  AddArea  from './components/AddArea.';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1 , name: 'Estudar reactjs', done: true},
    {id: 2 , name: 'Estudar SQL', done: false}

  ])

  const handleAddTask = (taskname: string) => {
      let newlist = [...list]
      newlist.push({
        id: list.length + 1, name: taskname, done: false
      })
      setList(newlist)
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
   <C.Container>
    <C.Area>
      <C.Header>Todo List</C.Header>

    <AddArea onEnter={handleAddTask}/>

  {list.map((item)=>(
    <ListItem 
    item={item}
    key={item.id}
    onChange={handleTaskChange}
    />
  ))}

    </C.Area>
   </C.Container>
  )
}

export default App
