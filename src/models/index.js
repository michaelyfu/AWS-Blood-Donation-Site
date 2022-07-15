// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Registration2 } = initSchema(schema);

export {
  Registration2
};