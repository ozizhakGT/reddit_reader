// ANGULAR MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PostsWrapperModule} from './posts-wrapper/posts-wrapper.module';
import {AppRoutingModule} from './app-routing.module';

// COSTUME MODULES
import {CoreModule} from './core/core.module';

// COMPONENTS AND SERVICES
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    PostsWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
