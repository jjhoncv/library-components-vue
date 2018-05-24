# library-components-vue

Puedes ver la librería en la siguiente dirección https://jjhoncv.github.io/library-components-vue

> Nota: Asegúrate de haber hecho `yarn install` ;)

Para modificar la librerÃ­a:

1.  Realiza tus cambios: creación de componentes y tests. Para correr los test ejecuta:

```
yarn test
```

2.  Realiza la documentación en la carpeta `stories` y comprueba tu implementación con el siguiente comando:

```
yarn storybook
```

3.  Actualiza la librería:

```
yarn build
```

4.  Realiza tu Pull Request (dev a prod).
5.  Una vez aprobado y mergeado tu Pull Request ejecuta los siguientes comandos:

```
git checkout prod
git pull origin prod
yarn dist:publish-library
```

6.  Para ver tu cambio en la web ejecuta los siguiente comandos:

```
git checkout prod
git pull origin prod
yarn deploy
yarn dist:publish-web
```
