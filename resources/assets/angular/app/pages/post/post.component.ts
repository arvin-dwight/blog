import { 
	Component,
	Inject } from '@angular/core';
import { 
	MatDialogRef, 
	MAT_DIALOG_DATA } from '@angular/material';

@Component({
    template: require('./post.component.html'),
    styles: [`${require('./post.component.scss')}`]
})

export class PostComponent {

	constructor(
	    public dialogRef: MatDialogRef<PostComponent>,
	    @Inject(MAT_DIALOG_DATA) public data: any) { }

  	onNoClick(): void {
	    this.dialogRef.close();
  	}

}