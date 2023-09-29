import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [

  {
    path: 'mfe-1',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        //remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteEntry: environment.remoteEntryMfe1Url,
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },

  {
    path: 'mfe-2',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        //remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteEntry: environment.remoteEntryMfe2Url,
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
