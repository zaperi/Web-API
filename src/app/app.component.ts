import { Component, ElementRef, ViewChild } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  channels: any

  @ViewChild('channelName')
  channelName!: ElementRef;

  title = 'ytAPI';

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {

    //data panggil cat channe dahulu
    this.youtube.getChannels("cat").subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })

  }

  //for searching
  getData() {

    //get user inputs
    var channelName = this['channelName'].nativeElement.value

    this.youtube.getChannels(channelName).subscribe((data) => {
      console.log(data)
      this.channels = data.items
    })

  }

}
