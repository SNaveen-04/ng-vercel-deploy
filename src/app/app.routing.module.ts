import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
