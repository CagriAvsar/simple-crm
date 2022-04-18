import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>
  ) { }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close(DialogUserComponent);
  }

}
