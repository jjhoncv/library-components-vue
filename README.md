# library-components-vue

Puedes ver la librería en la siguiente dirección https://jjhoncv.github.io/library-components-vue

> Nota: Asegúrate de haber hecho `yarn install` ;)

Para modificar la librería:

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

4.  Realiza tu Pull Request.
5.  Una vez aprobado y mergeado tu Pull Request ejecuta los siguientes comandos:

```
git checkout dev
git pull origin dev
yarn dist:publish
```
