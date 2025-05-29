#!/bin/bash

echo "Creando estructura del proyecto"
mkdir -p docs static-site scripts
touch README.md LICENSE
touch docs/instalacion.md docs/configuracion-firewall.md docs/plugins-recomendados.md
touch static-site/index.html static-site/styles.css static-site/script.js
touch scripts/setup.sh
echo "Estructura creada en el directorio actual: $PWD"


