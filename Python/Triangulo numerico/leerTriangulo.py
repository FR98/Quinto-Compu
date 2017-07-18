doc = open("triangle.txt", "r")
lista = []
for linea in doc:
	lista.append(linea.split(" "))

listaSuma = []
listaSuma.append(int(lista[0][0]))

y = 1
x = 0
while y < len(lista):
	if int(lista[y][x]) > int(lista[y][x+1]):
		listaSuma.append(int(lista[y][x]))
		x = x
	elif int(lista[y][x+1]) > int(lista[y][x]):
		listaSuma.append(int(lista[y][x+1]))
		x += 1
	y += 1

print(listaSuma)
suma = sum(listaSuma)
print(suma)

doc.close()