from django.shortcuts import render
from grados.models import Grado 

# Create your views here.

def lista_grados(request):
	grados = Grado.objects.all()
	return render(request, 'lista_grados.html', {'grados': grados})