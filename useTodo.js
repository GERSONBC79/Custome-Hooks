import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer"


const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []; //recuper lo almacenado en el localStorage 
  }

export const useTodo = ( ) => {
  
  

      const [todos, dispatch] = useReducer( todoReducer, [] , init ); //arreglo de todos


      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) ); //almacena en el local storage 
      
      
      }, [todos]);
      

      const handleNewTodo = ( todo ) => {
          const action = {
              type: '[TODO] Add Todo',
              payload: todo
          }
          dispatch(action);  //funcion para mandar accion Add todo
          //console.log(todo);
      }

      const handleDeleteTodo = ( id ) => {
          dispatch({
              type: '[TODO] Remove Todo',
              payload: id
          });
          //console.log(todo);
      }
      
      const handleToggleTodo = ( id ) => {
          dispatch({
              type: '[TODO] Toggle Todo',
              payload: id
          });
          //console.log(todo);
      }
  
  return {
    todos ,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todoCount: todos.length,
    todoPendingCount: todos.filter(todo => !todo.done).length,
    

  }
}
