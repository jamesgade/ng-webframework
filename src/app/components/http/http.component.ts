import { Component, OnInit } from '@angular/core';
import { HttpDataService } from 'src/app/http-data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpDataService: HttpDataService) {}

  ngOnInit(): void {

    this.httpDataService.getData().subscribe((response) => {
      console.log(response);
    });
  }
}
