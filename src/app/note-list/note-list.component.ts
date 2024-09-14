import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'note-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent {
  @Input() todos: { text: string; completed: boolean }[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggleCompletion = new EventEmitter<number>();

  onDelete(index: number): void {
    this.delete.emit(index);
  }

  onToggleCompletion(index: number): void {
    this.toggleCompletion.emit(index);
  }
}
