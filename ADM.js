/* PROTEÇÃO LOGIN */

if(localStorage.getItem("logado") !== "true"){

window.location.href="login.html"

}

/* DADOS SIMULADOS */

const dados={

saldo:500000,

usuarios:1543,

afiliados:28,

jogos:12

}

/* ATUALIZAR CARDS */

const saldo=document.getElementById("saldo")
const usuarios=document.getElementById("usuarios")
const afiliados=document.getElementById("afiliados")
const jogos=document.getElementById("jogos")

if(saldo) saldo.innerText="R$ "+dados.saldo.toLocaleString()

if(usuarios) usuarios.innerText=dados.usuarios

if(afiliados) afiliados.innerText=dados.afiliados

if(jogos) jogos.innerText=dados.jogos


/* MENU NOTIFICAÇÕES */

const btn=document.getElementById("btnNotificacao")
const menu=document.getElementById("menuNotificacoes")

if(btn && menu){

btn.onclick=()=>{

menu.classList.toggle("active")

}

document.addEventListener("click",(e)=>{

if(!btn.contains(e.target) && !menu.contains(e.target)){

menu.classList.remove("active")

}

})

}


/* GRÁFICO */

const ctx=document.getElementById("grafico")

if(ctx){

new Chart(ctx,{

type:"line",

data:{

labels:["Jan","Fev","Mar","Abr","Mai","Jun"],

datasets:[{

label:"Lucro",

data:[1200,1900,3000,2500,3200,4200],

borderColor:"#38bdf8",

tension:0.4

}]

},

options:{

plugins:{
legend:{labels:{color:"white"}}
},

scales:{
x:{ticks:{color:"white"}},
y:{ticks:{color:"white"}}
}

}

})

}