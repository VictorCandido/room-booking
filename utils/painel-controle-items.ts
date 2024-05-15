import { PainelControleItemType } from "@/interfaces/painel-controle-item-type";
import { HotelIcon, UserIcon, ProjectorIcon, CalendarIcon } from "lucide-react";

export const painelControleItems: PainelControleItemType[] = [
    { title: 'Equipamentos', description: 'Gerencie os equipamentos disponíveis.', href: '/control-panel/equipments', icon: ProjectorIcon },
    { title: 'Eventos', description: 'Gerencie os eventos agendados.', href: '/control-panel/events', icon: CalendarIcon },
    { title: 'Perfil', description: 'Gerencie o perfil de usuário.', href: '/control-panel/profile', icon: UserIcon },
    { title: 'Salas', description: 'Gerencie as salas disponíveis.', href: '/control-panel/rooms', icon: HotelIcon },
]