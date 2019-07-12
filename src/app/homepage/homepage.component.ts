import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private sLocations
  private dLocations
  private sLocationList: Array<string> = []
  private dLocationList: Array<string> = []
  private uniqueList
  private dUniqueList
  private date: Date = new Date()
  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flightService.getSource()
      .subscribe(response => {
        console.log(response)
        this.sLocations = response['flight']
        console.log(this.sLocations)
        for(let i of this.sLocations){
          this.sLocationList.push(i['from_location'])
        }
        this.sLocationList = this.sLocationList.sort()
        console.log(this.sLocationList)
        this.uniqueList = [...new Set(this.sLocationList)]
        console.log(this.uniqueList)
      })
    console.log(this.date)
  }
  getDest(source){
    console.log("amnskm " + source)
    this.flightService.getDestination(source)
      .subscribe(response => {
        console.log(response)
        this.dLocations = response['destFlight']
        console.log(this.dLocations)
        for(let i of this.dLocations){
          this.dLocationList.push(i['to_location'])
        }
        this.dLocationList = this.dLocationList.sort()
        console.log(this.dLocationList)
        this.dUniqueList = [...new Set(this.dLocationList)]
        console.log(this.dUniqueList)
        this.dLocationList = []
      })
  }

}
