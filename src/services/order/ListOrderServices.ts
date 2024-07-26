import prismaClient from "../../prisma";

class ListOrderServices {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      select: {
        id: true,
        table: true,
        draft: true,
        name: true,
      },
      orderBy: {
        create_at: "desc",
      },
    });

    return order;
  }
}

export { ListOrderServices };
