/* Conceptos básicos de POO
// - Clase
// - Objeto
// - Atributo
// - Metodo
// - Constructor
// - Instanciación
*/

/* class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy <b>${especie}</b> tengo <b>${edad}</b> años y soy de color <b>${color}</b>`
    }
    verInformacion = () => {
        document.write(this.informacion + "<br>");
    }
}

const perro = new animal("perro", 3, "negro");

perro.verInformacion();
*/

// Historia de cofla 3
// Caso 1
class Celular {
    constructor(color,peso,rdp,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido = () =>{
        if (this.encendido == false) {
            alert("Celular prendido");
            this.encendido = true;
        }else {
            alert("Celular apagado");
            this.encendido = false;
        }
    } 

    reiniciar = () =>{
        if (this.encendido == true) {
            alert("Reiniciando celular");
        }else {
            alert("El celular esta apagado");
        }
    }

    tomarFoto = () =>{
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo = () =>{
        alert(`Grabando video en: ${this.resolucionDeCamara}`);
    }

    informacionDelCelular = () =>{
        return`
            Color: <b>${this.color}</b><br>
            Peso: <b>${this.peso}</b><br>
            Resolucion de pantalla: <b>${this.resolucionDePantalla}</b><br>
            Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
            Memoria Ram: <b>${this.memoriaRam}</b><br>
            `;
    }
}
// const celular = new Celular("Negro","150g","5'","hd","1GB");
// const celular1 = new Celular("Blanco","250g","5.4'","full hd","4GB");
// const celular2 = new Celular("Gris","1350g","5.7'","hd","8GB");

// celular.presionarBotonEncendido();
// celular.tomarFoto();
// celular.grabarVideo();
// celular.reiniciar();
// celular.presionarBotonEncendido();

// celular.informacionDelCelular();
// celular1.informacionDelCelular();
// celular2.informacionDelCelular();

// Caso 2
class CelularAltaGama extends Celular {
    constructor(color,peso,rdp,rdc,ram,rdce) {
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento = () =>{
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial = () =>{
        alert("Vamos a iniciar un reconocimiento facial");
    }
    informacionAltaGama = () =>{
        return this.informacionDelCelular() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}<br><br>`;
    }
}

// Alta gama
// const celular1 = new CelularAltaGama("Blanco","250g","5.4'","full hd","4GB","4k");
// const celular2 = new CelularAltaGama("Gris","1350g","5.7'","hd","8GB","5k");

// document.write(`
// ${celular1.informacionAltaGama()}
// ${celular2.informacionAltaGama()}
// `);

// Caso 3
class App {
    constructor(descargas,puntuacion,peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar = () =>{
        if (this.instalada == false) {
            this.iniciada = true;
            alert("App instalada correctamente");
        }
    }
    desinstalar = () =>{
        if (this.instalada == true) {
            this.iniciada = false;
            alert("App desinstalada correctamente");
        }
    }
    abrir = () =>{
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("App iniciada correctamente");
        }
    }
    cerrar = () =>{
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("App cerrada correctamente");
        }
    }
    informacionDeApp = () =>{
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br><br>
        `;
    }
}

app = new App("13000", "3 estrellas", "900mb");
app1 = new App("10000", "4 estrellas", "1.5gb");
app2 = new App("2000", "10 estrellas", "250mb");
app3 = new App("32000", "5 estrellas", "90mb");
app4 = new App("32000", "7 estrellas", "330mb");
app5 = new App("84000", "3 estrellas", "240mb");
app6 = new App("3000", "4 estrellas", "200mb");

document.write(`
    ${app.informacionDeApp()}
    ${app1.informacionDeApp()}
    ${app2.informacionDeApp()}
    ${app3.informacionDeApp()}
    ${app4.informacionDeApp()}
    ${app5.informacionDeApp()}
    ${app6.informacionDeApp()}
    `);