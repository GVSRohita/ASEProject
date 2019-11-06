// import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy };
import {Component, ElementRef, ViewChild, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import * as d3 from 'd3';
import {sample} from 'rxjs/operators';
// import {HttpClient} from '@angular/common/http';
// import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-search-food',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  happiness: number;

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  public constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
        // this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    var base64image = this.canvas.nativeElement.toDataURL();
    // console.log(base64image);
    var data = {
      image: base64image,
    };
    this.happiness;
    // var image = "{"image": "+ base64image + "}";
    this.httpClient.post('http://localhost:3001/videos/333/users/123/emotions?time=369', data).toPromise().then(dat => {
      console.log(dat);
      this.happiness = dat[0].faceAttributes.emotion.happiness;


      // var anger = dat[0].faceAttributes.emotion.anger;
      // var contempt = dat[0].faceAttributes.emotion.contempt;
      // var disgust = dat[0].faceAttributes.emotion.disgust;
      // var fear = dat[0].faceAttributes.emotion.fear;
      // var happiness = dat[0].faceAttributes.emotion.happiness;
      // var neutral = dat[0].faceAttributes.emotion.neutral;
      // var sadness = dat[0].faceAttributes.emotion.sadness;
      // var surprise = dat[0].faceAttributes.emotion.surprise;



      console.log(dat[0].faceAttributes.emotion);
      console.log(dat[0].faceAttributes.emotion.anger);
      // console.log();
    });
  }
}

























// import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { Router } from '@angular/router';
// import {User} from '../../Models/user';
// import {AngularFireAuth} from 'angularfire2/auth';
// import * as d3 from 'd3';
// import {sample} from 'rxjs/operators';
//
// @Component({
//   selector: 'app-search-food',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   @ViewChild('video')
//   public video: ElementRef;
//
//   @ViewChild('canvas')
//   public canvas: ElementRef;
//
//   public captures: Array<any>;
//
//   public constructor(private httpClient: HttpClient) {
//     this.captures = [];
//   }
//
//   ngOnInit(): void {
//   }
//
//   // public ngAfterViewInit() {
//   //   if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   //     navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
//   //       // this.video.nativeElement.src = window.URL.createObjectURL(stream);
//   //       this.video.nativeElement.srcObject = stream;
//   //       this.video.nativeElement.play();
//   //     });
//   //   }
//   //   const margin = 60;
//   //   const width = 1000 - 2 * margin;
//   //   const height = 600 - 2 * margin;
//   //   var svg = d3.select('svg');
//   //
//   //   const chart = svg.append('g')
//   //     .attr('transform', 'translate(${margin}, ${margin})');
//   //   const yScale = d3.scaleLinear()
//   //     .range([height, 0])
//   //     .domain([0, 1]);
//   //   chart.append('g')
//   //     .call(d3.axisLeft(yScale));
//   //
//   //   const xScale = d3.scaleBand()
//   //     .range([0, width])
//   //     .domain([0,1])
//   //     .padding(0.2);
//   //
//   //   chart.append('g')
//   //     .attr('transform', `translate(0, ${height})`)
//   //     .call(d3.axisBottom(xScale));
//   //
//   //
//   // }
//
//   public capture() {
//     var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
//     var base64image = this.canvas.nativeElement.toDataURL();
//     // console.log(base64image);
//     var data = {
//       image: base64image,
//     };
//     // var image = "{"image": "+ base64image + "}";
//     this.httpClient.post('http://localhost:3001/videos/333/users/123/emotions?time=369', data).toPromise().then(dat => {
//       console.log(dat);
//       // console.log();
//     });
//   }
// }
