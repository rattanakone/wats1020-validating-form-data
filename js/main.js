/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.





$.validator.addMethod("alphaSpace", function(value, element) { // property for entering only letters and space in a field
return this.optional(element) || value == value.match(/^[A-Za-z\s]+$/);
},"Letters only please");

$.validator.addMethod("numeric", function(value, element) { // propery for entering only numbers in a field
return this.optional(element) || value == value.match(/^[0-9]+$/);
},"Numbers only please");

$.validator.addMethod("numericSpace", function(value, element) { // property for entering only numbers and space in a field
return this.optional(element) || value == value.match(/^(?=.*\d)[\d ]+$/);
},"Numbers and spaces only please");

$().ready(function() { // document ready handler
	$("#order-form").validate({
		submitHandler: function(correct) { // when the form is filled out correctly it will submit when submit button is pushed 
			correct.submit();
		},
		rules: {
			"your-name": { // name field  
				required: true, // field will not be blank
				alphaSpace: true, // letters and only spaces allowed
				maxlength: 128	// maximum length of letters allowed
			},				
			"your-address": { // address field 
				required: true	// field will not be blank			
			},	
			"your-city": { // city field 
				required: true, // field will not be blank
				alphaSpace: true // letters and only spaces allowed
			},
			"your-state": { // state field 
				required: true, // field will not be blank
				maxlength: 2 // maximum length of letters allowed
			},
			"your-zip": { // zip code field 
				required: true, // field will not be blank
				numeric: true, // numbers only allowed
				maxlength: 5 // maximum length of numbers allowed
			},
			"card-holder-name": { // card holder name field 
				required: true, // field will not be blank
				alphaSpace: true, // letters and only spaces allowed
				maxlength: 128 // maximum length of letters allowed
			},
			"card-number": { // card number field
				required: true, // field will not be blank
				numericSpace: true, // numbers and spaces only allowed
				maxlength: 20 // maximum length of numbers allowed
			},
			"expiry-month": { // expired month field
				required: true // field will not be blank
			},
			"expiry-year" : { // expired year field 
				required: true // field will not be blank
			},
			"cvv" : { // cvv field 
				required: true, // field will not be blank
				numeric: true, // numbers only allowed
				maxlength: 3 // maximum length of numbers allowed
			}
		}

	});	
});
