function copy(word1,word2,n) {
    while(n){
        word2 += word1;
        n--;
    }
    document.getElementById("task1").innerHTML = word2;
}
function factorial(n) {
    if (!(Number.isInteger(parseFloat(n)))) {
        alert("N must be integer");
        document.getElementById("task2").innerHTML = "Invalid input";
        return 0;
    }
    var res = n;
    if (n == 0 || n == 1)
        res = 1;
    while(n>1) {
        n--;
        res *= n;
    }
    document.getElementById("task2").innerHTML = res;
    return res;
}
function factor(n) {
    var res = n;
    if (n == 0 || n == 1)
        res = 1;
    while(n>1) {
        n--;
        res *= n;
    }
    return res;
}
function cos_Taylor(x,num) {
    if (!(Number.isInteger(parseFloat(num)))) {
        alert("N must be integer");
        document.getElementById("task3").innerHTML = "Invalid input";
        return 0;
    }
    var cos = 0;
    for (var i = 0; i <= num; i++) {
        cos += (Math.pow(-1,i) * Math.pow(x,2*i))/(factor(2*i));
    }
    document.getElementById("task3").innerHTML
        = "Taylor series = "+cos+"; Math.cos = " + Math.cos(x);
}
var trig_area = function (a, b) {return (a*b)*0.5};
function tri_area(a,b) {
    var area = (a*b)/2;
    document.getElementById("task4").innerHTML = "S = "+area;
}

var students = [
    {
        surname: 'All', name: 'Liza', midname: 'Milly',
        birth: '2001-06-23', address: 'vul.Maryny,14',
        phone: '2-34-32', faculty: 'FI', year: "1"
    },
    {
        surname: 'Boo', name: 'Kate', midname: 'Ally',
        birth: '2000-05-23', address: 'vul.Maryny,14',
        phone: '2-34-32', faculty: 'FI', year: "2"
    },
    {
        surname: 'Loo', name: 'Nate', midname: 'Andre',
        birth: '1999-05-25', address: 'vul.Anny,11',
        phone: '2-34-32', faculty: 'FI', year: "3"
    },
    {
        surname: 'Ken', name: 'Fin', midname: 'Martin',
        birth: '1999-05-25', address: 'vul.Anny,11',
        phone: '2-34-32', faculty: 'FI', year: "4"
    },
    {
        surname: 'Goo', name: 'Den', midname: 'Coul',
        birth: '2000-05-13', address: 'vul.Kateryny,12',
        phone: '2-34-32', faculty: 'FEN', year: "1"
    },
    {
        surname: 'Noo', name: 'Alin', midname: 'Kathy',
        birth: '2000-05-13', address: 'vul.Kateryny,12',
        phone: '2-34-32', faculty: 'FEN', year: "2"
    },
    {
        surname: 'Zoo', name: 'Late', midname: 'Martin',
        birth: '2000-05-13', address: 'vul.Galyny,12',
        phone: '2-34-32', faculty: 'FEN', year: "3"
    },
    {
        surname: 'Soo', name: 'Milena', midname: 'Katty',
        birth: '2000-05-13', address: 'vul.Karyny,12',
        phone: '2-34-32', faculty: 'FEN', year: "4"
    },
    {
        surname: 'Foo', name: 'Bate', midname: 'Pablo',
        birth: '1999-03-13', address: 'vul.Galyny,13',
        phone: '2-34-32', faculty: 'FGN', year: "1"
    },
    {
        surname: 'Joo', name: 'Mate', midname: 'Teo',
        birth: '2002-03-13', address: 'vul.Galyny,13',
        phone: '2-34-32', faculty: 'FGN', year: "2"
    },
    {
        surname: 'Koo', name: 'Nina', midname: 'Milo',
        birth: '1998-03-13', address: 'vul.Galyny,13',
        phone: '2-34-32', faculty: 'FGN', year: "3"
    },
    {
        surname: 'Loo', name: 'Lena', midname: 'Lalo',
        birth: '1999-03-13', address: 'vul.Galyny,13',
        phone: '2-34-32', faculty: 'FGN', year: "4"
    },
    {
        surname: 'Soo', name: 'Tate', midname: 'Alen',
        birth: '2000-05-14', address: 'vul.Daryny,15',
        phone: '2-34-32', faculty: 'FEN', year: "2"
    }
];

function faculty(fac) {
    var answer = ' ';
    for (var i = 0; i < students.length; i++) {
        if(students[i].faculty === fac){
            answer += students[i].name+' '+students[i].midname+' '+students[i].surname+'; ';
        }
    }
    document.getElementById("task5").innerHTML = answer;
}
function faculty_year(fac,year) {
    var answer = ' ';
    for (var i = 0; i < students.length; i++) {
        if((students[i].year === year)&&(students[i].faculty === fac)){
            answer += students[i].name+' '+students[i].midname+' '+students[i].surname+'; ';
        }
    }
    document.getElementById("task6").innerHTML = answer;
}
function get_student_byDate(birth_date) {
    var answer = ' ';
    for (var i = 0; i < students.length; i++) {
        if(students[i].birth.getFullYear() > birth_date){
            answer += students[i].name+' '+students[i].midname+' '+students[i].surname+'; ';
        }
    }
    document.getElementById("task7").innerHTML = answer;
}