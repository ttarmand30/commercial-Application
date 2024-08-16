import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 1101,
  login: 'sX+=Z!@qY6a\\by085fR\\{UtILPs\\52KJ2a',
};

export const sampleWithPartialData: IUser = {
  id: 15670,
  login: 'dAww',
};

export const sampleWithFullData: IUser = {
  id: 19999,
  login: 'LDpX8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
