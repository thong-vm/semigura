import { ApiUtilities } from "../apiUtilities";

class ApiAuth extends ApiUtilities {}
export const AuthLogin = new ApiAuth("users/login");
