import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ExampleComponent } from './pages/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'example',
    component: ExampleComponent,
  },
];
