import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent{
    @Output() choosenNavigation = new EventEmitter<string>();
    selectItem(item:string): void {
        this.choosenNavigation.emit(item);
    }
}