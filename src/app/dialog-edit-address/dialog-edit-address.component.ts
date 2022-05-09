import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, FirestoreModule } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user!: User;
  userID!: string;
  loading:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    public fs:AngularFirestore
  ) { }

  ngOnInit(): void {
  }


  // Update users address from FireBase
  editUserAddress() {
    this.loading = true;
    this.fs.collection('user')
    .doc(this.userID)
    .update(this.user.toJson())
    .then(result => {
      console.log('Edit User is',result);
      this.loading = false;
      this.dialogRef.close()
    })
  }
}
