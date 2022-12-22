import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ExampleService } from 'src/app/example.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {
  name = ""; // example of service : a variable from service

  constructor(
    private exampleService: ExampleService,   // example of service from ExampleService
    private host: ElementRef,                 //example of service from Renderer2 Library
    private renderer: Renderer2               //example of service from Renderer2 Library
  ) { }

  ngOnInit(): void {

    // example of service from ExampleService
    this.exampleService.exampleServiceMessage("James");

    //example of service from Renderer2 Library
    this.renderer.setStyle(this.host.nativeElement, 'color', 'red');

    // example of service : a variable from service
    this.name = this.exampleService.name;
  }
}
