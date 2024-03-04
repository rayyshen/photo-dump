import { Github, Instagram, Linkedin, HelpCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { PropsWithChildren } from "react";

export default function SiteHeader({ children }: PropsWithChildren) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 md:flex">
                    <a href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold sm:inline-block">Ray Shen</span>
                    </a>
                    <nav className="flex items-center gap-6 text-sm"></nav>
                </div>
                <div className="margin-auto"></div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center">
                        <Link href="https://github.com/rayyshen" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>

                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/ray.shen_/" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Instagram className="h-5 w-5"/>
                                <span className="sr-only">Instagram</span>

                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ray-shen-15b7b8260/" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                                
                            >
                                <Linkedin className="h-5 w-5"/>
                                <span className="sr-only">Linkedin</span>

                            </div>
                        </Link>
                        <Link href="/about" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                                
                            >
                                <HelpCircle className="h-5 w-5"/>
                                <span className="sr-only">About</span>

                            </div>
                        </Link>
                        {children}
                    </nav>
                </div>
            </div>

        </header>
    );
}