import { get as getRequest } from '~/untils/Request';

export const search = async (q, type = 'less') => {
    try {
        const res = await getRequest(`users/search?`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
