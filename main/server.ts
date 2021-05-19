import env from '@/main/config/env'
import 'module-alias/register'

const app = (await import('./config/app')).default
app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))