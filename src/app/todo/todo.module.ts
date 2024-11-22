import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TodoComponent],
  exports: [TodoComponent]

})
export class TodoComponentModule {}