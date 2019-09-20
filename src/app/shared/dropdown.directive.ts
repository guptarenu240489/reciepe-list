import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(private elRef: ElementRef) {}
    @HostBinding('class.open') isOpen = false
    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }
}