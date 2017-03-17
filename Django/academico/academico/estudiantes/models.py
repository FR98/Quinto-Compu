from django.db import models

# Create your models here.
class Estudiante(models.Model):
	nombres = models.CharField(max_lenght = 50)
	apellidos = models.CharField(max_lenght = 50)
	edad = models.IntegerField(default= 0)
	grado = models.ForeignKey('grados.Grado')

	def _unicode_(self):
		return "%S %S - %S" % (
			self.nombres
			self.apellidos
			self.grado)