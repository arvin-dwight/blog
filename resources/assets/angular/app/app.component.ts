import { Component } from '@angular/core';

@Component({
    selector: 'blog-app',
    template: require('./app.component.html'),
    styles: [`${require('./app.component.scss')}`]
})

export class AppComponent { }