import prismaCLient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserServices {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrent");
    }

    const userAlreadyExists = await prismaCLient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = prismaCLient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },

      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserServices };
