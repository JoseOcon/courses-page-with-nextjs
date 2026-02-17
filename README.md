# Tu Academia

Una plataforma web moderna de cursos online para programadores. Un marketplace educativo donde usuarios pueden descubrir y tomar cursos, mientras que profesores pueden crear, administrar y monetizar su contenido.

## 🎯 Características

### Para Estudiantes
- 🔍 Explorar y buscar cursos de programación
- 📚 Acceso a contenido de cursos completos
- 📊 Progreso de aprendizaje
- 👤 Perfil personal con cursos en progreso
- 🔐 Autenticación segura con Clerk

### Para Profesores
- 📝 Crear y editar cursos
- 📊 Panel de analíticas en tiempo real
- 👥 Seguimiento de estudiantes y matriculaciones
- 💰 Gestión de contenido y precios
- 📈 Estadísticas detalladas de desempeño

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Autenticación**: [Clerk](https://clerk.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
app/
├── (auth)/           # Rutas de autenticación
├── (routes)/         # Rutas principales
│   ├── (root)/       # Página de inicio
│   ├── courses/      # Detalle de cursos
│   └── teacher/      # Panel del profesor
api/                 # Rutas API
components/          # Componentes reutilizables
hooks/               # Custom hooks
lib/                 # Utilidades
```

## 📖 Scripts

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 👨‍💻 Autor

Este proyecto fue desarrollado basado en el curso "Next.js 15 y Stripe | Crea tu plataforma de cursos online"
