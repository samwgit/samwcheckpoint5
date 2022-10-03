import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { SandboxApi } from './AxiosService'
import { Account } from "../models/Account.js";
class AccountService {
  async getAccount() {
    try {
      const res = await SandboxApi.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(formData) {
    const res = await SandboxApi.put('/account', formData)
    AppState.account = new Account(res.data)
  }

}

export const accountService = new AccountService()
