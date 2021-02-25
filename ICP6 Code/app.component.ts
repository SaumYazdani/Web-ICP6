import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restaurant and Recipe Finder!';
  url: any;
  url2: any;
  constructor(private http: HttpClient) {
  }
  recipe(foodtype: any){
    this.url2 = 'https://api.edamam.com/search/?q=' + foodtype + '&app_id=9bdd753f&app_key=e59e84ac8ffb22fc436bb4c6e0e315cf';
    console.log ( this.http.get(this.url));
  }
  search(foodtype: any, location: any) {
    this.url = 'https://api.foursquare.com/v2/venues/search?near=' + location + '&limit=5&v=20210424&query=' + foodtype + '&client_id=RIEDVYCVNISMXQ2X5V5P0XBKNBCYIU0GUEUAOBWG2I32TLA5' + '&client_secret=D1LJHHXOMRU5SYL3CGFDUOSNWXWTDFKWQSLC2GYMQTOGP1JW';
    this.recipe(foodtype);
    console.log(this.http.get(this.url).subscribe((data: any) => {
      let i = data;
      return {location: i.location};
    }));
  }
}
