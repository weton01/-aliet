import { UserTypes } from '@aliet/types';
import { Subjects } from './subjects';
export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        name: string;
        type: UserTypes;
        active: boolean;
    };
}
