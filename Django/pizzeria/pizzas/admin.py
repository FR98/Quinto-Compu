from django.contrib import admin

# Register your models here.

from pizzas.models import Pizza, Ingrediente

admin.site.register(Ingrediente)
admin.site.register(Pizza)