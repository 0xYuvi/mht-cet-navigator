
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-10 backdrop-blur-sm sticky top-0 z-50 border-b border-neutral/20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-neutral font-bold text-xl">A</span>
          </div>
          <h1 className="text-xl font-bold">AI College Buddy</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/" className="hover:text-primary transition-colors">Predictor</Link>
          <Link to="/" className="hover:text-primary transition-colors">Colleges</Link>
          <Link to="/" className="hover:text-primary transition-colors">Insights</Link>
          <Link to="/" className="hover:text-primary transition-colors">Resources</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="outline" className="hidden md:flex">Log In</Button>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
