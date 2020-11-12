import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // implements AfterViewInit
  // constructor(private elementRef:ElementRef){}
   title = 'moveble-box';

  // // ngOnInit(){
  // //   this.loadScript('../script.js');
    
  // // }

  // // public loadScript(url: string) {
  // //   const body = <HTMLDivElement> document.body;
  // //   const script = document.createElement('script');
  // //   script.innerHTML = '';
  // //   script.src = url;
  // //   script.async = false;
  // //   script.defer = true;
  // //   body.appendChild(script);
  // // }
  // ngAfterViewInit() {
  //   var s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.async = true;
  //   s.src = "../script.js";

  //   this.elementRef.nativeElement.appendChild(s);
  //}
}
