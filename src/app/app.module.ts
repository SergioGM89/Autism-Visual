import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BackspaceButtonComponent } from './body-page/comunicator/control-buttons/backspace-button/backspace-button.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { ComunicatorComponent } from './body-page/comunicator/comunicator.component';
import { ControlButtonsComponent } from './body-page/comunicator/control-buttons/control-buttons.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PictoboardComponent } from './body-page/comunicator/picto-board/picto-board.component';
import { PictoCardComponent } from './body-page/comunicator/picto-board/picto-card/picto-card.component';
import { PictoShowComponent } from './body-page/comunicator/timeline/picto-show/picto-show.component';
import { PlayButtonComponent } from './body-page/comunicator/control-buttons/play-button/play-button.component';
import { TimelineComponent } from './body-page/comunicator/timeline/timeline.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BackspaceButtonComponent,
    BodyPageComponent,
    ComunicatorComponent,
    ControlButtonsComponent,
    FooterComponent,
    PictoboardComponent,
    PictoCardComponent,
    PictoShowComponent,
    PlayButtonComponent,
    TimelineComponent,
    ToolBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
