from django import forms
from agencias.models import Agencia


class AgenciaForm(forms.ModelForm):
	class Meta:
		model = Agencia
		fields = [
			'nombre', 
			'numero']