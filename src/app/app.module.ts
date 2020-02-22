import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './header/recipe/recipe.component';
import { ShoppingComponent } from './header/shopping/shopping.component';
import { ShoppingListComponent } from './header/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './header/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
