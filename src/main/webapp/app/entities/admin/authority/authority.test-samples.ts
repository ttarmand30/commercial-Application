import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3fe8c2f7-30d3-4049-b9ab-17f92c0f159e',
};

export const sampleWithPartialData: IAuthority = {
  name: '74c0a1bf-efc5-4790-9155-c72562dc6d5d',
};

export const sampleWithFullData: IAuthority = {
  name: '945f43dc-df7d-41cc-a55f-1a6d56a7dd55',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
