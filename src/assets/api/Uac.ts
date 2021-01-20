import AxiosBuilder from "../mixin/AxiosBuilder"
import Page from "../vo/Page"
import User from "../vo/uac/User"

export function userList(): Promise<Page<User>> {
  return AxiosBuilder.get('/uac/user')
}
