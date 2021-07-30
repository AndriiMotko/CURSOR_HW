const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
 

// Задача №01 ========================================================================

function getSubjects(student) {
      const subjects = Object.keys(student.subjects);

      for (let i = 0; i < subjects.length; i++) {
        subjects[i] = subjects[i].slice(0,1).toUpperCase() + subjects[i].slice(1);
        if (subjects[i].includes("_")) {
          subjects[i] = subjects[i].split("_").join(" ");
        }
      }
      return subjects;
}

export {getSubjects, students};