import axios from "axios";
import router from '@/router';
import { smError } from "@/services/logger";
import authHeader from "./auth-header";
import { encrypt, decrypt } from './enc';
import { JCBEHlpr } from "../db/db.hlpr"
import { smDebug } from "../tools/logger";

const urlUsr = `${process.env.VUE_APP_ROOT_API}/api/usr`;

class AuthService {
    // Store the timer ID so it can be cleared if logout is called
    tokenRenewalTimeoutId = null;

    async login(user) {
        const paramsAxios = await JCBEHlpr.post(
            `${urlUsr}/sgnN"`,
            actionParams,
            {   // apiParams
                email: user.email,
                password: user.password,
            },
            true,
        );
        if (paramsAxios.resp && paramsAxios.resp.data?.accessToken) {
            localStorage.setItem("user", encrypt(response.data));
            this.scheduleRenewal(response.data.accessToken);
        }
        return paramsAxios; // $$ Gene: return response.data;
    }

    logout() {
        // Clear scheduled renewal
        clearTimeout(this.tokenRenewalTimeoutId);
        localStorage.removeItem("user");
    }

    /**
     * 
     * @param {*} actionParams 
     * .val.oldPassword, .val.newPassword, .val.confirmPassword
     * @returns 
     */
    async changePassword(actionParams) {
        return await JCBEHlpr.post(
            `${urlUsr}/chgPwd"`,
            actionParams,
            {},  // apiParams 
            true,
            {   // Additional request configuration
                headers: authHeader(),
            }
        );
    }

    scheduleRenewal() {
        this.tokenRenewalTimeoutId = setTimeout(() => this.renewToken(), 780000);
    }

    async renewToken() {
        try {

            const userData = decrypt(localStorage.getItem("user"));

            if (!userData || !userData.id) {
                throw new Error("No data");
            }

            const { data } = await axios.post(url + "/rftk", { userId: userData.id });

            if (!data || !data.accessToken) {
                throw new Error("New token missing in response");
            }

            localStorage.setItem("user", encrypt({ ...userData, accessToken: data.accessToken }));

            this.scheduleRenewal(data.accessToken);
        } catch (error) {

            this.logout();
            router.push('/login');
        }
    }

}

export default new AuthService();
