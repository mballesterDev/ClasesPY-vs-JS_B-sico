class AlumnoBasic{ //En JS se ponen llaves {} no puntos
    contenidos = '5/10'
    tiempoVisualizaxción ='10 horas'

    constructor(nombre, edad, sexo){ //en JS se usa la palabra reservada constructor para pasar los parametros directamente al crear el objeto 
        this.nombre = nombre         // Se pone this y gracias a esto ya es directamente instanciable en toda la clase(no se importa como parámetro) como el self en PY
        this.edad = edad
        this.sexo = sexo
    }

    MotsrarNombre() { // En JS no hay que declarar con la palabra reservada que es una function simplemenete hay que poner el nombre y los aprámetros (no hay que importar el this ya que es directmenete instanciable )
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
        
    }

}

Alumno1 = new AlumnoBasic('Federico',22,'Hombre');
Alumno1.MotsrarNombre();

class AlumnoPremium extends AlumnoBasic{
    
    constructor(nombre,edad, sexo,domicilio){
        super(nombre,edad,sexo) //ponemos super y el nombre de la clase (si es constructor no se pone)
        this.domicilio = domicilio
    }
    MotsrarNombre(){ //Gracias al this ya es directmente instanciable en toda la clase y no es necesario pasarlo como argumento
        super.MotsrarNombre() // super y el nombre d ela clase (y argumentos si fuera necesario) SUPER SIN LLAMADA .SUPER NO .SUPER() COMO EN PHYTON
        console.log(`Vivo en ${this.domicilio}`);


    }
}

alumno2 = new AlumnoPremium('Ferran',12,'hombre', 'Sagunto')
alumno2.MotsrarNombre()


//DIFERENCIAS  Y CARACTERISTICAS DE LAS CLASES DE JS

// En JavaScript, se utilizan llaves {} en lugar de puntos . para definir un bloque de código dentro de una clase.
// En JavaScript, se utiliza la palabra reservada constructor para definir el constructor de la clase y pasar los parámetros directamente al crear el objeto.
// En JavaScript, se utiliza 'this' para referirse a las variables de instancia dentro de la clase.
// No es necesario importar 'this' como parámetro en JavaScript, ya que 'this' es directamente instanciable en toda la clase.
// En JavaScript, no es necesario declarar una función con la palabra reservada function, solo se utiliza el nombre de la función y los parámetros.
// En la instancia de la clase AlumnoPremium, se utilizan los argumentos adecuados al crear el objeto.
// EL super se hace sin llamada super.Método()
// EN LE CONSTRUCOTR SE PONE SOLO SUPER() super(nombre, edad, sexo)