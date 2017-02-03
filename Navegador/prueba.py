from navegador import Navegador

tu_navegador = Navegador()

op = "si"
while op == "si":
	menu = int(input("""
	1. Crear nueva tab
	2. Cambiar URL de un tab
	3. Cerrar un tab
	4. Cerrar todos los tabs
	5. Mostrar mis tabs
	6. Guardar mis tabs
	7. Salir 
"""))

	if menu == 1:
		nombre = input("Nombre del tab? ")
		url = input("Url: ")
		tu_navegador.crear_tab(url, nombre)
	elif menu == 2:
		tab = int(input("Cual tab desea modificar? "))
		nombre = input("Nombre del tab? ")
		url = input("Url: ")
		tu_navegador.modificar_tab(url, nombre, tab)
	elif menu == 3:
		tab = int(input("Que tab desea cerrar? "))
		tu_navegador.cerrar(tab)
	elif menu == 4:
		pre = input("Esta seguro? ")
		if pre == "si":
			tu_navegador.vaciar()
	elif menu == 5:
		for i in tu_navegador.tabs:
			print(tu_navegador.tabs[i])
	elif menu == 6:
		tu_navegador.guardar_tabs()
	elif menu == 7:
		print("Adios")
		break

	op = input("Desea ver el menu? ")