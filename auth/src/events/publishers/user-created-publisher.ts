import { Publisher, Subjects, UserCreatedEvent } from '@aliet/common';

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
}
