import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}

class DetailOrderServices {
  async execute({ order_id }: OrderRequest) {
    // Busca todos os itens associados a um pedido específico, incluindo detalhes do produto e do pedido
    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true, // Inclui os detalhes do produto relacionado a cada item
        order: true, // Inclui os detalhes do pedido relacionado a cada item
      },
    });

    return orders;
  }
}

export { DetailOrderServices };
