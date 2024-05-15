import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfileMenu = () => {
    return (
        <div className="flex gap-3">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="icon" variant="outline">
                        <Image
                            alt="Avatar"
                            className="rounded-full border"
                            height="32"
                            src="https://github.com/victorcandido.png"
                            style={{
                                aspectRatio: "32/32",
                                objectFit: "cover",
                            }}
                            width="32"
                        />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                        <div className="flex items-center gap-2">
                            <Image
                                alt="Avatar"
                                className="rounded-full border"
                                height="32"
                                src="https://github.com/victorcandido.png"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                                width="32"
                            />
                            <div>
                                <div className="font-medium">John Doe</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">john@example.com</div>
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link className="flex w-full" href="#">
                            <UserIcon className="mr-2 h-4 w-4" />
                            Perfil
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className="flex w-full" href="#">
                            <SettingsIcon className="mr-2 h-4 w-4" />
                            Configurações
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className="flex w-full" href="#">
                            <CreditCardIcon className="mr-2 h-4 w-4" />
                            Pagamentos
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link className="flex w-full" href="#">
                            <LogOutIcon className="mr-2 h-4 w-4" />
                            Sair
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default ProfileMenu;