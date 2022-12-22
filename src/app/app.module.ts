import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AngularStylesComponent } from './components/angular-styles/angular-styles.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgContentParentComponent } from './components/ng-content/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './components/ng-content/ng-content-child/ng-content-child.component';
import { TemplateStatementsComponent } from './components/template-statements/template-statements.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { GreetingsPipePipe } from './custom-pipes/greetings-pipe.pipe';
import { BindingComponent } from './components/binding/binding.component';
import { EventBindingComponent } from './components/binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/binding/two-way-binding/two-way-binding.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { BuiltInDirectivesComponent } from './components/directives/built-in-directives/built-in-directives.component';
import { AttributeDirectivesComponent } from './components/directives/attribute-directives/attribute-directives.component';

// Directive
import { HighlightDirective } from './custom-directives/highlight.directive';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';

// Services
import { ExampleService } from './example.service';
import { RoutingExampleComponent } from './components/routing-example/routing-example.component';
import { AboutPageComponent } from './components/routing-example/about-page/about-page.component';
import { HomePageComponent } from './components/routing-example/home-page/home-page.component';
import { NotFoundComponent } from './components/routing-example/not-found/not-found.component';
import { ProductsComponent } from './components/routing-example/products/products.component';
import { ProductDetailsComponent } from './components/routing-example/products/product-details/product-details.component';
import { ChildAComponent } from './components/routing-example/home-page/child-a/child-a.component';
import { ChildBComponent } from './components/routing-example/home-page/child-b/child-b.component';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { FormValidationComponent } from './components/forms/form-validation/form-validation.component';
import { HttpComponent } from './components/http/http.component';

@NgModule({
  declarations: [

    // pipes
    GreetingsPipePipe,

    // Directives
    HighlightDirective,

    //components
    AppComponent,
    FirstComponent,
    ParentComponent,
    ChildComponent,
    AngularStylesComponent,
    NgContentComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    TemplateStatementsComponent,
    PipesComponent,
    BindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateVariableComponent,
    DirectivesComponent,
    BuiltInDirectivesComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    DependencyInjectionComponent,
    RoutingExampleComponent,
    AboutPageComponent,
    HomePageComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ChildAComponent,
    ChildBComponent,
    FormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    FormValidationComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
