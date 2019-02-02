import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MemeGeneratorComponent
  ],
  exports: [
    MemeGeneratorComponent
  ]
})
export class MemeGeneratorModule { }
