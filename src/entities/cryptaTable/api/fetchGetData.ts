import { instance } from 'shared/api';
import { Crypta } from '../model/crypta.type';
import { createAppAsyncThunk } from 'shared/store/redux.hooks';

type FetchDataResponse = {
  data: Crypta[];
};

export const getCryptaApi = {
  getCryptas() {
    return instance.get<FetchDataResponse>('/assets');
  },
};

export const fetchGetData = createAppAsyncThunk<
  Crypta[],
  void,
  { rejectValue: string }
>('crypta/fetchGetData', async (_, thunkApi) => {
  try {
    const { data } = await getCryptaApi.getCryptas();
    return data.data;
  } catch (e) {
    console.error(e);
    return thunkApi.rejectWithValue('Error :(');
  }
});
