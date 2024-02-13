import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appCardMainContent]',
    standalone: true
})
export class CardContentDirective{
    constructor(public template: TemplateRef<any>){}
}