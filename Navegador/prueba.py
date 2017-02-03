from navegador import Navegador

tu_navegador = Navegador()

menu = input("""
	1. Crear nueva tab
	2. Cambiar URL de un tab
	3. Cerrar un tab
	4. Cerrar todos los tabs
	5. Mostrar mis tabs
	6. Guardar mis tabs
	7. Salir
""")


nueva_tab = "si"
while nueva_tab == "si":
	nombre = input("Nombre del tab? ")
	url = input("Url: ")
	tu_navegador.crear_tab(url, nombre)
	nueva_tab = input("Desea crear otro tab? ")

print(tu_navegador.tabs)