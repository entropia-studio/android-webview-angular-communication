import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebiewFormComponent } from './webiew-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WebiewFormComponent,
  },
];

@NgModule({
  declarations: [WebiewFormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class WebviewFormModule {}
