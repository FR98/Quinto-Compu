from django.db import models

# Create your models here.
class Estudiante(models.Model):
	nombres = models.CharField(max_length = 50)
	apellidos = models.CharField(max_length = 50)
	edad = models.IntegerField(default= 0)
	grado = models.ForeignKey('grados.Grado', on_delete=models.CASCADE)

	def __str__(self):
		return "%s %s - %s" % (
			self.nombres,
			self.apellidos,
			self.grado)