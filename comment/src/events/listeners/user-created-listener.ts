import { Message } from "node-nats-streaming";
import { Subjects, Listener, UserCreatedEvent } from "@aliet/common";

import { User } from "../../models/user";
import { queueGroupName } from "./queue-group-name";

export class UserCreatedListener extends Listener<UserCreatedEvent> {
  subject: Subjects.UserCreated = Subjects.UserCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: UserCreatedEvent["data"], msg: Message) {
    const { id, active, name, type } = data;

    const user = User.build({
      name,
      type,
      active,
    });

    await user.save();

    msg.ack();
  }
}
