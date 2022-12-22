import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/routing-example/about-page/about-page.component';
import { ChildAComponent } from './components/routing-example/home-page/child-a/child-a.component';
import { ChildBComponent } from './components/routing-example/home-page/child-b/child-b.component';
import { HomePageComponent } from './components/routing-example/home-page/home-page.component';
import { NotFoundComponent } from './components/routing-example/not-found/not-found.component';
import { ProductDetailsComponent } from './components/routing-example/products/product-details/product-details.component';
import { ProductsComponent } from './components/routing-example/products/products.component';
import { ExampleGuardGuard } from './example-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [ExampleGuardGuard]    // guarded route
  },
  {
    path: 'products/:productDetails',
    component: ProductDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
