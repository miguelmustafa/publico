

getDatosPersona();

document.getElementById("logros").addEventListener("click",mostrarMas)

function mostrarMas(){
    document.getElementById("verMas").hidden = false;
}

function getDatosPersona(){

        getApi().then((data)=> {
        console.log(data.results[0]);
        let persona = data.results[0];
        document.getElementById("nombre").innerHTML = persona.name.first + ' ' + persona.name.last;
        document.getElementById("fotoPerfil").src = persona.picture.large;
        document.getElementById("telefono").innerHTML = persona.cell;
        document.getElementById("email").innerHTML = persona.email;
        document.getElementById("direccion").innerHTML = persona.location.street.name + ' ' + persona.location.street.number + ', ' + persona.location.city;
        
        });

        getJson().then((data)=>{
            console.log(data);
            const ul = document.getElementById("educacion");                        
            for (let i=0;i<data.educacion.length;i++)
            {
            console.log(data.educacion[i]);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(data.educacion[i]));
            ul.appendChild(li)
            }

            document.getElementById("perfil").innerHTML = data.perfilProfesional;

            
        })
    }

async function getApi(){
    let response = await fetch('https://randomuser.me/api/');
    let persona = await response.json();  
    return persona;
}

async function getJson(){
    let response = await fetch('json/data.json');
    let data = await response.json();
    return data;
}
