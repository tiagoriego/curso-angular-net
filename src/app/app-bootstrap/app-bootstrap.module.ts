import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), CollapseModule.forRoot()],
  exports: [BsDropdownModule, CollapseModule],
})
export class AppBootstrapModule {}
