import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { WebComponentExerciceComponent } from './5-web-component-exercice/web-component-exercice.component';
import { TestWebServiceComponent } from './10-test-web-service/test-web-service.component';
import { TestObservableComponent } from './9-test-observable/test-observable.component';
import { FormsComponent } from './8-forms/forms.component';
import { Es6Component } from './es6/es6.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { RoutingParamComponent } from './11-routing-param/routing-param.component';
import { ScssComponent } from './scss/scss.component';
import { PipeComponent } from './6-pipe/pipe.component';
import { PipeExerciceComponent } from './6-pipe-exercice/pipe-exercice.component';
import { ServiceExerciceComponent } from './7-service-exercice/service-exercice.component';
import { ServiceComponent } from './7-service/service.component';
import { TestObservableExerciceComponent } from './9-test-observable-exercice/test-observable-exercice.component';

const routes: Routes = [
  { path: 'first-test', component: FirstTestComponent },
  { path: 'expression', component: ExpressionComponent },
  { path: 'expression-exercice', component: ExpressionExerciceComponent },
  { path: 'directive-angular', component: DirectiveAngularComponent },
  { path: 'directive-angular-exercice', component: DirectiveAngularExerciceComponent },
  { path: 'event', component: EventComponent },
  { path: 'event-exercice', component: EventExerciceComponent },
  { path: 'typage', component: TypageComponent },
  { path: 'typage-exercice', component: TypageExerciceComponent },
  { path: 'web-component', component: WebComponentComponent },
  { path: 'web-component-exercice', component: WebComponentExerciceComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'pipe-exercice', component: PipeExerciceComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'service-exercice', component: ServiceExerciceComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'test-observable', component: TestObservableComponent },
  { path: 'test-observable-exercice', component: TestObservableExerciceComponent },
  { path: 'test-webservice', component: TestWebServiceComponent },
  { path: 'es6', component: Es6Component },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'routing-param/:id', component: RoutingParamComponent },
  { path: 'scss', component: ScssComponent },
  { path: '**', redirectTo: 'first-test' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
