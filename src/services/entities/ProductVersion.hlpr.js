import { JCBEHlpr } from "../db/db.hlpr";
const API_END_POINT = import.meta.env.VITE_ROOT_API;
const urlPV = `${API_END_POINT}/api/pv`;

export var ProductVersionHlpr = {
    findAll: async function (actionParams) {
        return await JCBEHlpr.get(`${urlPV}/gtA`,
            actionParams, // actionParams
            {}, // apiParams
            true // Calls callback function
        );
    },
};
