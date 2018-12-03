/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", e => {
  const members = [
    {
      firstName: "Mea",
      lastName: "Coding",
      img: "images/member-0.jpg",
      email: "",
      signupDate: "10/10/18"
    },
    {
      firstName: "Victoria",
      lastName: "Chambers",
      img: "images/member-1.jpg",
      email: "victoria.chambers80@example.com",
      signupDate: "10/10/18"
    },
    {
      firstName: "Dale",
      lastName: "Byrd",
      img: "images/member-2.jpg",
      email: "dale.byrd52@example.com",
      signupDate: "10/10/18"
    },
    {
      firstName: "Dawn",
      lastName: "Wood",
      img: "images/member-3.jpg",
      email: "dawn.wood16@example.com",
      signupDate: "10/10/18"
    },
    {
      firstName: "Dan",
      lastName: "Oliver",
      img: "images/member-4.jpg",
      email: "dan.oliver82@example.com",
      signupDate: "10/10/18"
    }
  ];

  //Excessive for demonstrating a mockup but a real project wouldn't be hard coded.
  const memberImg = (i) => {
    const className = `.member-img.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    member.style.background = `yellow url('${
      members[i].img
    }') center center / cover no-repeat`;
  };
  memberImg(0);
  memberImg(1);
  memberImg(2);
  memberImg(3);
  memberImg(4);

  const memberName = (i) => {
    const className = `.member-name.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    const name = `${members[i].firstName} ${members[i].lastName}`;
    member.textContent = name;
  };
  memberName(0);
  memberName(1);
  memberName(2);
  memberName(3);
  memberName(4);

  const memberEmail = (i) => {
    const className = `.member-email.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    const email = `${members[i].email}`;
    member.textContent = email;
  };
  memberEmail(1);
  memberEmail(2);
  memberEmail(3);
  memberEmail(4);

  const memberDate = (i) => {
    const className = `.member-date.member-${i}`;
    const member = document.querySelectorAll(className)[0];
    const date = `${members[i].signupDate}`;
    member.textContent = date;
  };
  memberDate(1);
  memberDate(2);
  memberDate(3);
  memberDate(4);

  //Hide alert message
  const alert = document.querySelectorAll(".alert")[0];
  const hide = document.getElementById("hide");
  hide.addEventListener("click", e => {
  alert.style.display = "none";
});
});



