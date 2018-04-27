"""academico URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from grados import views as grados_views
from estudiantes import views as estudiantes_views

urlpatterns = [
    url(r'^admin/', 
        admin.site.urls),

    url(r'^grados/$', 
        grados_views.lista_grados, 
        name = "lista_grados"),
    
    url(r'^estudiantes/', 
        estudiantes_views.lista_estudiantes, 
        name = "lista_estudiantes"),
    
    url(r'^grados/(?P<grado_pk>[0-9]+)', 
        grados_views.detalle_grado, 
        name = "detalle_grado"),
    
    url(r'^grados/crear/', 
        grados_views.crear_grado, 
        name="crear_grado"),
]
