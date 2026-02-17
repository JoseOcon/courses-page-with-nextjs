import {
  BookOpen,
  ChartArea,
  GraduationCap,
  House,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export interface Route {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}

export const routes: Route[] = [
  {
    label: "Home",
    href: "/home",
    icon: House,
    bgColor: "bg-cyan-700",
  },
  {
    label: "Courses",
    href: "/courses",
    icon: SquareTerminal,
    bgColor: "bg-green-700",
  },
  {
    label: "Mis Cursos",
    href: "/my-courses",
    icon: BookOpen,
    bgColor: "bg-yellow-700",
  },
  {
    label: "Ajustes",
    href: "/settings",
    icon: Settings2,
    bgColor: "bg-purple-700",
  },
];

export const teacherRoutes: Route[] = [
  {
    label: "Cursos",
    href: "/teacher",
    icon: GraduationCap,
    bgColor: "bg-emerald-700",
  },
  {
    label: "Analíticas",
    href: "/teacher/analytics",
    icon: ChartArea,
    bgColor: "bg-orange-700",
  },
];
