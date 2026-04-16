module.exports = {
    content: [
        "./pkg/web/templates/**/*.html",
        "./pkg/web/assets/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            boxShadow: {
                'glow': '0 0 15px -3px var(--tw-shadow-color)',
            }
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "primary": "#6366f1", // Indigo
                    "secondary": "#ec4899", // Pink
                    "accent": "#14b8a6", // Teal
                    "neutral": "#1e293b",
                    "base-100": "#0f172a", // Deep Slate
                    "base-200": "#1e293b",
                    "base-300": "#334155",
                    "info": "#3b82f6",
                    "success": "#10b981",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "primary": "#4f46e5",
                    "secondary": "#db2777",
                    "accent": "#0d9488",
                    "base-100": "#ffffff",
                    "base-200": "#f8fafc",
                    "base-300": "#f1f5f9",
                    "info": "#2563eb",
                    "success": "#059669",
                    "warning": "#d97706",
                    "error": "#dc2626",
                }
            }
        ],
    },
};