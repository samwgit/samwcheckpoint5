import { Account } from "../models/Account.js"
import { SandboxApi } from "../services/AxiosService.js"
import { AppState } from "../AppState.js"


class ProfilesService {
  async getProfileById(id) {
    const res = await SandboxApi.get(`/api/profiles/${id}`)
    AppState.activeProfile = new Account(res.data)
  }
}

export const profilesService = new ProfilesService()