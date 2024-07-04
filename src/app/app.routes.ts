import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'products',
  //   loadComponent: () => loadRemoteModule('shop', './Products')
  // },
  {
    path: 'products',
    loadComponent: () => loadRemoteModule({
      remoteName: 'shop',
      // remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Products'
    }).then(m => m.ProductsComponent)
  },
  // {
  //   path: 'product/:id',
  //   loadComponent: () => loadRemoteModule({
  //     remoteName: 'shop',
  //     // remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './Product'
  //   })
  // },
  // {
  //   path: 'checkout',
  //   loadComponent: () => loadRemoteModule({
  //     remoteName: 'checkout',
  //     // remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //     exposedModule: './Checkout'
  //   })
  // }
];
