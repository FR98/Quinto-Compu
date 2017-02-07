op = "si"
productos = {}

while op == "si":
	producto = input("Ingrese el nombre del producto: ")
	cantidad = int(input("Ingrese la cantidad: "))
	productos[producto] = cantidad
	op = input("Desea agregar otro producto? ")

for producto, cantidad in productos.items():
	print(producto, "\t", cantidad) #\t es un tab