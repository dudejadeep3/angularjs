import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos',()=>{
    it('should return an empty array by default',inject([TodoDataService],(service:TodoDataService)=>{
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos',inject([TodoDataService],(service:TodoDataService)=>{
      let todo1= new Todo({title:"Hello1",complete:false});
      let todo2 = new Todo({title:'Hello2',complete:true});
      service.addTodo(todo1)
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1,todo2]);
    }))
  });

  describe('#deleteTodoByid',()=>{
    it('should remove todo with the corresponding id',inject([TodoDataService],(service:TodoDataService)=>{
      let todo1= new Todo({title:'Hello 1',complete:true});
      let todo2 = new Todo({title:'Hello 2', complete:false});

      service.addTodo(todo1);
      service.addTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1,todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);

    }));

    it("should not remove anything if todo with corresponding id is not found",inject([TodoDataService],(service:TodoDataService)=>{
        let todo1 =new Todo({title:'hello',complete:true});
        let todo2 = new Todo({title:'Hello2',complete:false});
        service.addTodo(todo1);
        service.addTodo(todo2);
        console.log(service.getAllTodos());
        expect(service.getAllTodos()).toEqual([todo1,todo2]);
        service.deleteTodoById(3);
        expect(service.getAllTodos()).toEqual([todo1,todo2]);
    }));
  });

  describe('#updateTodoById(id,values)',()=>{

    it('should return todo object with updated data',inject([TodoDataService],(service:TodoDataService)=>{
      let todo1=new Todo({title:'Hello 1',complete:false});
      service.addTodo(todo1);
      let updatedTodo = service.updateTodoById(1,{title:'updatedTitle'});
      console.log(updatedTodo);
      expect(updatedTodo.title).toEqual('updatedTitle');
    }));

    it('should return null if todo is not found',inject([TodoDataService],(service:TodoDataService)=>{
      let todo1= new Todo({title:'Todo 1',complete:false});
      service.addTodo(todo1);
      let updatedTodo = service.updateTodoById(2,{title:'new title'});
      expect(updatedTodo).toEqual(null);

    }))
  });

  describe('#toggleTodoComplete(todo)',()=>{

    it('should return the todo with inverse complete status',inject([TodoDataService],(service:TodoDataService)=>{
      let todo1= new Todo({title:'Hello1', complete:true});
      service.addTodo(todo1);
      service.toggleTodoComplete(todo1);
      expect(todo1.complete).toEqual(false);
      service.toggleTodoComplete(todo1);
      expect(todo1.complete).toEqual(true);
    }))
  });

});
