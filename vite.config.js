import { resolve } from 'path'


export default {
 root: resolve(__dirname, 'src'),
 build: {
   outDir: '../dist',
   rollupOptions: {
       output: {
           assetFileNames: (assetInfo) => {
           // Verificar si el archivo es CSS
           if (assetInfo.name && assetInfo.name.endsWith('.css')) {
               return 'assets/css/[name]-[hash][extname]';
           }
           // Dejar los demás archivos en la ruta predeterminada
           return 'assets/[name]-[hash][extname]';
           },
       },
   },
 },
 server: {
   port: 8080
 }
}
