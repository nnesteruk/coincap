import { Crypta, CryptaHistory } from "shared/types";
import { instance } from "shared/api/instance";

import { createAppAsyncThunk } from "shared/state";
import { notify } from "shared/ui/notify/Notify";

type FetchDataResponse = {
  data: Crypta[];
};

const getCryptaApi = {
  getCryptas() {
    return instance.get<FetchDataResponse>("/assets");
  },
  getHistory(id: string) {
    return instance.get(`/assets/${id}/history?interval=d1`);
  },
};

export const fetchGetData = createAppAsyncThunk<
  Crypta[],
  void,
  { rejectValue: string }
>("crypta/fetchGetData", async (_, thunkApi) => {
  try {
    const { data } = await getCryptaApi.getCryptas();
    return data.data;
  } catch (e: any) {
    notify.error(e);
    return thunkApi.rejectWithValue("Error :(");
  }
});

export const fetchGetHistory = createAppAsyncThunk<CryptaHistory[], string>(
  "history",
  async (id, thunkApi) => {
    try {
      const { data } = await getCryptaApi.getHistory(id);
      return data.data;
    } catch (err: any) {
      notify.error(err);
      return thunkApi.rejectWithValue("Error :(");
    }
  },
);
