import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appCardFooter]',
    standalone: true
})
export class CardFooterDirective{
    constructor(public template:TemplateRef<any>){}
}