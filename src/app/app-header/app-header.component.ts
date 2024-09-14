import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent {
  newTodo: string = '';

  @Output() add = new EventEmitter<string>();

  onAddClick(): void {
    if (this.newTodo.trim()) {
      this.add.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
