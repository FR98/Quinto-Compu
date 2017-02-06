from navegador import Navegador
from tab import Tab

tu_navegador = Navegador()

menu = int(input("""
	1. Crear nueva tab
	2. Cambiar URL de un tab
	3. Cerrar un tab
	4. Cerrar todos los tabs
	5. Mostrar mis tabs
	6. Guardar lista de tabs
	7. Guardar HTML de un tab
	8. Salir 
"""))

while menu != 8:
	if menu == 1:
		nombre = input("Nombre del tab? ")
		url = input("Url: ")
		tu_navegador.crear_tab(url, nombre)
	elif menu == 2:
		tab = input("Nombre del tab que desea modificar? ")
		nombre_nuevo = input("Nombre nuevo del tab? ")
		url_nueva = input("Url: ")
		tu_navegador.modificar_tab(url_nueva, nombre_nuevo, tab)
	elif menu == 3:
		tab = input("Nombre del tab que desea cerrar? ")
		tu_navegador.cerrar(tab)
	elif menu == 4:
		pre = input("Esta seguro? ")
		if pre == "si":
			tu_navegador.vaciar()
	elif menu == 5:
		for i in tu_navegador.tabs:
			print((tu_navegador.tabs[i].nombre)+" "+(tu_navegador.tabs[i].url))
	elif menu == 6:
		tu_navegador.guardar_tabs()
	elif menu == 7:
		tab = int(input("Cual tab desea modificar? "))
		tu_navegador.guardar_html(tab)

	menu = int(input("""
	1. Crear nueva tab
	2. Cambiar URL de un tab
	3. Cerrar un tab
	4. Cerrar todos los tabs
	5. Mostrar mis tabs
	6. Guardar lista de tabs
	7. Guardar HTML de un tab
	8. Salir 
"""))