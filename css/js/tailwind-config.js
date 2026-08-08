        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Tajawal', 'sans-serif'],
                    },
                    colors: {
                        dark: '#020617', // Slate 950
                        primary: '#0f172a', // Slate 900
                        secondary: '#0284c7', // Light Blue 600
                        accent: '#38bdf8', // Sky 400
                        surface: '#f8fafc', // Slate 50
                    },
                    animation: {
                        'float': 'float 4s ease-in-out infinite',
                        'float-delayed': 'float 4s ease-in-out 2s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'slide-up': 'slideUp 0.6s ease-out forwards',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        slideUp: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        }
                    }
                }
            }
        }
