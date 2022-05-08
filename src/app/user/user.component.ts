import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:any = new User();
  allUsers:any = [];

  constructor( 
    public dialog: MatDialog,
    public fs: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.fs
    .collection('user')
    .valueChanges( {idField: 'userId'} )
    .subscribe((newUser:any) => {
      this.allUsers = newUser; // Set a new Array
      console.log('NEWUSER', newUser);
    })
  }

  openDialog() {
    this.dialog.open(DialogUserComponent);
   }



}
