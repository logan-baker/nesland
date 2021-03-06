import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CoreComponent } from './core.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialComponentModule } from '../material-components.module';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialComponentModule
  ],
  exports: [
    CoreComponent
  ],
  declarations: [CoreComponent, LayoutComponent, HeaderComponent, FooterComponent]
})
export class CoreModule { }
