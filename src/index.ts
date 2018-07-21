import {WecitizensApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {WecitizensApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new WecitizensApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
