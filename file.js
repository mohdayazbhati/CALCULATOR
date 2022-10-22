// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
// let string = ''
// let buttons = document.querySelectorAll('.button')
// let input = document.querySelector('.input')
// // console.log(buttons)
// Array.from(buttons).forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string)
//             input.value = string
//         }else if(e.target.innerHTML == 'C'){
//             string = ''
//             input.value = string
//         }else{
//             console.log(e.target)
//             string += e.target.innerHTML
//             input.value = string
//         }
//     })
// })

// let string = ''
// let buttons = document.querySelectorAll('.button')
// let input = document.querySelector('.input')
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string)
//             input.value = string
//         }else if(e.target.innerHTML == 'C'){
//             string = ''
//             input.value = string
//         }else{
//             console.log(e.target)
//             string += e.target.innerHTML
//             input.value = string
//         }
//     })
// })
let string = ''
let buttons = document.querySelectorAll('.button')
let input = document.querySelector('.input')
Array.from(buttons).forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }else if(e.target.innerHTML == 'C'){
            string = ''
            input.value = string
        }else{
            console.log(e.target)
            string += e.target.innerHTML
            input.value = string
        }
    })
})