import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherPannelComponent } from './components/teacher-pannel/teacher-pannel.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { WhiteboardViewComponent } from '../components/whiteboard-view/whiteboard-view.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'pannel',
    pathMatch: 'full'
  },
  {
    path: 'pannel',
    component: TeacherPannelComponent,
    children: [
      {
        path: 'groups',
        component: GroupsViewComponent
      }, {
        path: 'whiteboards-pannel',
        component: WhiteboardViewComponent
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
