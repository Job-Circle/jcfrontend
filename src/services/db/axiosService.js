import i18n from "@/i18n"
import { decrypt } from '../security/enc';
import { smDebug } from "@/services/tools/logger"

function axiosInterceptor(config) {
  const user = decrypt(localStorage.getItem("user"));
  if (user && user.accessToken) {
    config.headers['x-access-token'] = user.accessToken;
  }

  const frontendUrlParts = window.location.href.split('/');
  const mainUrl = frontendUrlParts[0] + '//' + frontendUrlParts[2];

  config.headers['x-frontend-url'] = mainUrl;
  config.headers['x-locale'] = i18n.global.locale.value;
  return config;
}

export default axiosInterceptor;