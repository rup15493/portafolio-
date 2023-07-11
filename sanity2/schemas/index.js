import { createSchema, createSchemaTypes } from 'sanity';
import blockContent from "./blockContent"
import project from "./project"
import pageInfo from "./pageInfo";
import skill from './skill';
import experience from './experience';
import social from './social';

const SchemaTypes = createSchemaTypes({
  name: 'SchemaTypes',
  types: [skill, pageInfo, experience, social, project]
});

export default createSchema({
  name: 'default',
  types: SchemaTypes.concat([blockContent])
});
