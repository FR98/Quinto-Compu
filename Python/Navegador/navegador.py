from tab import Tab
import requests

class Navegador(object):
	def __init__(self):
		self.tabs = {}

	def crear_tab(self, url, nombre):
		new_tab = Tab(url, nombre)
		self.tabs[nombre] = new_tab

	def modificar_tab(self, url_nueva, nombre_nuevo, tab):
		self.tabs[tab].url = url_nueva
		self.tabs[tab].nombre = nombre_nuevo

	def cerrar(self, tab):
		self.tabs.pop(tab)

	def vaciar(self):
		self.tabs.clear()

	def mostrar(self):
		for i in self.tabs:
			print((self.tabs[i].nombre)+" -- "+(self.tabs[i].url))

	def guardar_tabs(self):
		doc = open("lista_tabs.txt", "w")
		for i in self.tabs:
			doc.write((self.tabs[i].nombre)+" -- "+(self.tabs[i].url)+"\n")
		doc.close()

	def guardar_html(self, tab):
		url = self.tabs[tab].url

		try:
			codigo = requests.get(url)
		except:
			if "http://" not in url:
				codigo = requests.get("http://" + url)
			else:
				return False

		nombre_doc = str(self.tabs[tab].nombre) + "_HTML" + ".txt"
		doc = open(nombre_doc, "w")
		doc.write(codigo.text)
		doc.close()