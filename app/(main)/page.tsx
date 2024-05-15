import Link from "next/link"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { HotelIcon, UserIcon, ProjectorIcon, CalendarIcon } from "lucide-react";


export default function Home() {
  return (
    <>
      <main className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Painel de Controle</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Gerencie todas as funcionalidades do sistema.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Salas</CardTitle>
                <HotelIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Salas disponíveis</p>
              </CardContent>
              <CardFooter>
                <Link className="text-primary font-medium" href="#">
                  Gerenciar Salas
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Perfil</CardTitle>
                <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Seu perfil</p>
              </CardContent>
              <CardFooter>
                <Link className="text-primary font-medium" href="#">
                  Gerenciar Perfil
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Equipamentos</CardTitle>
                <ProjectorIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Equipamentos disponíveis</p>
              </CardContent>
              <CardFooter>
                <Link className="text-primary font-medium" href="#">
                  Gerenciar Equipamentos
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Eventos</CardTitle>
                <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Eventos agendados</p>
              </CardContent>
              <CardFooter>
                <Link className="text-primary font-medium" href="#">
                  Gerenciar Eventos
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}