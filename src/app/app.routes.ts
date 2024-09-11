import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
    { path:"login", component:LoginComponent},
    { path:"register", component:RegisterComponent},
    { path:"add-task", component:AddTaskComponent,canActivate:[authGuardGuard]  },
    { path:"", component:ViewTaskComponent,canActivate:[authGuardGuard]  },
    { path:"reset-password", component:ResetPasswordComponent},
    { path: 'edit-task/:id', component: EditTaskComponent,canActivate:[authGuardGuard]   },
];
