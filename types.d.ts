// Type definitions for Features
// Project: https://github.com/DT9Media/dt9-hub-frontend

export type FeaturesSharedSlice = {
  error: FeaturesError | null;
  mockData: any;
};

export type FeaturesKeyValue = {
  key: string;
  value: any;
}

export type FeaturesError = {
  code: number;
  message: string;
  severity: string;
};
