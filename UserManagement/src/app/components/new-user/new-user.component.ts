import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
declare var $: any;

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  users: any;

  firstNameError: boolean = false;
  lastNameError: boolean = false;
  emailError: boolean = false;
  streetNumError: boolean = false;
  streetNameError: boolean = false;
  citySubError: boolean = false;
  stateError: boolean = false;
  postcodeError: boolean = false;

  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit() {

    let firstName = $('#inputfname4').val();
    let lastName = $('#inputlname4').val();
    let email = $('#inputEmail').val();
    let streetNumber = $('#inputAddressStreetNumber').val();
    let streetName = $('#inputAddressStreetName').val();
    let citySuburb = $('#inputAddressCity').val();
    let state = $('#inputAddressState').val();
    let postcode = $('#inputAddressPostcode').val();

    this.firstNameError = firstName.length < 1;
    this.lastNameError = lastName.length < 1;
    this.emailError = email.length < 1;
    this.streetNumError = streetNumber.length < 1;
    this.streetNameError = streetName.length < 1;
    this.citySubError = citySuburb.length < 1;
    this.stateError = state.length < 1;
    this.postcodeError = postcode.length < 1;

    if (this.firstNameError || this.lastNameError || this.emailError || this.streetNumError
      || this.streetNameError || this.citySubError || this.stateError || this.postcodeError) {
        return;
    }


    var postBody = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      streetNumber: streetNumber,
      streetName: streetName,
      citySuburb: citySuburb,
      state: state,
      postcode: postcode
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:52222/api/Test',
      data: postBody,
      success: (data) => {
        alert("User added successfully!");
        $('#inputfname4').val('');
        $('#inputlname4').val('');
        $('#inputEmail').val('');
        $('#inputAddressStreetNumber').val('');
        $('#inputAddressStreetName').val('');
        $('#inputAddressCity').val('');
        $('#inputAddressState').val('');
        $('#inputAddressPostcode').val('');
      },
      error: (err) => {
        alert("Something went wrong. Please check API project is running.")
      }
    });
  }

  public handleAddressChange(address: Address) {
    let formattedAddress = address.address_components;
    if (Array.isArray(formattedAddress)) {
      $('#inputAddressStreetNumber').val(formattedAddress[0] ? formattedAddress[0].long_name : '')
      $('#inputAddressStreetName').val(formattedAddress[1] ? formattedAddress[1].long_name : '')
      $('#inputAddressCity').val(formattedAddress[3] ? formattedAddress[3].long_name : '')
      $('#inputAddressState').val(formattedAddress[4] ? formattedAddress[4].long_name : '')
      $('#inputAddressPostcode').val(formattedAddress[6] ? formattedAddress[6].long_name : '')
    }
  }
}
