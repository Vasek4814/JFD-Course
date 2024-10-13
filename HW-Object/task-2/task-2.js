const student = {
fullName: 'Максим',
    experienceInMonths: 121,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (student, jobName) => {
    alert(`“Поздравляем! У студента ${student.fullName} появилась новая работа! 
    Теперь он ${jobName}!!!`)
    const newStudent = {...student}
    newStudent.job = jobName
    return newStudent
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик')

console.log('updatedStudent: ', updatedStudent)

