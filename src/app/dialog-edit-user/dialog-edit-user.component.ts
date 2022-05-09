import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user!:User;
  userID!: string;
  loading:boolean = false;
  birthDateAsTimeStamp!: Date; 
  

  constructor(
    public dialogRef: MatDialogRef<DialogEditUserComponent>,
    private fs: AngularFirestore
  ) { }

  ngOnInit(): void {
  }



// Edit user details from FireStore
  editUser() {
    this.loading = true;
    this.fs.collection('user')
    .doc(this.userID)
    .update(this.user.toJson())
    .then((updatedUser) => {
      console.log(updatedUser);
      this.loading = false;
      this.dialogRef.close();
    })
  }
}
