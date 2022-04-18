import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( 
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogUserComponent);
   }

}
