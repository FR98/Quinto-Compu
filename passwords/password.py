import sys
import string
import random

lista = []
for i in sys.argv: lista.append(i)

opciones = int(lista[2])
doc = open("password.txt", "w")

while opciones > 0:
	contraseña = ""
	largo = int(lista[1])
	while largo > 0:
		contraseña += (random.choice(string.ascii_letters + string.digits))		
		largo -= 1
	opciones -= 1
	doc.write(contraseña + "\n")
doc.close()