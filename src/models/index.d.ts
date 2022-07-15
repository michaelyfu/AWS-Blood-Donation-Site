import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type Registration2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Registration2 {
  readonly id: string;
  readonly fName?: string | null;
  readonly lName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Registration2, Registration2MetaData>);
  static copyOf(source: Registration2, mutator: (draft: MutableModel<Registration2, Registration2MetaData>) => MutableModel<Registration2, Registration2MetaData> | void): Registration2;
}