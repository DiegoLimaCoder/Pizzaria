import prismaClient from "../../prisma";

class ListCategoryServices {
  async execute() {
    const category = prismaClient.catogory.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { ListCategoryServices };
