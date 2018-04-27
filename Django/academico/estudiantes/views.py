from django.shortcuts import render
from estudiantes.models import Estudiante

# Create your views here.

def lista_estudiantes(request):
	estudiantes = Estudiante.objects.all()
	return render(request, 'lista_estudiantes.html', {'estudiantes': estudiantes})