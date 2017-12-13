import { 
	Component, 
	OnInit,
	OnDestroy,
	ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ApiProvider } from '../../providers/index';
import { MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { PostComponent } from '../post/post.component';

@Component({
    template: require('./home.component.html'),
    styles: [`${require('./home.component.scss')}`]
})

export class HomeComponent implements OnInit, OnDestroy { 

	private ngUnsubscribe: Subject<void> = new Subject<void>();
	page:number = 1;
	length:number = 0;
	data:any[];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor( 
		private api: ApiProvider,
		public dialog: MatDialog ){ }

	ngOnInit(): void {
		this.getData();
	}

	getData(): void {
		this.api.post('/api/all-posts', {
			page: this.page
		}).subscribe((response) => {
			let res = response.json();
			this.length = res.data.total;
			this.data = res.data.data;
		});
	}

	onChange(event) {
		this.page = parseInt(event.pageIndex) + 1;
		this.getData();
	}

	popup(post) {
		let dialogRef = this.dialog.open(PostComponent, {
	      width: '600px',
	      data: post
	    });
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
	}
}