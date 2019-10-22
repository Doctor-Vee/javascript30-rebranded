const forming = document.getElementById('forming')
let output = "";
let str = ""
for (let i = 65; i < 91; i++) {
    str = `<audio data-key="${i}" src="./alphabets/${String.fromCharCode(i+32)}.wav"></audio>
    `
    output += str
}
// for (let i = 65; i < 91; i++) {
//     str = `
//     <div data-key="${i}" class="key">
//     <kbd>${String.fromCharCode(i)}</kbd>
//     <span class="sound">${String.fromCharCode(i)}</span>
//     </div>
//     `
//     output += str
// }
console.log(output)