

import * as users from './user';
import * as expenses from './expense';
import * as tags from './tag';
import * as sessions from './session';

export const schema = {
    ...users,
    ...expenses,
    ...tags,
    ...sessions
};