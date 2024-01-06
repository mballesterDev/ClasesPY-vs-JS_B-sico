class AlumnoBasico:
    permisos = "5/10"
    tiempoVisualizaxión = "10 horas"

    def __init__(self, nombre, edad, sexo):
        self.nombre = nombre
        self.edad = edad
        self.sexo = sexo

    def MostrarNombre(self):
        print(f" Hola me llamo {self.nombre} tengo {self.edad} y soy {self.sexo} ")

class AlumnoPremium(AlumnoBasico):
    def __init__(self, nombre, edad, sexo, domicilio):
        super().__init__(nombre, edad, sexo)
        self.domicilio = domicilio


    def MostrarNombre(self):
        super().MostrarNombre()
        print(f"Y vivo en {self.domicilio}")

alumnoP = AlumnoPremium("Manel", 22, "Hombre", "Berlin")
alumnoP.MostrarNombre()