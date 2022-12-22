import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ExampleService {

    exampleServiceMessage(msg: string): void {
        console.log(`Message using service: ${msg}`);
    }

    name = "James";
}
