from django import forms
from grados.models import Grado


class GradoForm(forms.ModelForm):
	class Meta:
		model = Grado
		fields = [
			'nombre', 
			'orden']