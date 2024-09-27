#dev

1. Clonar archivo .env.template a .env
2. Configurar las variables de entorno
3. Ejecutar comando ```npm i```
4. Levantar base de datos con el comando
    ```

    docker compose up -d
    ```
5. Ejecutar ```npx prisma migrate dev```
6. Ejecutar ```npm run dev```
