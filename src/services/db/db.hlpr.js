import axios from 'axios';
import { jcErrorDB } from '../tools/logger';

export const JCBEHlpr = {
    /**
     * General wrapper for `axios.get()`.
     *
     * @param {String} url
     * Passed to axios.get()
     * @param {Object} actionParams
     * `.callbackFuncDone` is optional
     * `.params` is optional, passed back to callbackFuncDone in `.params`
     * @param {Object} apiParams
     * Passed to axios.get()
     * @param {Function} callCallbackFunction
     * If true, then `actionParams.callbackFuncDone` will be called if found,
     * passing to it the object returned from this function.
     * @param {Object} addReqConfig
     * Additional Axios Configuration
     * @returns
     * { resp, err, params }:
     * err: null if no error, otherwise, it has axios error.
     * resp: null in case of error, otherwise, it has the `response`.
     * params: as passed in `actionParams.params`.
     */
    async get(url, actionParams, apiParams, callCallbackFunction, addReqConfig) {
        return await axios.get(url, { params: apiParams, ...addReqConfig })
            .then(function (response) {
                // handle success
                let paramsAxios = {
                    resp: response, err: null, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).catch(function (error) {
                jcErrorDB(error);
                let paramsAxios = {
                    resp: null, err: error, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).finally(function () {
                // always executed
            });
    },

    /**
     * General wrapper for `axios.put()`.
     *
     * @param {*} url
     * Passed to axios.put()
     * @param {*} actionParams
     * `.val` is the object to be updated
     * `.callbackFuncDone` is optional
     * `.params` is optional, passed back to callbackFuncDone in `.params`
     * @param {*} apiParams
     * Passed to axios.put()
     * @param {*} callCallbackFunction
     * If true, then `actionParams.callbackFuncDone` will be called if found,
     * passing to it the object returned from this function.
     *
     * @returns
     * { resp, err, params }:
     * err: null if no error, otherwise, it has axios error.
     * resp: null in case of error, otherwise, it has the `response`.
     * params: as passed in `actionParams.params`.
     */
    async put(url, actionParams, apiParams, callCallbackFunction) {
        return await axios.put(url, actionParams.val, { params: apiParams })
            .then(function (response) {
                // handle success
                let paramsAxios = {
                    resp: response, err: null, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).catch(function (error) {
                jcErrorDB(error);
                let paramsAxios = {
                    resp: null, err: error, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).finally(function () {
                // always executed
            });
    },

    /**
     * General wrapper for `axios.post()`.
     *
     * @param {*} url
     * Passed to axios.post()
     * @param {*} actionParams
     * `.val` is the object to be inserted
     * `.callbackFuncDone` is optional
     * `.params` is optional, passed back to callbackFuncDone in `.params`
     * @param {*} apiParams
     * Passed to axios.post()
     * @param {*} callCallbackFunction
     * If true, then `actionParams.callbackFuncDone` will be called if found,
     * passing to it the object returned from this function.
     *
     * @returns
     * { resp, err, params }:
     * err: null if no error, otherwise, it has axios error.
     * resp: null in case of error, otherwise, it has the `response`.
     * params: as passed in `actionParams.params`.
     */
    async post(url, actionParams, apiParams, callCallbackFunction, addReqConfig) {
        return await axios.post
            (url, actionParams.val, { params: apiParams, ...addReqConfig })
            .then(function (response) {
                // handle success
                let paramsAxios = {
                    resp: response, err: null, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).catch(function (error) {
                jcErrorDB(error);
                let paramsAxios = {
                    resp: null, err: error, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).finally(function () {
                // always executed
            });
    },

    // $$ might need postWithParam for /:id

    /**
     * General wrapper for `axios.delete()`.
     *
     * @param {*} url
     * Passed to axios.delete()
     * @param {*} actionParams
     * `.callbackFuncDone` is optional
     * `.params` is optional, passed back to callbackFuncDone in `.params`
     * @param {*} apiParams
     * Passed to axios.delete()
     * @param {*} callCallbackFunction
     * If true, then `actionParams.callbackFuncDone` will be called if found,
     * passing to it the object returned from this function.
     *
     * @returns
     * { resp, err, params }:
     * err: null if no error, otherwise, it has axios error.
     * resp: null in case of error, otherwise, it has the `response`.
     * params: as passed in `actionParams.params`.
     */
    async delete(url, actionParams, apiParams, callCallbackFunction) {
        await axios.delete(url, { params: apiParams })
            .then(function (response) {
                // handle success
                let paramsAxios = {
                    resp: response, err: null, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).catch(function (error) {
                jcErrorDB(error);
                let paramsAxios = {
                    resp: null, err: error, params: actionParams.params
                };
                if (callCallbackFunction && actionParams.callbackFuncDone != null)
                    actionParams.callbackFuncDone(paramsAxios);
                return paramsAxios;
            }).finally(function () {
                // always executed
            });
    },
};
