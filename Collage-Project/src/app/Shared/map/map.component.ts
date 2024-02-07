import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<MapComponent>
  ) {}

  lat : number = 27.459939;
  lng : number = 77.662363;
  address:any;


markerDragEnd(event: any) {
  this.lat = event.latLng.lat();
  this.lng = event.latLng.lng();
  this.getAddress(this.lat, this.lng);
}
getAddress(latitude: number, longitude: number) {
  const apiKey = 'AIzaSyDoTCrXZ2_oe9Nt1jkZkZHiODhjdZPj7k4';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  this.http.get(url).subscribe((data: any) => {
    if (data && data.results && data.results.length > 0) {
      this.address = data.results[0].formatted_address;
      console.log('Full Address:', this.address);
    }
  });
}

closeDialog() {
  this.dialogRef.close(this.address);
}
}
