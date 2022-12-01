let students = [
    {
        'id': 001,
        'f_name': 'Alex',
        'l_name': 'B',
        'gender': 'M',
        'married': false,
        'age': 22,
        'paid': 250,
        'courses': ['JavaScript', 'React']
    },
    {
        'id': 002,
        'f_name': 'Ibrahim',
        'l_name': 'M',
        'gender': 'M',
        'married': true,
        'age': 32,
        'paid': 150,
        'courses': ['JavaScript', 'PWA']
    },
    {
        'id': 003,
        'f_name': 'Rubi',
        'l_name': 'S',
        'gender': 'F',
        'married': false,
        'age': 27,
        'paid': 350,
        'courses': ['Blogging', 'React', 'UX']
    },
    {
        'id': 004,
        'f_name': 'Zack',
        'l_name': 'F',
        'gender': 'M',
        'married': true,
        'age': 36,
        'paid': 250,
        'courses': ['Git', 'React', 'Branding']
    }
];


//  using the some method, we have found that there is a student below age 30. now we'll find it
//  for using find method it return the first matched element from the array that satisfies the condition in the function.
// if condition mathed it return undefined.
// NOTE :->  it return only matched first element from the array 

const studentDetails = students.find((ele, ind)=>{
    return ele.age > 30
})

console.log(studentDetails)
