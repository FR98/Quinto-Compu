from django.db import models

# Create your models here.
class Grado(models.Model):
	nombre = models.CharField(max_length = 50)
	orden = models.IntegerField(default = 0)