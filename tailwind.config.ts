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
                "guapi-white": {
                    DEFAULT: "hsl(var(--guapi-white))", // Branco
                    foreground: "hsl(var(--guapi-white-foreground))", // Preto para o texto
                },
                "guapi-gray": {
                    DEFAULT: "hsl(var(--guapi-gray))", // Cinza claro
                    foreground: "hsl(var(--guapi-gray-foreground))", // Cinza escuro para o texto
                },
                "guapi-yellow": {
                    DEFAULT: "hsl(var(--guapi-yellow))", // Amarelo
                    foreground: "hsl(var(--guapi-yellow-foreground))", // Amarelo escuro para o texto
                },
                "guapi-green": {
                    DEFAULT: "hsl(var(--guapi-green))", // Verde
                    foreground: "hsl(var(--guapi-green-foreground))", // Verde escuro para o texto
                },
                "guapi-darkGreen": {
                    DEFAULT: "hsl(var(--guapi-darkGreen))", // Verde escuro
                    foreground: "hsl(var(--guapi-darkGreen-foreground))", // Verde mais escuro para o texto
                },
                "guapi-teal": {
                    DEFAULT: "hsl(var(--guapi-teal))", // Teal
                    foreground: "hsl(var(--guapi-teal-foreground))", // Teal escuro para o texto
                },
                "guapi-blue": {
                    DEFAULT: "hsl(var(--guapi-blue))", // Azul
                    foreground: "hsl(var(--guapi-blue-foreground))", // Azul escuro para o texto
                },
                "guapi-black": {
                    DEFAULT: "hsl(var(--guapi-black))", // Preto
                    foreground: "hsl(var(--guapi-black-foreground))", // Branco para o texto
                },
            },
        },
    },
    plugins: [
    ],
}
export default config;
