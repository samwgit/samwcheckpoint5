import { AppState } from "../AppState.js";
import { Advert } from "../models/Advert.js";
import Pop from "../utils/Pop.js";
import { SandboxApi } from "./AxiosService.js";



export class AdvertService {
  async getAdvert() {
    try {
      const res = await SandboxApi.get('/api/ads')
      AppState.advert = new Advert(res.data)
    } catch (error) {
      Pop.error('[getAdverts: Failed!]', error)
    }
  }

}

export const advertService = new AdvertService();