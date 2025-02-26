// const student = {
//   stack: ['HTML'],
//   level: 1,
//   improveLevel() {
//     this.level++;
//     if (this.level === 2) {
//       this.stack.push('CSS');
//     }
//     if (this.level === 3) {
//       this.stack.push('JavaScript');
//     }
//     if (this.level === 4) {
//       this.stack.push('React');
//     }
//     if (this.level === 5) {
//       this.stack.push('NodeJS');
//     }
//     if (this.level > 5) {
//       alert('Студент выучил все технологии!');
//     }
//     return this;
//   },
// };
// console.log(
//   student
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
//     .improveLevel()
// );

// const student = {
//   stack: ['HTML'],
//   level: 1,
//   improveLevel() {
//     this.level++;
//     const technologies = ['HMTL', 'CSS', 'JS', 'REACT', 'NODE'];
//     this.stack.push(technologies[this.level - 1]);
//     if (this.level > 4) {
//       alert('Студент выучил все технологии!');
//     }
//     return this;
//   },
// };
// console.log(
//   student.improveLevel().improveLevel().improveLevel().improveLevel()
// );

const schoolroom = {
  student1: {
    name: Max,
    age: 10,
    grade: 5,
  },
  student2: {
    name: Roma,
    age: 11,
    grade: 3,
  },
  student3: {
    name: Grisha,
    age: 9,
    grade: 4,
  },
};
console.log(this.student1);
