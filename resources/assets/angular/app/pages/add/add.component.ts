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

	constructor( 
		private router: Router,
		private route: ActivatedRoute,
		private api: ApiProvider ) {

		this.route.params.subscribe(params => {
	        let id = params['id'];
	        if(typeof id !== 'undefined'){
	        	this.isEdit = true;
	        }
	    });
	}

	ngOnInit(): void {
		if(this.isEdit){
			console.log('edit');
		}
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
	}

}