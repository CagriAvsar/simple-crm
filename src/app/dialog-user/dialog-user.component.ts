import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';



@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDateAsTimeStamp!: Date;

  loading:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close(DialogUserComponent);
  }

  saveUserInfo() {
    this.user.birthDate = this.birthDateAsTimeStamp.getTime();
    console.log('Added USER', this.user);
    this.loading = true;
    // ---- FIREBASE ----
    this.firestore
    .collection('user')
    .add(this.user.toJson())
    .then( (result)=> {
      this.loading = false;
      console.log('USER IN FIRE', result);
      this.dialogRef.close(DialogUserComponent);
    })
  }

}
