import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

/****** COMPONENTS *******/
import { AppComponent } from './app.component';
import { FirstTestComponent } from './0-first-test/first-test.component';
import { ExpressionComponent } from './1-expression/expression.component';
import { ExpressionExerciceComponent } from './1-expression-exercice/expression-exercice.component';
import { DirectiveAngularComponent } from './2-directive-angular/directive-angular.component';
import { DirectiveAngularExerciceComponent } from './2-directive-angular-exercice/directive-angular-exercice.component';
import { EventComponent } from './3-event/event.component';
import { EventExerciceComponent } from './3-event-exercice/event-exercice.component';
import { TypageComponent } from './4-typage/typage.component';
import { TypageExerciceComponent } from './4-typage-exercice/typage-exercice.component';
import { WebComponentComponent } from './5-web-component/web-component.component';
import { ParentComponent } from './5-web-component/parent/parent.component';
import { ChildComponent } from './5-web-component/parent/child/child.component';
import { WebComponentExerciceComponent } from './5-web-component-exercice/web-component-exercice.component';
import { TextColorComponent } from './5-web-component-exercice/text-color/text-color.component';
import { ShoppingParentComponent } from './5-web-component-exercice/shopping-parent/shopping-parent.component';
import { ShoppingChildComponent } from './5-web-component-exercice/shopping-parent/shopping-child/shopping-child.component';
import { UserViewComponent } from './5-web-component-exercice/user-view/user-view.component';
import { UserTableComponent } from './5-web-component-exercice/user-view/user-table/user-table.component';
import { UserRowComponent } from './5-web-component-exercice/user-view/user-table/user-row/user-row.component';
import { UserDetailComponent } from './5-web-component-exercice/user-view/user-detail/user-detail.component';
import { TestWebServiceComponent } from './10-test-web-service/test-web-service.component';
import { TestObservableComponent } from './9-test-observable/test-observable.component';
import { SetObservableComponent } from './9-test-observable/set-observable/set-observable.component';
import { CallObservableComponent } from './9-test-observable/call-observable/call-observable.component';
import { FormsComponent } from './8-forms/forms.component';
import { TemplateDrivenFormComponent } from './8-forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './8-forms/reactive-form/reactive-form.component';
import { Es6Component } from './es6/es6.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { RoutingParamComponent } from './11-routing-param/routing-param.component';
import { TestingComponent } from './12-testing/testing.component';
import { ScssComponent } from './scss/scss.component';
import { PipeComponent } from './6-pipe/pipe.component';
import { PipeExerciceComponent } from './6-pipe-exercice/pipe-exercice.component';
import { ServiceComponent } from './7-service/service.component';
import { ServiceExerciceComponent } from './7-service-exercice/service-exercice.component';
import { TodoListComponent } from './5-web-component-exercice/todo-list/todo-list.component';
import { TodoListItemComponent } from './5-web-component-exercice/todo-list/todo-list-item/todo-list-item.component';
import { TodoListAddItemComponent } from './5-web-component-exercice/todo-list/todo-list-add-item/todo-list-add-item.component';
import { TodoListDetailComponent } from './5-web-component-exercice/todo-list/todo-list-detail/todo-list-detail.component';
/****** PIPES *******/
import { FilterByAgePipe } from './shared/pipes/filter-by-age.pipe';
import { DividePipe } from './shared/pipes/divide.pipe';
/****** SERVICES *******/
import { TestSharedService } from './shared/services/test-shared.service';
import { TestObservableService } from './9-test-observable/test-observable.service';
import { UserWebService } from './shared/webservices/user.webservice';
import { TestingService } from './12-testing/testing.service';
import { UserServiceService } from './shared/services/user-service.service';
import { TestObservableExerciceComponent } from './9-test-observable-exercice/test-observable-exercice.component';
import { SelectUserComponent } from './9-test-observable-exercice/select-user/select-user.component';
import { DisplaySelectedUserComponent } from './9-test-observable-exercice/display-selected-user/display-selected-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    ExpressionComponent,
    ExpressionExerciceComponent,
    DirectiveAngularComponent,
    DirectiveAngularExerciceComponent,
    EventComponent,
    EventExerciceComponent,
    TypageComponent,
    TypageExerciceComponent,
    ParentComponent,
    ChildComponent,
    WebComponentComponent,
    WebComponentExerciceComponent,
    TextColorComponent,
    ShoppingParentComponent,
    ShoppingChildComponent,
    UserViewComponent,
    UserTableComponent,
    UserRowComponent,
    UserDetailComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListAddItemComponent,
    TodoListDetailComponent,
    PipeComponent,
    PipeExerciceComponent,
    ServiceComponent,
    ServiceExerciceComponent,
    TestWebServiceComponent,
    TestObservableComponent,
    SetObservableComponent,
    CallObservableComponent,
    FormsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    Es6Component,
    TypescriptComponent,
    RoutingParamComponent,
    TestingComponent,
    ScssComponent,
    FilterByAgePipe,
    DividePipe,
    TestObservableExerciceComponent,
    SelectUserComponent,
    DisplaySelectedUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceService,
    TestSharedService,
    TestObservableService,
    UserWebService,
    TestingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
