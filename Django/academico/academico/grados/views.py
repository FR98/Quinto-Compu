from django.shortcuts import render
from grados.models import Grado
from estudiantes.models import Estudiante

# Create your views here.

def lista_grados(request):
	grados = Grado.objects.all()
	return render(request, 'lista_grados.html', {'grados': grados})

def detalle_grado(request, grado_pk):
	grado = Grado.objects.grado_pk()
	estudiantes = Estudiante.objects.all()
	return render(request, 'detalle_grado.html', {'grado': grado, 'estudiantes': estudiantes})