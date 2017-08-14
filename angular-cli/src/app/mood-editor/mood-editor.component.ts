import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mood-editor',
  templateUrl: './mood-editor.component.html',
  styleUrls: ['./mood-editor.component.css']
})
export class MoodEditorComponent implements OnInit {
    
  @ViewChild('container', {read: ViewContainerRef}) public container;
  public happy: boolean = false;
  private params: any;

  constructor() { }

  ngOnInit() {
  }

  // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
  ngAfterViewInit() {
    this.container.element.nativeElement.focus();
  }

  agInit(params: any): void {
    this.params = params;
    this.setHappy(params.value === "Happy");
  }

  getValue(): any {
    return this.happy ? "Happy" : "Sad";
}

isPopup(): boolean {
    return true;
}

setHappy(happy: boolean): void {
    this.happy = happy;
}

toggleMood(): void {
    this.setHappy(!this.happy);
}

onClick(happy:boolean) {
    this.setHappy(happy);
    this.params.api.stopEditing();
}

onKeyDown(event): void {
    let key = event.which || event.keyCode;
    if (key == 37 ||  // left
        key == 39) {  // right
        this.toggleMood();
        event.stopPropagation();
    }
}
}
