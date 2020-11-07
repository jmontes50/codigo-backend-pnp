#Operadores de asignación

# = Igual
# += Incremento =>      a=a+1    a+=1
# -= Decremento =>      a=a-2    a-=2
# *= Multiplicador =>   a=a*10   a*=10
# /= Division =>        a=a/20   a/=20
# **= Potencia =>       a=a**3   a**=3

num1 = 10
num2 = 20.5

#es lo mismo que poner: num1 = num1 + num2
num1 += num2
print(num1) #=> 30.5

#es lo mismo que poner: num1 = num1 - num2
num1 -= num2
print(num1) #=> 10

#es lo mismo que poner: num1 = num1 * num2
num1 *= num2
print(num1)#=> 205

#es lo mismo que poner: num1 = num 1 / num2
num1 /= num2
print(num1) #=> 10

#es lo mismo que poner: num1 = num1 ** num2
num1 **= num2
print(num1)