export default {
    server: {
        proxy: {
            '/api': {
                target: 'https://acumbamail.com', // Asegúrate de que este es el dominio correcto
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
};
