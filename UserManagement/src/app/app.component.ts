import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    
  }
}
