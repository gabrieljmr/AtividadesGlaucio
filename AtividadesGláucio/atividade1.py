Maior_altura = float('-inf')
menor_altura = float('inf')
Soma_Altura_Homens = 0
Num_Mulheres = 0


for i in range(15):
    altura = float(
        input(f"Digite a altura da pessoa {i + 1} (em centímetros): "))
    genero = input(f"Digite o gênero da pessoa {i + 1} (M ou F): ").upper()
    maior_altura = max(Maior_altura, altura)
    menor_altura = min(menor_altura, altura)
    if genero == 'M':
        Soma_Altura_Homens += altura

    if genero == 'F':
        Num_Mulheres += 1


media_altura_homens = Soma_Altura_Homens / \
    (15 - Num_Mulheres) if Num_Mulheres < 15 else 0


print(f"Maior altura do grupo: {maior_altura} cm")
print(f"Menor altura do grupo: {menor_altura} cm")
print(f"Média de altura dos homens: {media_altura_homens:.2f} cm")
print(f"Número de mulheres: {Num_Mulheres}")
