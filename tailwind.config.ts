import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'50%': { transform: 'translateY(-20px) rotate(0deg)' },
					'75%': { transform: 'translateY(-10px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 0 100px hsl(var(--primary) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				},
				'tech-scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.9)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'aurora': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'magnetic-pulse': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'hologram-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'data-stream': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' }
				},
				'particle-float': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'33%': { transform: 'translate(10px, -10px) rotate(120deg)' },
					'66%': { transform: 'translate(-5px, 5px) rotate(240deg)' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-left': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'enhanced-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
					'25%': { transform: 'translateY(-15px) rotate(2deg) scale(1.02)' },
					'50%': { transform: 'translateY(-25px) rotate(0deg) scale(1.05)' },
					'75%': { transform: 'translateY(-15px) rotate(-2deg) scale(1.02)' }
				},
				'enhanced-pulse-glow': {
					'0%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.1)',
						filter: 'brightness(1)' 
					},
					'50%': { 
						boxShadow: '0 0 80px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--primary) / 0.3), 0 0 160px hsl(var(--primary) / 0.1)',
						filter: 'brightness(1.2)' 
					},
					'100%': { 
						boxShadow: '0 0 60px hsl(var(--primary) / 0.6), 0 0 100px hsl(var(--primary) / 0.2)',
						filter: 'brightness(1.1)' 
					}
				},
				'enhanced-aurora': {
					'0%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
					'25%': { backgroundPosition: '50% 100%', filter: 'hue-rotate(90deg)' },
					'50%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(180deg)' },
					'75%': { backgroundPosition: '50% 0%', filter: 'hue-rotate(270deg)' },
					'100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(360deg)' }
				},
				'enhanced-magnetic-pulse': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'25%': { transform: 'scale(1.05) rotate(1deg)' },
					'50%': { transform: 'scale(1.08) rotate(0deg)' },
					'75%': { transform: 'scale(1.05) rotate(-1deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'tech-scan': 'tech-scan 2s linear infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'aurora': 'aurora 3s ease-in-out infinite',
				'magnetic-pulse': 'magnetic-pulse 0.6s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'hologram-flicker': 'hologram-flicker 1s ease-in-out infinite',
				'data-stream': 'data-stream 2s ease-in-out infinite',
				'particle-float': 'particle-float 4s ease-in-out infinite',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-down': 'slide-down 0.7s ease-out',
				'slide-left': 'slide-left 0.7s ease-out',
				'slide-right': 'slide-right 0.7s ease-out',
				'enhanced-float': 'enhanced-float 8s ease-in-out infinite',
				'enhanced-pulse-glow': 'enhanced-pulse-glow 3s ease-in-out infinite alternate',
				'enhanced-aurora': 'enhanced-aurora 4s ease-in-out infinite',
				'enhanced-magnetic-pulse': 'enhanced-magnetic-pulse 0.8s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)', 
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-mesh': 'var(--gradient-mesh)'
			},
			backdropBlur: {
				xs: '2px',
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
