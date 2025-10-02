# Librería UI - Dashboard & Components

Aplicación web construida con **Next.js**, **React**, **TailwindCSS** y **TypeScript** (opcional). Esta app incluye un conjunto de componentes reutilizables, manejo de autenticación, tracking de interacciones y un dashboard de estadísticas en tiempo real.

---

## Características

- **Autenticación de usuarios**:
  - Registro y login con validación de contraseñas.
  - Almacena `token` y `email` en `localStorage`.
  - Protección de rutas privadas: redirecciona a `/auth` si no hay token.

- **Componentes reutilizables**:
  - Botones con variantes (`primary`, `secondary`, `danger`).
  - Inputs con validaciones y estados.
  - Modals y Cards estilizados con TailwindCSS.
  - Feedback de interacción con **toast** al hacer click en botones.

- **Tracking de interacciones**:
  - Cada click en un botón se envía al endpoint `/api/components/track`.
  - Dashboard en tiempo real que muestra conteo de interacciones por nombre y variante.
  - Exportación de interacciones en **CSV** y **JSON**.

- **Dashboard de estadísticas**:
  - Actualización automática cada 5 minutos.
  - Visualización de botones más usados y sus variantes.

- **Perfil de usuario**:
  - Muestra email del usuario almacenado en `localStorage`.
  - Botón de logout que limpia `token` y `email`.

---

## Tecnologías

- **Frontend**: React, Next.js, TailwindCSS, TypeScript
- **Backend**: Express, MongoDB, JWT
- **Testing**: Jest, React Testing Library
- **Otros**: lucide-react (íconos), csv-writer (export CSV)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <repo-url>
cd libreria-ui
