import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [AppHeaderComponent, NoteListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css'],
})
export class TodoWrapperComponent {
  todos: { text: string; completed: boolean }[] = [];

  addTodo(todoText: string): void {
    if (todoText.trim()) {
      this.todos.push({ text: todoText, completed: false });
    }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  toggleCompletion(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
