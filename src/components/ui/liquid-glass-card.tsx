/**
 * @fileoverview Liquid Glass Card Component
 * Beautiful glassmorphism card with liquid animations
 */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidGlassCardVariants = cva(
  "relative overflow-hidden rounded-xl border backdrop-blur-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
        elevated: "bg-white/10 border-white/20 shadow-2xl hover:bg-white/15 hover:border-white/30",
        subtle: "bg-white/3 border-white/5 hover:bg-white/8 hover:border-white/15",
        gradient: "bg-gradient-to-br from-white/10 via-white/5 to-transparent border-white/20 hover:from-white/15 hover:via-white/10 hover:to-white/5",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      glow: {
        none: "",
        subtle: "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-400/20 before:via-purple-400/20 before:to-pink-400/20 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
        strong: "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-400/30 before:via-purple-400/30 before:to-pink-400/30 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
      },
      animation: {
        none: "",
        hover: "hover:scale-[1.02] hover:-translate-y-1",
        float: "animate-float",
        pulse: "animate-pulse-slow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      glow: "subtle",
      animation: "hover",
    },
  }
);

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof liquidGlassCardVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
  // Custom liquid animation properties
  liquidIntensity?: "low" | "medium" | "high";
  liquidSpeed?: "slow" | "normal" | "fast";
}

const LiquidGlassCard = React.forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, variant, size, glow, animation, children, liquidIntensity = "medium", liquidSpeed = "normal", asChild = false, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }, []);

    const handleMouseLeave = React.useCallback(() => {
      const card = cardRef.current;
      if (!card) return;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }, []);

    return (
      <div
        ref={cardRef}
        className={cn(liquidGlassCardVariants({ variant, size, glow, animation, className }))}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--liquid-intensity": liquidIntensity,
          "--liquid-speed": liquidSpeed,
        } as React.CSSProperties}
        {...props}
      >
        {/* Liquid Animation Layer */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)
            `,
            animation: `liquidFlow ${liquidSpeed === "slow" ? "8s" : liquidSpeed === "fast" ? "3s" : "5s"} ease-in-out infinite`,
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
        
        {/* Interactive Light Effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{
            background: `
              radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(255, 255, 255, 0.15) 0%, 
                rgba(255, 255, 255, 0.05) 30%, 
                transparent 50%)
            `,
          }}
        />
      </div>
    );
  }
);

LiquidGlassCard.displayName = "LiquidGlassCard";

// Sub-components
const LiquidGlassCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-6", className)}
    {...props}
  />
));
LiquidGlassCardHeader.displayName = "LiquidGlassCardHeader";

const LiquidGlassCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-sf-pro text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
LiquidGlassCardTitle.displayName = "LiquidGlassCardTitle";

const LiquidGlassCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-sf-pro text-sm text-muted-foreground", className)}
    {...props}
  />
));
LiquidGlassCardDescription.displayName = "LiquidGlassCardDescription";

const LiquidGlassCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
LiquidGlassCardContent.displayName = "LiquidGlassCardContent";

const LiquidGlassCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-6", className)}
    {...props}
  />
));
LiquidGlassCardFooter.displayName = "LiquidGlassCardFooter";

export {
  LiquidGlassCard,
  LiquidGlassCardHeader,
  LiquidGlassCardFooter,
  LiquidGlassCardTitle,
  LiquidGlassCardDescription,
  LiquidGlassCardContent,
};