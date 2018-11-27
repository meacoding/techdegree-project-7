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

  //Excessive for demonstrating a mockup but a real project wouldn't be hard coded - in HTML or in JS.
  const memberImg = (i, className) => {
    const member = document.querySelectorAll(className)[0];
    member.style.background = `yellow url('${
      members[i].img
    }') center center / cover no-repeat`;
  };
  memberImg(0, ".member-img.member-0");

  const memberName = (i, className) => {
    const member = document.querySelectorAll(className)[0];
    const name = `${members[i].firstName} ${members[i].lastName}`;
    member.textContent = name;
  };
  memberName(0, ".member-name.member-0");
});
