import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IHeaderComponent } from './iheader/iheader.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { IloginComponent } from './ilogin/ilogin.component';
import { VenueregistorComponent } from './venueregistor/venueregistor.component';
import { UserRegistorComponent } from './user-registor/user-registor.component';
import { IbannerComponent } from './ibanner/ibanner.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    IHeaderComponent,
    FooterComponent,
    ChatBoxComponent,
    IloginComponent,
    VenueregistorComponent,
    UserRegistorComponent,
    IbannerComponent,
    AdminComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ]
})
export class AppModule { }
