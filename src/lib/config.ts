import { IConfig } from 'src/components/models';

export const NewConfig = (): IConfig => {
  return {
    id: 1,
    current: '',
    index: [],
    saving: false,
    edit: true,
    darkMode: false,
    tabView: true,
  };
};
