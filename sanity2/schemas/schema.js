import { createSchema, createSchemaTypes } from 'sanity';

import blockContent from './schemas/blockContent';
import project from './schemas/project';
import pageInfo from "./schemas/pageInfo";
import skill from './schemas/skill';
import experience from './schemas/experience';
import social from './schemas/social';

const SchemaTypes = createSchemaTypes({
  name: 'SchemaTypes',
  types: [skill, pageInfo, experience, social, project]
});

export default createSchema({
  name: 'default',
  types: SchemaTypes.concat([blockContent])
});
