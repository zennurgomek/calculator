const numbers = document.querySelectorAll(".btn-num");
const ekran = document.querySelector(".resultTxt");

const specialChars = ['+', '-', '*', '/', '.'];

function handleClick() {
  console.log(this.innerText);
  ekran.innerText += this.innerText;
}
for (const number of numbers) {
  number.addEventListener("click", handleClick);

}
function handleReset() {
  ekran.innerText = '0' ; 
}  
document.querySelector('.btn-reset').addEventListener('click', handleReset);

function handleDelete() {
  // aşağıdaki kod ne yazıldıysa son elemanı siliyor.
  // nereden başlasın ve kaç karakter silsin.
  ekran.innerText = ekran.innerText.substring(0, ekran.innerText.length -1);
  // substring -> nereden başla ve kaç karakter sildiğini
  // = 'den sonra bir sonuç elde ediyoruz ve aldıgığımız sonuc öyle kalıyor.
  // aldığımız sonucu atama yapmamız gerektiği için tekrar ekran' a eşitledik.
}

document.querySelector('.btn-del').addEventListener('click', handleDelete);


// şöyle bir tabir var
// EVAL is Evil
// xss'e sebebiyet verir. Güvenlik açığına sebep verir.
// eğer hesap makinesi yapmıyorsanız evalden kaçın !!!

function handleCalculate() {
  // console.log('hesapla butonu');
  // ekran.innerText = eval(ekran.innerText);
  try {
   ekran.innerText = eval(ekran.innerText); 
  } catch {
    alert('eksik işlem var')
  }
}

document.querySelector('.btn-calculate').addEventListener('click', handleCalculate);


let currentTheme = 1; 

function toggleTheme() {
    const calculator = document.querySelector(".calculator");
    
    currentTheme = (currentTheme % 3) + 1;
    calculator.setAttribute("data-theme", currentTheme);
}


document.querySelector(".toggle-checkbox").addEventListener("click", toggleTheme);
