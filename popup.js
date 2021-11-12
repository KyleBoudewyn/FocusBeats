//document.addEventListener("DOMContentLoaded", function () {
// Initialize button with users's prefered color
let changeColor = document.getElementById("changeColor");
//let chill = document.getElementById("chill");
let lofi = document.getElementById("lofi");
let hiphop = document.getElementById("hiphop");
let movieost = document.getElementById("movieost");
let michael = document.getElementById("michael");

// const cache = {};

// When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: window
//       .open("https://youtu.be/hf5Ibp1Tc0M?t=157", "_blank")
//       .focus(),
//   });
// });

// document.getElementById("chill").addEventListener("click", function () {
//   console.log("Chill was pressed");
// });

// The body of this function will be execuetd as a content script inside the
// current page

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("changeColor");
  // onClick's logic below:
  link.addEventListener("click", function () {
    console.log("hello");
    window
      .open(
        "https://www.youtube.com/watch?v=9UMxZofMNbA&list=PLLaDNpMyTVqaeIhSqz-o-DMI7L5mHUaYg",
        "_blank"
      )
      .focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("lofi");
  // onClick's logic below:
  link.addEventListener("click", function () {
    console.log("hello");
    window
      .open(
        "https://www.youtube.com/watch?v=RZeqa_RI1aI&list=PLLaDNpMyTVqYxRX0sCNM4CrtY7a-d2vpI",
        "_blank"
      )
      .focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("hiphop");
  // onClick's logic below:
  link.addEventListener("click", function () {
    console.log("hello");
    window
      .open(
        "https://www.youtube.com/watch?v=CgV8LP9og4I&list=PLLaDNpMyTVqbUE1wEjPg0Fa12rAdeJp_a",
        "_blank"
      )
      .focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("movieost");
  // onClick's logic below:
  link.addEventListener("click", function () {
    window
      .open(
        "https://www.youtube.com/watch?v=ErS7HZFBKNs&list=PLLaDNpMyTVqaebjf80JpWCAJq8QMm5qrr",
        "_blank"
      )
      .focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("michael");
  // onClick's logic below:
  link.addEventListener("click", function () {
    window.open("https://youtu.be/hf5Ibp1Tc0M?t=206", "_blank").focus();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("custom");
  // onClick's logic below:
  link.addEventListener("click", function () {
    //chrome.storage.sync.set({ nameInTheStorage: jsVariables }, function () {
    //});
    //alert(cache);
    // if (chrome.storage.local.set["userURL"] === undefined) {
    //   const customURL = prompt("Please type in the custom URL: ");
    //   chrome.storage.local.set["userURL"] = customURL;
    // }
    //cache["userURL"] = "test";
    //alert(cache["userURL"]); //.sync.get["userURL"]);
    // alert(
    //   chrome.storage.local.get(["key"], function (result) {
    //     alert("Value currently is " + result.key);
    //     return result.key;
    //   })
    // );
    // if (
    //   !chrome.storage.local.get(["key"], function (result) {
    //     //alert("Value currently is " + result.key);
    //   })
    // ) {
    //   chrome.storage.local.set({ key: getURL() }, function () {
    //     //alert("Value is set to " + value);
    //   });
    // }
    // chrome.storage.local.get(["key"], function (result) {
    //   //alert("Value currently is " + result.key);
    // });
    const customURL = prompt("Please type in the custom URL: ");
    window.open(chrome.storage.local.get["key"], "_blank").focus();
  });
  //const customURL = prompt("Please type in the custom URL: ");
  //window.open(customURL, "_blank").focus();
});
//});

// The handler also must go in a .js file
function handler() {
  console.log("hello");
}
// function getURL() {
//   const value = prompt("Please type in the custom URL: ");
//   return value;
// }

// chrome.storage.local.set({ key: getURL() }, function () {
//   //alert("Value is set to " + value);
// });

// chrome.storage.local.get(["key"], function (result) {
//   //alert("Value currently is " + result.key);
// });
