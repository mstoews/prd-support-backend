#!/bin/bash
echo "tagged versions: v$1"
docker build -t gloss-api-backend:v$1 .
docker push mstoews/gloss-api-backend:v$1  