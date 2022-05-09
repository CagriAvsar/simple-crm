import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  userID:any = '';

  constructor(
    private route:ActivatedRoute,
    private fs: AngularFirestore,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userID = paramMap.get('id'); //gets id from route "/:id"
      console.log('GOT USERID', this.userID); 
      this.getUser();
  })
  }

  getUser() {
    this.fs
    .collection('user')
    .doc(this.userID)
    .valueChanges(this.user)
    .subscribe( (user) => {
      console.log(user);
      this.user = new User(user);
    })
  }

  openEditUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson()); //copy the variable user
    dialog.componentInstance.userID = this.userID;
  }

  openEditAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJson()); //copy the vaiable user
    dialog.componentInstance.userID = this.userID;
    }

}
