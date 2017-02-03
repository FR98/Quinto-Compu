from tab import Tab

class Navegador(object):
	def __init__(self):
		self.tabs = {}

	def crear_tab(self, url, nombre):
		new_tab = Tab(url, nombre)
		self.tabs[nombre] = new_tab

	