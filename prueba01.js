let nombre='Lucas Alonso'

nombre = nombre.replace(' ','')
nombre= nombre.toLowerCase()
for(let i=1;i<=100;i++){
    document.write(nombre+i+'@gmail.com'+'<br>')
}
let total;
let contador = 0;
const vuelta= 1;
while(total<100){
    total+=vuelta;
    contador++;
    let correo = `lucasAlonso${contador}@gmail.com`
    document.write(`${correo} <br>`)
}
