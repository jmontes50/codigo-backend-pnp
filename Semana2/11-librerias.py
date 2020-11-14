from camelcase import CamelCase

camello = CamelCase('texto')
texto = "este texto lo vamos a convertir"
print(camello.hump(texto))