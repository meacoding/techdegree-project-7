/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", e => {
  const members = [
    {
      memberID: 0,
      firstName: "Mea",
      lastName: "Coding",
      img: "images/member-0.jpg",
      email: "",
      signupDate: "10/10/18"
    },
    {
      memberID: 1,
      firstName: "Dan",
      lastName: "Oliver",
      img: "images/member-4.jpg",
      email: "dan.oliver82@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 2,
      firstName: "Dawn",
      lastName: "Wood",
      img: "images/member-3.jpg",
      email: "dawn.wood16@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 3,
      firstName: "Dale",
      lastName: "Byrd",
      img: "images/member-2.jpg",
      email: "dale.byrd52@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 4,
      firstName: "Victoria",
      lastName: "Chambers",
      img: "images/member-1.jpg",
      email: "victoria.chambers80@example.com",
      signupDate: "10/10/18"
    }
  ];

  const activity = [
    {
      entry: 1,
      memberID: 0,
      action: "posted",
      thing: "<a href='#'>Test Blog</a>",
      age: "99 hours ago"
    },
    {
      entry: 2,
      memberID: 1,
      action: "posted",
      thing: "<a href='#'>YourApp's SEO Tips</a>",
      age: "1 day ago"
    },
    {
      entry: 3,
      memberID: 2,
      action: "commented on",
      thing: "<a href='#'>Facebook's Changes for 2016</a>",
      age: "5 hours ago"
    },
    {
      entry: 4,
      memberID: 3,
      action: "liked the post",
      thing: "<a href='#'>Facebook's Changes for 2016</a>",
      age: "1 day ago"
    },
    {
      entry: 5,
      memberID: 4,
      action: "commented on",
      thing: "<a href='#'>YourApp's SEO Tips</a>",
      age: "4 hours ago"
    }
  ];

  //profile image
  const profileImg = document.querySelectorAll(".profile-img")[0];
  profileImg.style.background = `black url('${
    members[0].img
  }') center center / cover no-repeat`;

  //profile name
  const profileName = document.querySelectorAll(".profile-name")[0];
  profileName.innerHTML = `${members[0].firstName} ${members[0].lastName}`;

  //activity: last four new members
  const lastFourNewMembers = members.slice(members.length - 4);
  lastFourNewMembers.reverse();

  //activity: last four member activities
  const lastFourOfActivity = activity.slice(activity.length - 4);
  lastFourOfActivity.reverse();

  //The member activity will pull the last 4 entries and reverse order.
  const memberActivity = i => {
    const memberActivity = document.querySelectorAll(`.member-activity-${i}`);
    const memberLookup = members.find(
      person => person.memberID === lastFourOfActivity[i].memberID
    );
    memberActivity[0].style.background = `yellow url('${
      memberLookup.img
    }') center center / cover no-repeat`;
    memberActivity[1].innerHTML = `${memberLookup.firstName} ${
      memberLookup.lastName
    } ${lastFourOfActivity[i].action} ${lastFourOfActivity[i].thing}`;
    memberActivity[2].innerHTML = `${lastFourOfActivity[i].age}`;
  };
  memberActivity(0);
  memberActivity(1);
  memberActivity(2);
  memberActivity(3);

  //Excessive for demonstrating a mockup but a real project wouldn't be hard coded.
  const memberImg = i => {
    const className = `.member-img.member-${i}`;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      member[j].style.background = `black url('${
        lastFourNewMembers[i].img
      }') center center / cover no-repeat`;
    }
  };
  memberImg(0);
  memberImg(1);
  memberImg(2);
  memberImg(3);

  const memberName = i => {
    const className = `.member-name.member-${i}`;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      const name = `${lastFourNewMembers[i].firstName} ${
        lastFourNewMembers[i].lastName
      }`;
      member[j].textContent = name;
    }
  };
  memberName(0);
  memberName(1);
  memberName(2);
  memberName(3);

  const memberEmail = i => {
    const className = `.member-email.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    const email = `${lastFourNewMembers[i].email}`;
    member.textContent = email;
  };
  memberEmail(0);
  memberEmail(1);
  memberEmail(2);
  memberEmail(3);

  const memberDate = i => {
    const className = `.member-date.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    const date = `${members[i].signupDate}`;
    member.textContent = date;
  };
  memberDate(0);
  memberDate(1);
  memberDate(2);
  memberDate(3);

  //Hide alert message
  const alert = document.querySelectorAll(".alert")[0];
  const hide = document.getElementById("hide");
  hide.addEventListener("click", e => {
    alert.style.display = "none";
  });

  // function searchNames() {
  //   //Get value of .search input
  //   let $searchInput = $("#searchName")
  //     .val()
  //     .toUpperCase();

  //   let $names = [];

  //   let $members = () => {
  //     for (let i = 0; i < members.length; i++) {
  //       $names.push(members[i].firstName);
  //       console.log($names);
  //     }
  //   };

  //   $members();

  //   for (let i = 0; i < $names.length; i++) {
  //     let $name = $names[i];

  //     if ($name.toUpperCase().indexOf($searchInput) > -1) {
  //       console.log($name);
  //     } else {
  //       console.log("no cookie");
  //     }
  //   }
  // }
  // searchNames();
  // //Event listener
  // $("#searchName").keyup(searchNames);

  //---------------

  let $searchInput = $("#searchName")
    .val()
    .toUpperCase();

  let $names = [];

  let $members = () => {
    for (let i = 0; i < members.length; i++) {
      $names.push(members[i].firstName);
    }
  };
  $members();
  console.log($names);

  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
      var a,
        b,
        i,
        val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      console.log(a);
      /*append the DIV element as a child of the autocomplete container:*/
      const $searchName = document.getElementById("searchName");
      console.log($searchName, "$searchName");
      $searchName.after(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) {
        //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });
  }

  autocomplete(document.getElementById("searchName"), $names);
});
