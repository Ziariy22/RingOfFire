import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit {

  allProfilePictures = ['profile1.jpg', 'profile2.svg', 'profile3.svg', 'profile4.svg'];
  name: string='';
  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

}
