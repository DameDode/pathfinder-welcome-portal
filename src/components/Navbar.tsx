
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Успешно!",
      description: "Ова е демо. Автентикацијата ќе биде имплементирана во следната фаза.",
    });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/d355bb5f-64b8-4330-b4a6-35920b3075d2.png" 
            alt="FindPath Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-gray-800">FindPath</span>
        </div>
        
        <div className="hidden md:flex md:items-center md:space-x-8">
          <a href="#process" className="text-gray-600 hover:text-gray-900">Како работи?</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">Карактеристики</a>
        </div>

        <div className="flex space-x-2">
          <Dialog open={isOpen && activeTab === "login"} onOpenChange={(open) => { setIsOpen(open); setActiveTab("login"); }}>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-yellow-400 text-gray-700 hover:bg-yellow-50">
                Најава
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold text-gray-800">Најава на FindPath</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Е-пошта</Label>
                  <Input id="email" type="email" placeholder="vasata.posta@primer.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Лозинка</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                  Најава
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isOpen && activeTab === "register"} onOpenChange={(open) => { setIsOpen(open); setActiveTab("register"); }}>
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                Регистрирај се
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl font-bold text-gray-800">Регистрација на FindPath</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Име и презиме</Label>
                  <Input id="full-name" type="text" placeholder="Јован Јовановски" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Е-пошта</Label>
                  <Input id="register-email" type="email" placeholder="vasata.posta@primer.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Лозинка</Label>
                  <Input id="register-password" type="password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Потврди лозинка</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800">
                  Регистрирај се
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
