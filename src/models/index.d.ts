import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Genders {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type Registration2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Registration2 {
  readonly id: string;
  readonly fName?: string | null;
  readonly mName?: string | null;
  readonly lName?: string | null;
  readonly DOB?: string | null;
  readonly Gender?: string | null;
  readonly Race?: string | null;
  readonly BloodType?: string | null;
  readonly DateOfLastDonation?: string | null;
  readonly DonationFrequency?: string | null;
  readonly MedicalConditions?: string | null;
  readonly Address?: string | null;
  readonly City?: string | null;
  readonly State?: string | null;
  readonly ZipCode?: string | null;
  readonly Country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Registration2, Registration2MetaData>);
  static copyOf(source: Registration2, mutator: (draft: MutableModel<Registration2, Registration2MetaData>) => MutableModel<Registration2, Registration2MetaData> | void): Registration2;
}