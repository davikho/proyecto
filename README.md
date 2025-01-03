# Aplicación de Gestión de Socios 📋

La aplicación se encuentra desplegada como demo en un servidor de **Amazon** 🚀, y el frontend está hospedado en un **hosting comercial** 🖥️. Puedes acceder a la demo en el siguiente enlace:


- [**Accede a la aplicación demo**](https://asociaweb.america3000.site/) 🌍

PASSWORD: admin
USUARIO: admin

## **Bondades de la Aplicación de Gestión de Socios** ✨

1. **Gestión de Socios**:
   - Registro, visualización, actualización y eliminación de socios de manera rápida y sencilla. 👥
   - Información detallada de cada socio, incluyendo nombre, dirección, correo electrónico, teléfono, monto estimado y monto pagado. 📧📱
   - Opciones para activar o desactivar el estado del socio (activo/inactivo). ⚙️

2. **Estadísticas en Tiempo Real** 📊:
   - Visualización de estadísticas clave sobre los socios: total de socios, total estimado, total pagado y diferencia entre estimado y pagado. 📈
   - Representación visual de los datos de manera clara y accesible. 🌐

3. **Interfaz de Usuario Atractiva** 💻:
   - Diseño responsive usando **Bootstrap 5.3**. 📱
   - Uso de **Bootstrap Icons** para agregar iconos intuitivos en los botones y menús. 🖼️
   - Filtros de búsqueda y vistas personalizadas para una experiencia de usuario fluida. 🔍

4. **Seguridad Básica** 🔒:
   - Implementación de un sistema de inicio de sesión básico para el acceso a las rutas administrativas. 🚪
   - Validación de usuario y contraseña almacenados localmente en el navegador. 🗝️

5. **Base de Datos Local Embebida** 💾:
   - Uso de **SQLite** como base de datos embebida para almacenar la información de los socios. 🗂️
   - Manejo eficiente de registros con consultas y operaciones sobre los datos de los socios. 📅

6. **Backend con Flask** 🔧:
   - Servidor basado en **Flask** para manejar las rutas de la API, como registro de socios, consultas, actualización y eliminación. 🌐
   - API RESTful con acceso a los datos de los socios a través de solicitudes HTTP. 🔄

7. **Autenticación Local con Local Storage** 🛡️:
   - Validación de acceso al panel de administración mediante almacenamiento local en el navegador (`localStorage`). 🔑
   - Manejo del login sin necesidad de comunicación con un servidor externo. 📡

8. **Facilidad de Uso y Personalización** 🛠️:
   - Diseño modular que facilita la extensión y personalización según las necesidades de la asociación. 🔄
   - Acceso completo al panel de administración solo después de iniciar sesión correctamente. 🔓

---

## **Detalles Técnicos de la Aplicación** ⚙️

### **Frontend: Angular 19** 🔍

- **Tecnologías utilizadas**:
  - **Angular 19**: Framework para el desarrollo de la aplicación de una sola página (SPA). ⚡
  - **Bootstrap 5.3**: Framework CSS para crear una interfaz responsive y bien estructurada. 💡
  - **Bootstrap Icons**: Biblioteca de iconos que se usan en botones y menús para mejorar la experiencia del usuario. 🖍️
  - **Routing en Angular**: Manejo de rutas para facilitar la navegación entre componentes del panel administrativo. 🔄
  - **Forms y NgModel**: Enlace bidireccional para editar los datos de los socios directamente en el frontend. 📝

- **Funciones principales**:
  - Interacción con el usuario mediante formularios para agregar, editar y eliminar socios. 🖋️
  - Implementación de validaciones básicas como el login y la verificación de campos requeridos. ✅
  - Muestra de estadísticas clave sobre los socios en formato visual y detallado. 📊

### **Backend: Flask (Python)** 🐍

- **Tecnologías utilizadas**:
  - **Flask**: Framework ligero de Python para crear APIs RESTful. 🛠️
  - **SQLAlchemy**: ORM (Object-Relational Mapper) utilizado para manejar las consultas a la base de datos SQLite. 🗃️
  - **Flask-CORS**: Middleware para permitir la comunicación entre el frontend y el backend, habilitando el CORS (Cross-Origin Resource Sharing). 🌍

- **Operaciones soportadas**:
  - CRUD completo (Crear, Leer, Actualizar, Eliminar) sobre los socios de la base de datos. 🧩
  - Funcionalidades para obtener las estadísticas de los socios como total estimado, pagado y diferencia. 📊
  - Enrutamiento RESTful para consumir la API desde el frontend. 🌐

### **Base de Datos: SQLite** 💾

- **Tecnologías utilizadas**:
  - **SQLite**: Base de datos embebida utilizada para almacenar la información de los socios de manera eficiente. 🗄️
  - **SQLAlchemy**: ORM para facilitar la comunicación entre el backend en Flask y la base de datos. 🧑‍💻

- **Estructura de la base de datos**:
  - Una tabla llamada `Socio` para almacenar la información relevante de cada socio: nombre, dirección, correo, teléfono, estado, monto estimado y monto pagado. 📇
  - La base de datos es autónoma y no requiere de un servidor externo, facilitando la configuración y el despliegue. 🚀

### **Autenticación Local** 🔑

- **Tecnologías utilizadas**:
  - **localStorage**: Almacenamiento local en el navegador utilizado para guardar las credenciales del usuario y permitir el acceso a las rutas administrativas. 💻
  - **Validación local**: El login se maneja directamente en el frontend, sin necesidad de autenticación contra un servidor, utilizando un usuario y contraseña predeterminados (`admin/admin`). 🔐

---

## **Despliegue de la Aplicación** 🌐

La aplicación se encuentra desplegada como demo en un servidor de **Amazon** 🚀, y el frontend está hospedado en un **hosting comercial** 🖥️. Puedes acceder a la demo en el siguiente enlace:


- [**Accede a la aplicación demo**](https://asociaweb.america3000.site/) 🌍

PASSWORD: admin
USUARIO: admin
---

## **Detalles de Descarga y Conexión** 📥

- Para ejecutar la aplicación de manera local, sigue estos pasos:
  1. Clona el repositorio: [**Repositorio de la app**](https://github.com/davikho/proyecto.git)
  2. Instala las dependencias necesarias tanto para el backend como para el frontend.
  3. Inicia el servidor backend (Flask) y el servidor frontend (Angular).
  4. Accede a la aplicación desde tu navegador en `http://localhost:4200` o el puerto que hayas configurado.

---

¡Gracias por usar nuestra aplicación de gestión de socios! 🎉
"""
