import Image from 'next/image'
import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu";

export default function Home() {
    return (
        <main className="">
            <h1> Main</h1>
            <Button>
                Button
            </Button>
            <ModeToggle/>
           
        </main>
    )
}
