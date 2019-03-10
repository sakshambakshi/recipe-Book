import { Directive, OnInit, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector:' [appDropdown] '
})

export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen= false ;
 
    constructor(){
 
    }
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen
    }

    ngOnInit(){

    }
}

