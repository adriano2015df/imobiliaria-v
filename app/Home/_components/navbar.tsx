import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export const Navbar = () => {
    return (
      <div className="flex h-10 items-end rounded-lg bg-blue-500 p-4 md:h-10">
        <Menubar>
            <MenubarMenu> 
            <MenubarTrigger>Login</MenubarTrigger>        
            </MenubarMenu>
          </Menubar>
          </div>
        )

}