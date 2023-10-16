import React from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/app/components/ui/button";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <Button className='hover:opacity-75' size="iconxs" onClick={toggleTheme}>
            {theme === 'dark' ? (
                <Sun className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all" />
            ) : (
                <Moon className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
