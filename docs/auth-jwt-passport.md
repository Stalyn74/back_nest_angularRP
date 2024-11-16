# Intalacion
´´´
npm i --save @nestjs/jwt passaport-jwt bcrypt
npm i --save-dev @types/passport-jwt
´´´

# Arrancamos proyecto
´´´
npm run start:dev
´´´
# Modules & Resource
´´´
nest g mo modules/auth
nest g res modules/users
´´´
# Controllers & Services
´´´
nest g co modules/auth
nest g s modules/auth
