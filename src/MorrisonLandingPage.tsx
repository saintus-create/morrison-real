/**
 * @fileoverview Morrison Landing Page - Real Morrison Implementation
 * Clean, focused structure using actual Morrison components
 */

// Library imports
import {
  Code,
  ArrowRight,
  Search,
  Github,
  Moon,
  Sun,
  Menu,
  X,
  Star,
  ExternalLink,
  CheckCircle,
  Zap,
  Palette,
  Layers,
  Book,
  Users,
  Rocket,
  Shield,
  Play,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

const MorrisonLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Morrison Style */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold">Morrison</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#components" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Components
              </a>
              <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </a>
              <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </a>
              <a href="https://github.com/morrison" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden lg:flex items-center gap-2 border rounded-md px-3 py-1.5 text-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="w-32 border-0 bg-transparent p-0 h-auto focus:ring-0"
                />
                <kbd className="rounded border bg-muted px-1.5 text-xs">⌘K</kbd>
              </div>

              {/* Theme Toggle */}
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Primary CTA */}
              <Button size="sm" asChild>
                <a href="https://github.com/morrison">
                  <Github className="mr-2 h-4 w-4" />
                  Deploy
                </a>
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t bg-background/95 backdrop-blur md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#components" className="block text-sm font-medium">
                Components
              </a>
              <a href="#templates" className="block text-sm font-medium">
                Templates
              </a>
              <a href="#examples" className="block text-sm font-medium">
                Examples
              </a>
              <a href="https://github.com/morrison" className="block text-sm font-medium">
                GitHub
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Hero Section - Floating Frame */}
        <section className="relative overflow-hidden px-6">
          <AspectRatio ratio={16/9} className="bg-muted/30">
            <div className="container mx-auto h-full px-4 flex items-center justify-center">
              <div className="mx-auto max-w-4xl text-center space-y-6">
                <Badge className="mb-4">
                  <Star className="mr-1 h-3 w-3" />
                  Morrison 2.0
                </Badge>
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                  Build faster with
                  <span className="text-primary"> Morrison</span>
                </h1>
                <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
                  A beautiful, accessible, and customizable React component library built with Radix UI and Tailwind CSS.
                </p>
                <div className="flex items-center justify-center gap-x-6">
                  <Button size="lg" asChild>
                    <a href="#get-started">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com/morrison">
                      <Play className="mr-2 h-4 w-4" />
                      View demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AspectRatio>
        </section>

        {/* Features Grid - Floating Frame */}
        <section className="py-24 sm:py-32">
          <AspectRatio ratio={21/9} className="container mx-auto px-4">
            <div className="h-full flex flex-col justify-center">
                <div className="mx-auto max-w-3xl text-center space-y-6">
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Everything you need to build modern apps
                  </h2>
                  <p className="text-xl leading-8 text-muted-foreground">
                    Morrison provides a complete set of components and utilities for building beautiful, accessible web applications.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Zap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    Lightning fast
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Built with modern tooling and optimized for performance from the ground up.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    Accessible by default
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Every component follows WCAG guidelines and includes built-in accessibility features.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Palette className="h-6 w-6 text-primary-foreground" />
                    </div>
                    Customizable themes
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Fully customize the look and feel with CSS variables and Tailwind utilities.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <Layers className="h-6 w-6 text-primary-foreground" />
                    </div>
                    Type-safe
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    Built with TypeScript for full type safety and excellent developer experience.
                  </dd>
                </div>
                </dl>
              </div>
            </div>
          </AspectRatio>
        </section>

        {/* Component Showcase - Floating Frame */}
        <section className="bg-muted/50 py-24 sm:py-32">
          <AspectRatio ratio={21/9} className="container mx-auto px-4">
            <div className="h-full flex flex-col justify-center space-y-12">
              {/* Section Header */}
              <div className="mx-auto max-w-3xl text-center space-y-6">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Beautiful components out of the box
                </h2>
                <p className="text-xl leading-8 text-muted-foreground">
                  Each component is carefully crafted with attention to detail and usability.
                </p>
              </div>

              {/* Component Cards Grid */}
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Button Component Card */}
                <Card className="overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6">
                    <div className="h-full flex flex-col items-center justify-center space-y-4">
                      <div className="space-y-2">
                        <Button>Default</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                      </div>
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6">
                    <CardTitle>Button Component</CardTitle>
                    <CardDescription className="mt-2">
                      Beautiful, accessible buttons with multiple variants and size options
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Input Components Card */}
                <Card className="overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6">
                    <div className="h-full flex flex-col items-center justify-center space-y-4">
                      <Input placeholder="Enter your email" className="max-w-xs" />
                      <Input placeholder="Password" type="password" className="max-w-xs" />
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6">
                    <CardTitle>Input Components</CardTitle>
                    <CardDescription className="mt-2">
                      Form inputs with validation states and error handling
                    </CardDescription>
                  </CardContent>
                </Card>

                {/* Cards & Badges Card */}
                <Card className="overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6">
                    <div className="h-full flex flex-col items-center justify-center space-y-4">
                      <Badge>Badge</Badge>
                      <Badge variant="outline">Outline Badge</Badge>
                      <Badge variant="secondary">Secondary Badge</Badge>
                    </div>
                  </AspectRatio>
                  <CardContent className="p-6">
                    <CardTitle>Cards & Badges</CardTitle>
                    <CardDescription className="mt-2">
                      Flexible content containers and status indicators
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AspectRatio>
        </section>

        {/* CTA Section - Floating Frame */}
        <section className="py-24 sm:py-32">
          <AspectRatio ratio={16/9} className="container mx-auto px-4">
            <div className="h-full flex items-center justify-center">
              <div className="mx-auto max-w-4xl text-center space-y-8">
                <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
                  Ready to get started?
                </h2>
                <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of developers building beautiful applications with Morrison.
                </p>
                <div className="flex items-center justify-center gap-x-6">
                <Button size="lg" asChild>
                  <a href="https://github.com/morrison">
                    <Github className="mr-2 h-4 w-4" />
                    Get started on GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#docs">
                    <Book className="mr-2 h-4 w-4" />
                    Read docs
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AspectRatio>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">Morrison</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Beautiful React components for modern applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#components" className="text-muted-foreground hover:text-foreground">Components</a></li>
                <li><a href="#templates" className="text-muted-foreground hover:text-foreground">Templates</a></li>
                <li><a href="#examples" className="text-muted-foreground hover:text-foreground">Examples</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Community</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="https://github.com/morrison" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
                <li><a href="https://twitter.com/morrison" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
                <li><a href="#discord" className="text-muted-foreground hover:text-foreground">Discord</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#docs" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#tutorials" className="text-muted-foreground hover:text-foreground">Tutorials</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 Morrison. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MorrisonLandingPage;