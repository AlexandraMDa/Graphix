import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherPannelComponent } from './components/teacher-pannel/teacher-pannel.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SaveWhiteboardComponent } from './save-whiteboard/save-whiteboard.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageStudentsComponent } from './components/manage-students/manage-students.component';
import { WhiteboardViewComponent } from './components/whiteboard-view/whiteboard-view.component';


@NgModule({
  declarations: [
    TeacherPannelComponent,
    AccountSettingsComponent,
    SaveWhiteboardComponent,
    GroupsViewComponent,
    ManageStudentsComponent,
    WhiteboardViewComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
