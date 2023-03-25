//variables
const resultado=document.querySelector('#resultado');
const cmb_marca=document.querySelector('#marca');
const cmb_year=document.querySelector('#year');
const cmb_precioMin=document.querySelector('#minimo');
const cmb_precioMax=document.querySelector('#maximo');

//year
const maxYear=new Date().getFullYear();
const minYear=maxYear-10;

//eventos
document.addEventListener('DOMContentLoaded',()=>{

    mostrarAutos();
    GenerarSelect();
});

cmb_marca.addEventListener('change',(e)=>{
console.log(e.target.value);
});

cmb_year.addEventListener('change',(e)=>{
    console.log(e.target.value);
    });

cmb_precioMin.addEventListener('change',(e)=>{
    console.log(e.target.value);
});

cmb_precioMax.addEventListener('change',(e)=>{
    console.log(e.target.value);
});
//funciones
function mostrarAutos(){

    // console.log('Cargar datos');

    autos.forEach((elemento)=>{

        //simplificar
        const{marca,modelo}=elemento

        const autoHTML=document.createElement('p');
        autoHTML.textContent=`Marca ${elemento.marca}. Modelo ${elemento.modelo}. Year:${elemento.year}`;
        resultado.appendChild(autoHTML);
    });
};

function  GenerarSelect(){
    //llenar el combo con años, se necesita un minimo y maximo
    for (let ind = maxYear; ind >= minYear; ind--) {
        const opcion=document.createElement('option')
    Option.value.ind
    opcion.textContent.ind;
    cmb_year.appendChild(opcion)

    }


}