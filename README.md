# GraphQL CRUD API

Este proyecto es una **API CRUD** simple desarrollada con **GraphQL** y **MongoDB**. Proporciona funcionalidades básicas para gestionar productos en una base de datos, permitiendo a los usuarios crear, leer, actualizar y eliminar productos.

## 🚀 Características

- **GraphQL** como lenguaje de consulta para interactuar con los datos.
- **MongoDB** como base de datos para almacenar los productos.
- Implementación de un servidor utilizando **Apollo Server**.
- Manejo de errores en resolvers para una experiencia más robusta.
- Estructura modular con **typeDefs** y **resolvers** organizados.
- Código limpio y extensible para futuras mejoras.

## 🛠️ Funcionalidades

- **Consultar productos**:
  - Obtener todos los productos.
  - Obtener un producto por su ID.

- **Crear producto**:
  - Añadir un nuevo producto con detalles como título, categoría, precio y estado de inventario.

- **Actualizar producto**:
  - Modificar los datos de un producto existente.

- **Eliminar producto**:
  - Eliminar un producto por su ID.

## 📚 Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el backend.
- **Apollo Server**: Framework para construir servidores GraphQL.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de datos.
- **Mongoose**: ODM para modelar datos en MongoDB.
- **GraphQL**: Lenguaje de consulta para la API.

## 📄 Esquema de GraphQL

### Type Definitions
```graphql
type Product {
  id: ID!
  title: String!
  category: String!
  price: Float!
  stock: Boolean!
}

type Query {
  products: [Product!]!
  product(id: ID!): Product
}

type Mutation {
  createProduct(title: String!, category: String!, price: Float!, stock: Boolean!): Product
  updateProduct(id: ID!, title: String, category: String, price: Float, stock: Boolean): Product
  deleteProduct(id: ID!): Product
}
```
## 📝 Ejemplo de consultas

### Obtener todos los productos
```graphql
query {
  products {
    id
    title
    category
    price
    stock
  }
}
```
### Obtener un producto
```graphql
query {
  product(id: "product-id") {
    id
    title
    category
    price
    stock
  }
}
```
### Crear un producto
```graphql
mutation {
  #Todos los campos son requeridos
  createProduct(title: "title", category: "category", price: 00.0, stock: boolean) {
    id
    title
    category
    price
    stock
  }
}
```
### Actualizar un producto
```graphql
mutation {
  #El campo id es requerido, los campos a actualizar son opcionales
  updateProduct(id: "product-id", title: "title-actualizado") {
    id
    title
    category
    price
    stock
  }
}
```
### Eliminar un producto
```graphql
mutation {
  deleteProduct(id: "product-id") {
    id
    title
    category
    price
    stock
  }
}
```
## 💡 Próximos pasos
1. Implementar autenticación y autorización para proteger las operaciones.
2. Añadir validación de datos en las entradas del usuario.
