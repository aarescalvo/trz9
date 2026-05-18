---
Task ID: 50
Agent: main
Task: Fix deployment en Windows — permisos, cookies, useContext, códigos tropa + impresión Zebra

Work Log:
- Fix permisos admin ("acceso denegado"):
  * Bug en auth-provider.tsx: login() llamaba setOperador() pero nunca actualizaba operadorRef.current
  * hasPermission/hasPermissionOr leían del ref, no del state → siempre retornaban false
  * Fix: agregar operadorRef.current = data.data después de setOperador(data.data)

- Fix datos no cargan en dashboard (APIs retornan 401):
  * Cookie de sesión tenía Secure=true cuando NODE_ENV=production (npm run start)
  * Navegador no envía cookies Secure por HTTP (http://192.168.1.153:3000)
  * Fix en jwt.ts: secure: process.env.COOKIE_SECURE === 'true' (opt-in)

- Fix errores runtime useContext null (chunk 9735.js):
  * serverExternalPackages: ['react','react-dom'] en next.config.ts rompía exports condicionales de React 19
  * React 19 usa conditional exports (react-server vs default) que se rompen al externalizar
  * Fix: eliminar serverExternalPackages, basta con webpack resolve.alias para dedup de rutas Windows

- Fix formato código tropa (T178 → B 2026 0178):
  * Seed data tenía códigos incorrectos "T178"/"T179" para últimas tropas
  * Corregido a "B 2026 0178"/"B 2026 0179" en seed-data/tropas.json
  * Rewrite de generarCodigoTropa() en /api/tropas/route.ts usando tabla Numerador con atomic increment
  * Agregado campo codigoSimplificado (ej: "B0180") para rótulos
  * Seed de Numerador ahora calcula dinámicamente según última tropa creada

- Downgrade Next.js 16 → 15.5.18 (sesión anterior):
  * Bug workUnitAsyncStorage en Next.js 16 causaba errores en build Windows
  * Mantenido en 15.5.18 estable

- Prueba impresión Zebra ZT410:
  * Creado archivo ZPL de prueba (ANIMAL_INDIVIDUAL_TEST.prn) con datos simulados
  * Datos: Tropa B 2026 0177, Peso 485, Nro 0042, Caravana 1062
  * Impresora IP 192.168.1.81 puerto 9100
  * Comandos PowerShell para envío directo TCP/IP
  * Prueba exitosa — impresión confirmada por usuario

Stage Summary:
- Sistema completamente funcional en Windows (C:\TrazaAlan)
- Build limpia, login funciona, todos los módulos accesibles
- Permisos de admin corregidos
- Datos cargan correctamente desde PostgreSQL
- Errores useContext eliminados
- Códigos de tropa con formato correcto (B 2026 XXXX)
- Impresión Zebra ZT410 verificada y funcionando
- Commits pushed a GitHub: aarescalvo/trz8
