import { UserTypes } from '@aliet/types';
import { Subjects } from './subjects';
export interface UserUpdatedEvent {
    subject: Subjects.UserUpdated;
    data: {
        name: string;
        type: UserTypes;
        active: boolean;
    };
}
