import { createHash } from 'node:crypto';

const SHA256 = (payload: string) => {
    return createHash('sha256').update(payload).digest('hex');
}

export { SHA256 };
