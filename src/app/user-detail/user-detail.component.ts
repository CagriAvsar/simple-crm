import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

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
    private fs: AngularFirestore
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
    .subscribe( (user)=> {
      console.log(user);
      this.user = new User(user);
    })
  }

}
