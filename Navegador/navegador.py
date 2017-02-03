from tab import Tab
import requests

class Navegador(object):
	def __init__(self):
		self.tabs = {}

	def crear_tab(self, url, nombre):
		new_tab = Tab(url, nombre)
		self.tabs[nombre] = new_tab

	def modificar_tab(self, url, nombre, tab):
		del self.tabs[tab] #Arreglar
		tab_mod = Tab(url, nombre)
		self.tabs[tab] = tab_mod

	def cerrar(self, tab):
		self.tabs.pop(tab) #Arreglar

	def vaciar(self):
		self.tabs.clear()

	def guardar_tabs(self):
		doc = open("tabs.txt", "w")
		for i in self.tabs:
			tab = self.tabs[i] #arrelgar
			doc.write(tab + "\n")
		doc.close()

	def guardar_html(self, tab):
		url = self.tabs[tab]
		codigo = request.get(url)
		pass