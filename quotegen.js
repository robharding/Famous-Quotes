/**
 * quotegen.js
 * A simple application that gets a quote and author from an api
 * and displays it to the webpage.
 *
 * @license The Unlicense, http://unlicense.org/
 * @version 1.0
 * @author  Rob Harding, https://github.com/robharding
 * @updated 2016-12-24
 * 
 */

// Display a new quote when button pressed or page loaded
$("#getquote").click(getQuote);
$(document).ready(getQuote);

function getQuote() {
  // Make a web request
  $.ajax({
    headers: {
      "X-Mashape-Key": "OkuOxBVX04mshkTOIl5dpMW3HpMap1reBJdjsnZGR4o5NsEoQK",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    // If the app successfully gets a response from the api
    success: function(response) {
      // Parse the json response into a javascript object
      var r = JSON.parse(response);

      // Display the quote and author on the webpage
      $("#quote").html(r.quote);
      $("#author").html(r.author);
    }
  });
}