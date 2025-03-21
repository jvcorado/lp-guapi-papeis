import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/components/(checkbox|input).js',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                "primary-gray": {
                    DEFAULT: "hsl(var(--primary-gray))", // Cinza claro
                    foreground: "hsl(var(--guapi-gray-foreground))", // Cinza escuro para o texto
                },
                "primary-yellow": {
                    DEFAULT: "hsl(var(--primary-yellow))", // Amarelo
                    foreground: "hsl(var(--primary-yellow-foreground))", // Amarelo escuro para o texto
                },
                "primary-green": {
                    DEFAULT: "hsl(var(--primary-green))", // Verde
                    foreground: "hsl(var(--primary-green-foreground))", // Verde escuro para o texto
                },
                "primary-darkGreen": {
                    DEFAULT: "hsl(var(--primary-darkGreen))", // Verde escuro
                    foreground: "hsl(var(--primary-darkGreen-foreground))", // Verde mais escuro para o texto
                },
                "primary-teal": {
                    DEFAULT: "hsl(var(--primary-teal))", // Teal
                    foreground: "hsl(var(--primary-teal-foreground))", // Teal escuro para o texto
                },
                "primary-blue": {
                    DEFAULT: "hsl(var(--primary-blue))", // Azul
                    foreground: "hsl(var(--primary-blue-foreground))", // Azul escuro para o texto
                },
            },
        },
    },
    plugins: [
    ],
}
export default config;