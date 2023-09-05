/*
*   Name: Ben Nguyen
*    File name: sort.js
*    Date: July 12, 2023
*    Purpose: This file contains javascript code for the sorting, filtering and searching buttons.
*/

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get the necessary elements
  const courseSelect = document.getElementById('courseSelect');
  const sortAscendingButton = document.getElementById('sortAscendingButton');
  const sortDescendingButton = document.getElementById('sortDescendingButton');
  const searchInput = document.getElementById('searchInput');
  const level1Courses = document.getElementsByClassName('level1');
  const level2Courses = document.getElementsByClassName('level2');

  // Function to show all courses
  function showAllCourses() {
    for (const course of level1Courses) {
      course.style.display = 'block';
    }
    for (const course of level2Courses) {
      course.style.display = 'block';
    }
  }

  // Function to show only level 1 courses
  function showLevel1Courses() {
    for (const course of level1Courses) {
      course.style.display = 'block';
    }
    for (const course of level2Courses) {
      course.style.display = 'none';
    }
  }

  // Function to show only level 2 courses
  function showLevel2Courses() {
    for (const course of level1Courses) {
      course.style.display = 'none';
    }
    for (const course of level2Courses) {
      course.style.display = 'block';
    }
  }

  // Function to filter courses based on search query and selected value
  function filterCourses() {
    const searchQuery = searchInput.value.toLowerCase();
    const selectedValue = courseSelect.value;

    for (const course of level1Courses) {
      const courseTitle = course.querySelector('h4').textContent.toLowerCase();

      // Filter based on search query and selected value
      if (courseTitle.includes(searchQuery) && (selectedValue === 'all' || selectedValue === 'coursesLevel1')) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    }

    for (const course of level2Courses) {
      const courseTitle = course.querySelector('h4').textContent.toLowerCase();

      // Filter based on search query and selected value
      if (courseTitle.includes(searchQuery) && (selectedValue === 'all' || selectedValue === 'coursesLevel2')) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    }
  }

  // Event listener for the course filter dropdown
  courseSelect.addEventListener('change', function () {
    filterCourses();
  });

  // Event listener for the sort ascending button
  sortAscendingButton.addEventListener('click', function () {
    sortCoursesAscending();
  });

  // Event listener for the sort descending button
  sortDescendingButton.addEventListener('click', function () {
    sortCoursesDescending();
  });

  // Event listener for the search input
  searchInput.addEventListener('input', function () {
    filterCourses();
  });

  // Function to sort courses in ascending order
  function sortCoursesAscending() {
    const coursesContainer = document.querySelector('.courses');
    const courses = Array.from(coursesContainer.children);
    courses.sort(function (a, b) {
      const aLevel = a.classList.contains('level1') ? 1 : 2;
      const bLevel = b.classList.contains('level1') ? 1 : 2;
      return aLevel - bLevel;
    });
    courses.forEach(function (course) {
      coursesContainer.appendChild(course);
    });
  }

  // Function to sort courses in descending order
  function sortCoursesDescending() {
    const coursesContainer = document.querySelector('.courses');
    const courses = Array.from(coursesContainer.children);
    courses.sort(function (a, b) {
      const aLevel = a.classList.contains('level1') ? 1 : 2;
      const bLevel = b.classList.contains('level1') ? 1 : 2;
      return bLevel - aLevel;
    });
    courses.forEach(function (course) {
      coursesContainer.appendChild(course);
    });
  }

  // Initial filtering of courses
  filterCourses();
});
