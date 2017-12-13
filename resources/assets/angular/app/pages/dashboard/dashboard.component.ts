import { 
	Component, 
	OnInit,
	AfterViewInit,
	OnDestroy,
	ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ApiProvider } from '../../providers/index';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
    template: require('./dashboard.component.html'),
    styles: [`${require('./dashboard.component.scss')}`]
})

export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy { 

	private ngUnsubscribe: Subject<void> = new Subject<void>();
	page:number = 1;
	length:number = 0;

	displayedColumns = ['title', 'created_at', 'updated_at'];
  	dataSource = new MatTableDataSource();

  	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor( private api: ApiProvider ){ }

	ngOnInit(): void {
		
	}

	getData(): void {
		this.api.post('/api/my-posts', {
			page: this.page
		}).subscribe((response) => {
			let res = response.json();
			this.length = res.data.total;
			this.dataSource.data = res.data.data;
		});
	}

	onChange(event) {
		this.page = parseInt(event.pageIndex) + 1;
		this.getData();
	}

	ngAfterViewInit() {
		this.getData();
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
	}
}