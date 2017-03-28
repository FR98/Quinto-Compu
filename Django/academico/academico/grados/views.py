from django.shortcuts import render
from grados.models import Grado
from estudiantes.models import Estudiante
from grados.forms import GradoForm

# Create your views here.

def lista_grados(request):
	grados = Grado.objects.all()
	formulario = GradoForm()
	return render(request, 'lista_grados.html', {
		'grados': grados, 
		'grado_form': formulario})

def detalle_grado(request, grado_pk):
	grado = Grado.objects.get(pk = grado_pk)
	estudiantes = Estudiante.objects.filter(grado=grado)
	return render(request, 'detalle_grado.html', {
		'grado': grado, 
		'estudiantes': estudiantes})