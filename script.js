let jk = document.getElementById('joke');
let n = document.getElementById('check');

// async function getjoke(){
//     let res = await fetch('https://v2.jokeapi.dev/joke/any?type=twopart');
//     let data = await res.json();
//     jk.innerHTML = `${data.setup}<br><br>${data.delivery}</b>`;
// }

// n.addEventListener('click', getjoke);

let j = async () => {
 let response = await fetch('https://v2.jokeapi.dev/joke/any?type=single');
 let data = await response.json();
 return data;
}
n.onclick = async () => {
    let jokedata = await j();
        jk.innerText = jokedata.joke;
}