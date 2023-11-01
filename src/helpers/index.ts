import crypto from 'crypto';

const SECRET = 'BIG_MAN_DREZZY.YOU_GET_ME-FAM987456';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}