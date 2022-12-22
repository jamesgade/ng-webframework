import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent {

  // property binding 
  imgUrl = "assets/images/yourname.jpg";
  inactive = true;


  // class binding 
  onSale = true;


  // style binding
  showElement= 'none';


  // event binding 
  onSave = () => {
    console.log('onSave called');
  }

  //custom event
  deleteItem = (event: any) => {
    console.log(event);
  }

  // two-way binding
  fontSizePX = 16;
}
