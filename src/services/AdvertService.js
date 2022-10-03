import { AppState } from "../AppState.js";
import { Advert } from "../models/Advert.js";
import Pop from "../utils/Pop.js";
import { SandboxApi } from "./AxiosService.js";



export class AdvertService {
  async getAdvert() {
    try {
      const res = await SandboxApi.get('/api/ads')
      // TODO res.data is always something different every time, got to account for this one as it's an array, not a singular object.
      // AppState.advert = new Advert(res.data)
      AppState.advert = res.data.map(a => new Advert(a))
    } catch (error) {
      Pop.error('[getAdverts: Failed!]', error)
    }
  }

}

export const advertService = new AdvertService();