import axios from 'axios';
import type { AxiosInstance } from 'axios';
import { UserDTO, LoginDTO } from '../dto/UserDTO';

class ApiService {
  private axiosInstance: AxiosInstance;
  private basePath: string;

  constructor(baseURL: string, basePath: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.basePath = basePath;
  }

  setAuthToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async login(data: LoginDTO) {
    return this.axiosInstance.post(`${this.basePath}/login`, data);
  }

  async createUser(data: UserDTO) {
    return this.axiosInstance.post(this.basePath, data);
  }

  async getUserByUUID(uuid: string) {
    return this.axiosInstance.get(`${this.basePath}/uuid/${uuid}`);
  }
}

export default ApiService;
