import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeGeneratorComponent } from './meme-generator.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MemeGeneratorComponent
  ],
  exports: [
    MemeGeneratorComponent
  ]
})
export class MemeGeneratorModule { }
