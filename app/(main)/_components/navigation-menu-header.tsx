'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { painelControleItems } from "@/utils/painel-controle-items";
import { HomeIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

const NavigationMenuHeader = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        href="/"
                    >
                        <HomeIcon className="w-4 h-4 mr-2" />
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <SettingsIcon className="w-4 h-4 mr-2" />
                        Painel de Controle
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <div className="grid w-[400px] p-2">
                            {painelControleItems.map((item, index) => (
                                <NavigationMenuLink asChild key={index}>
                                    <Link
                                        className="flex gap-2 group h-auto w-full items-center justify-start rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                        href={item.href}
                                    >
                                        <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />

                                        <div className="grid gap-1">
                                            <div className="text-sm font-medium leading-none group-hover:underline">
                                                {item.title}
                                            </div>

                                            <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                {item.description}
                                            </div>
                                        </div>

                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default NavigationMenuHeader;