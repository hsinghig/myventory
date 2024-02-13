import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appCardHeader]',
    standalone: true
})
export class CardHeaderDirective{
    constructor(public template:TemplateRef<any>){}
}