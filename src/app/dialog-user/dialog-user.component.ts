import { Component, OnInit } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close(DialogUserComponent);
  }

  saveUserInfo() {
    this.user.birthDate = this.birthDateAsTimeStamp.getTime();
    console.log('Added USER', this.user);
  }

}
