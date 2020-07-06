import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HackerNewComponent} from './hacker-new/hacker-new.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {TodoComponent} from './todo/todo.component';

const routes: Routes = [
  { path: 'new', component: HackerNewComponent },
  { path: 'namecard', component: NameCardComponent},
  { path: 'progressbar', component: ProgressBarComponent},
  { path: 'todo', component: TodoComponent}
];

@NgModule({
  // declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
