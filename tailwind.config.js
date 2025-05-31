/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
		},
		fontFamily: {
			'sans': ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			'serif': ['var(--font-serif)', 'ui-serif', 'Georgia', 'serif'],
		},
		extend: {
			colors: {
				brand: {
					orange: '#FF6B35',
					'orange-dark': '#E55A2B',
					blue: '#0099FF',
					green: '#00FF88',
					black: '#000000',
					white: '#FFFFFF',
					gray: '#808080',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FF6B35',
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#0099FF',
					foreground: '#FFFFFF',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: '#00FF88',
					foreground: '#000000',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(1.5)', opacity: '0' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'rotate-slow': 'rotate 20s linear infinite',
				'ripple': 'ripple 2s ease-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
			},
			boxShadow: {
				'glow': '0 8px 25px rgba(255, 107, 53, 0.3)',
				'blue-glow': '0 8px 25px rgba(0, 153, 255, 0.3)',
				'green-glow': '0 8px 25px rgba(0, 255, 136, 0.3)',
			},
			spacing: {
				'xs': '0.5rem',   // 8px
				'sm': '1rem',     // 16px
				'md': '1.5rem',   // 24px
				'lg': '2rem',     // 32px
				'xl': '3rem',     // 48px
				'2xl': '4rem',    // 64px
				'3xl': '5rem',    // 80px
				'4xl': '6rem',    // 96px
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}