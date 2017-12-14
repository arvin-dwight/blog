import { 
	Component,
	OnInit,
	OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiProvider } from '../../providers/index';

@Component({
    template: require('./add.component.html'),
    styles: [`${require('./add.component.scss')}`]
})

export class AddComponent implements OnInit, OnDestroy {

	private ngUnsubscribe: Subject<void> = new Subject<void>();
	isEdit: boolean = false;

	public id: number = 0;
	public title = '';
	public content = '';
	public status = '';

	constructor( 
		private router: Router,
		private route: ActivatedRoute,
		private api: ApiProvider ) {

		this.route.params.subscribe(params => {
	        let id = params['id'];
	        if(typeof id !== 'undefined'){
	        	this.isEdit = true;
	        	this.id = id;
	        }
	    });
	}

	ngOnInit(): void {
		if(this.isEdit){
			this.api.post('/api/post',{
				id: this.id
			}).subscribe((response) => {
				let res = response.json();
				this.title = res.data.title;
				this.content = res.data.content;
				this.status = res.data.is_published;
			});
		}
	}

	submit(): void {
		this.api.post('/api/add-post',{
			id: this.id,
			title: this.title,
			content: this.content,
			status: this.status
		}).subscribe((response) => {
			let res = response.json();
			if(res.message == "success") {
				this.router.navigateByUrl('dashboard')
			}
		});
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
	}

}