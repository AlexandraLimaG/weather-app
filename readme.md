# 🌦️ Weather App (Open-Meteo API)  

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) 
![Node.js](https://img.shields.io/badge/Node.js-18-green) 
![Axios](https://img.shields.io/badge/Axios-0.27.2-blue) 
![License MIT](https://img.shields.io/badge/License-MIT-green)  

## 📌 Sobre o Projeto
O Weather App é uma aplicação de previsão do tempo que permite aos usuários consultar o clima atual de qualquer cidade. A aplicação utiliza a API de Geocodificação do Open-Meteo para localizar as coordenadas da cidade e, em seguida, busca os dados meteorológicos na API Open-Meteo Weather Forecast.  

O app oferece uma interface simples via terminal, permitindo buscas múltiplas e exibição clara de temperatura, velocidade do vento e descrição do clima.  

## 🚀 Funcionalidades
- Consulta do clima atual de qualquer cidade  
- Exibição de temperatura, velocidade do vento e descrição do clima  
- Validação de entrada: mensagens de erro se a cidade não for encontrada ou o nome estiver vazio  
- Permite consultas contínuas de diferentes cidades  
- Tratamento de erros para falhas na API ou problemas de rede  

## 📦 Como Executar o Projeto
### Pré-requisitos
- Node.js (versão 18 ou superior)  

### Passos
```bash
git clone https://github.com/AlexandraLimaG/weather-app.git
cd weather-app-open-meteo
npm install
node app.js
