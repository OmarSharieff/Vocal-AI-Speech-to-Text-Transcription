import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import VOCALAI_LOGO from "../assets/images/Vocal_AI_logo.png"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={VOCALAI_LOGO} alt="logo" className="size-[3rem] rounded-md"/>
        <h1 className="font-semibold text-3xl">Vocal <span className="text-purple-800">AI</span></h1>
      </div>
      
      <div className="hidden md:flex gap-6">
        <button className="bg-purple-700 px-3 py-2 rounded-full text-white font-semibold text-sm hover:bg-purple-950 transition duration-300"><h3>Sign Up</h3></button>
        <button className="bg-purple-700 px-3 py-2 rounded-full text-white font-semibold text-sm hover:bg-purple-950 transition duration-300"><h3>Log In</h3></button>
        <button className="bg-pink-600 px-3 py-2 rounded-full text-white font-semibold text-sm hover:bg-pink-800 transition duration-300"><h3>Source Code</h3></button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <Menu size={28}/>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white">
            <div className="flex flex-col gap-4 mt-6">
              <button className="bg-purple-700 px-4 py-2 rounded-md">Sign Up</button>
              <button className="bg-purple-700 px-4 py-2 rounded-md">Log In</button>
              <button className="bg-pink-600 px-4 py-2 rounded-md flex items-center justify-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>Source Code</button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}