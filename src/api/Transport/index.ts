import {AxiosResponse} from 'axios';

import api from './api';
import {AxiosRequest, RequestData} from './types';
import {BACKEND_URI} from '@api/configure';

export class Transport {
  public static post<Req, Res = RequestData>(
    request: AxiosRequest<Req>,
  ): Promise<AxiosResponse<Res>> {
    const {path, data, config} = request;
    return api.post(`${BACKEND_URI}/${path}`, data, config);
  }
}
