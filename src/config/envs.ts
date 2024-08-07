import 'dotenv/config';
import * as Joi from 'Joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MICROSERVICE_PORT: number;
  PRODUCTS_MICROSERVICE_HOST: string;
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  PRODUCTS_MICROSERVICE_PORT: Joi.number().required(),
  PRODUCTS_MICROSERVICE_HOST: Joi.string().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  productMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  productMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
};
