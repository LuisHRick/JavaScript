// npm init -y
// cria um pacote json com informações (o -y responde 'yes' para tudo)

// npm i --save
// Instala o pacote e ja salva no .json
// npm   --save-dev
// Só salva para desenvolvimento
// npm i axios@0.17.1 -E
// instala o pacote na versão tal (é necessário o @) exata (-E)

// npm install --save-dev axios@0.17.1 -E

// Versões de dependências no json
// "pacote": major - minor - fix  "versão"

// Se tiver sem nada, o pacote pode alterar tudo
// "0.17.1"
// Se tiver "^", não poderá alterar o Major
//"^0.17.1"
//"^0.18.1"
// Se tiver "~", só poderá alterar o fix
// "~0.17.1"
// "~0.17.3"


// Package-lock.json -> salva os pacotes exatamente na versão que foi instalado
// inicialmente