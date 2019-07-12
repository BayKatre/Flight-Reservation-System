import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = "http://localhost/ucus/flight.php"
  constructor(private http: HttpClient) { }
  getSource(){
    const sourceDto = {
      'source' : ""
    }
    return this.http.post(this.url, sourceDto)
  }
  getDestination(source){
    const destinationDto = {
      'src': source
    }
    return this.http.post(this.url, destinationDto)
  }
}
