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

  function searchNames() {
    //Get value of .search input
    let $searchInput = $("#searchName")
      .val()
      .toUpperCase();

    //Locate all images tied to .search-box
    let $names = $(members${i}.firstName);
    console.log($names);

    //Loop through image captions in Lighthouse attr.
    for (let i = 0; i < $names.length; i++) {
      let $name = $($names[i]).attr("data-title");

      //If matched, filter out images
      if ($name.toUpperCase().indexOf($searchInput) > -1) {
        $($names[i]).css({ display: "" });
      } else {
        $($names[i]).css({ display: "none" });
      }
    }
  }
  //Event listener
  $("#searchName").keyup(searchNames);
});
