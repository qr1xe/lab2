const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    if (data.length === 0) return 0;
    const sum = data.reduce((acc, student) => acc + student.score, 0);
    return sum / data.length;
}

function findTopStudent(data) {
    if (data.length === 0) return null;
    const topStudent = data.reduce((best, current) =>
        current.score > best.score ? current : best
    );
    return topStudent.name;
}

function filterFailed(data, passScore = 60) {
    return data
        .filter(student => student.score < passScore)
        .map(student => student.name);
}

function addLetterGrade(data) {
    return data.map(student => {
        let letter;
        if (student.score >= 90) {
            letter = "A";
        } else if (student.score >= 75) {
            letter = "B";
        } else {
            letter = "C";
        }
        return { ...student, letter };
    });
}

console.log("--- ОТЧЕТ ПО УСПЕВАЕМОСТИ ---");
console.log("1. Средний балл группы:", calculateAverage(grades).toFixed(2));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников (балл < 60):", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:");
console.table(addLetterGrade(grades));