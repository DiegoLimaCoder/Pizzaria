import prismaClient from "../../prisma";
import { normalizeCategoryName } from "../../utils/normalizeCategoryName";

class CategoryRequest {
  name: string;
}

class CreateCategoryServices {
  async execute({ name }: CategoryRequest) {
    if (name.trim() === "") {
      throw new Error("Name invalid");
    }

    const normalizedCategoryName = normalizeCategoryName(name);

    const categoryAlreadyExist = await prismaClient.catogory.findFirst({
      where: {
        name: normalizedCategoryName,
      },
    });

    if (categoryAlreadyExist) {
      throw new Error("Category is already exist");
    }

    const category = await prismaClient.catogory.create({
      data: {
        name: normalizedCategoryName,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryServices };
