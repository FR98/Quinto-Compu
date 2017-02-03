from tab import Tab

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
		del(self.tabs[tab]) #Arreglar

	def vaciar(self):
		self.tabs.clear()

	def guardar_tabs(self):
		doc = open("tabs.txt", "w")
		for i in self.tabs:
			print(self.tabs[i])
		doc.close()
		pass