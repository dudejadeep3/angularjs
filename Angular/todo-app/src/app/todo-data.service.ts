import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoDataService {
    lastId: number=0;
    todos:Todo[]=[];

  constructor() { }

  addTodo(todo:Todo){
    if(!todo.id){
      todo.id=++this.lastId;
      this.todos.push(todo);
      return this;
    }
  }

  deleteTodoById(id:number){
    this.todos=this.todos.filter(todo=>todo.id!=id);
  }

  getTodoById(id:number){
    return this.todos.filter(todo=>todo.id==id).pop();
  }

  updateTodoById(id:number,values:Object={}){
    let todo=this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }

  getAllTodos(){
    return this.todos;
  }

  toggleTodoComplete(todo:Todo){
    let updatedTodo =this.updateTodoById(todo.id,{
      complete:!todo.complete
    });
    return updatedTodo;
  }

}
