const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisl lorem. Praesent pharetra, sapien ut fringilla malesuada, nisi felis ullamcorper ex, eu consectetur elit dolor sed dolor. Praesent orci mi, auctor aliquet semper vitae, volutpat quis augue. Cras porta sapien nec pharetra laoreet. Sed at velit sit amet mauris varius volutpat sit amet id mauris. Maecenas vitae mattis ante. Morbi nulla quam, sagittis at orci eu, scelerisque auctor neque.";
const createBrazilian = async (
    desertsCategoryId: string,
    juicesCategoryId: string,
) => {
    const brazilianCategory = await prismaClient.category.create({
        data: {
            name: "Brasileira",
            imageUrl:
                "https://utfs.io/f/d84e3a7a-fcf6-4d3d-86bf-d62c0b1febdc-m1yv44.png",
        },
    });

    const brazilianstores = [
        {
            name: "Churrascaria House",
            imageUrl:
                "https://utfs.io/f/5a090f6e-520f-418a-a42a-043b512314a2-n9n78u.png",
            supportUrl: 'https://example.com/support',
            filePath:'123abc',
            shortDescription: 'Your one-stop destination for tech gadgets.',
            categories: {
                connect: {
                    id: brazilianCategory.id,
                },
            },
        },
        {
            name: "Omni Churrascaria",
            imageUrl:
                "https://utfs.io/f/87338583-660e-47f1-a80d-6ea804298bd5-n9n78v.png",
            filePath:'123abc',
            supportUrl: 'https://example.com/support',
            shortDescription: 'Your one-stop destination for tech gadgets.',
            categories: {
                connect: {
                    id: brazilianCategory.id,
                },
            },
        },
        {
            name: "The Churrascaria Queen",
            imageUrl:
                "https://utfs.io/f/b26b00ca-5041-46cb-9b68-a1856ed064ad-n9n78w.png",
            filePath:'123abc',
            supportUrl: 'https://example.com/support',
            shortDescription: 'Your one-stop destination for tech gadgets.',
            categories: {
                connect: {
                    id: brazilianCategory.id,
                },
            },
        },
        {
            name: "Churrascaria House",
            imageUrl:
                "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
            filePath:'123abc',
            supportUrl: 'https://example.com/support',
            shortDescription: 'Your one-stop destination for tech gadgets.',
            categories: {
                connect: {
                    id: brazilianCategory.id,
                },
            },
        },
    ];

    for (const item of brazilianstores) {
        const store = await prismaClient.store.create({
            data: item,
        });

        console.log(`Created ${store.name}`);

        await createDeserts(store.id, desertsCategoryId);
        await createJuices(store.id, juicesCategoryId);

        const brazilianProducts = [
            {
                name: "Camarão Citrus",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:"https://utfs.io/f/cecdeeb8-10e6-4be8-8553-0a120717d194-xf34p9.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
            {
                name: "Picanha Especial",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:
                    "https://utfs.io/f/089299df-fcb9-446a-a8cc-75e4e26b7357-xf34p8.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
            {
                name: "Macarrão com Carne",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:
                    "https://utfs.io/f/891eb8aa-635e-4cb3-b7fd-eb8d1c9f14e1-xf34p7.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
            {
                name: "Carne com Salada",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:
                    "https://utfs.io/f/43d9e18a-4ba9-47b6-9a87-6d4fedbd6f41-xf34ol.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
            {
                name: "Filé Mignon com Fritas",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:
                    "https://utfs.io/f/0cfa51a6-1a88-4114-a6c6-bf607a5a1cb0-xf34ok.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
            {
                name: "Frango ao Molho",
                price: 999.99,
                discount: 10,
                filePath: '/smartphone',
                description: description,
                isAvailableForPurchase: true,
                isRecommended: true,
                isSale: false,
                image:
                    "https://utfs.io/f/9158a622-4b87-4ec6-a726-569dee27a093-xf34oj.png",
                store: {
                    connect: {
                        id: store.id,
                    },
                },
                category: {
                    connect: {
                        id: brazilianCategory.id,
                    },
                },
            },
        ];

        for (const product of brazilianProducts) {
            await prismaClient.product.create({
                data: product,
            });

            console.log(`Created ${product.name}`);
        }
    }
};

const createDeserts = async (storeId: string, categoryId: string) => {
    await prismaClient.store.update({
        where: {
            id: storeId,
        },
        data: {
            categories: {
                connect: {
                    id: categoryId,
                },
            },
        },
    });

    const desertProducts = [
        {
            name: "Sorvete Especial",
            price: 999.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/b703fcaa-eb9c-4257-a08e-fba0f0e12fc1-pr8gxl.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Bolo de Chocolate",
            price: 999.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/029befff-aba7-49b3-91c4-8da022e699b0-pr8gxm.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Petit Gateau",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/98f262f6-dc35-428b-bac9-ac443f9f41bb-pr8gxn.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Bolo de Morango",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/6e6ad97a-f1f1-4d4b-bb40-f5ff25ba97d4-pr8gxo.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Biscoito de Chocolate",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/4b8d0b7c-daa9-46f6-aebd-385cf5e086f7-pr8gxp.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Torta de Morango",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/4caadde1-0a1c-45a6-895b-4bfb6986099d-pr8gxq.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
    ];

    for (const product of desertProducts) {
        await prismaClient.product.create({
            data: product,
        });

        console.log(`Created ${product.name}`);
    }
};

const createJuices = async (storeId: string, categoryId: string) => {
    await prismaClient.store.update({
        where: {
            id: storeId,
        },
        data: {
            categories: {
                connect: {
                    id: categoryId,
                },
            },
        },
    });

    const juiceProducts = [
        {
            name: "Suco de Cenoura",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/5126e950-40ca-4ef1-a166-16274fec16bc-6b2vea.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Suco Cítrico",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/6dbe915d-af87-4f2a-b841-864ba9427da8-6b2ve9.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Suco de Limão",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/03aa4137-c949-4d2c-bdf2-bad6dd1f565e-6b2ve7.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Suco de Laranja",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/ce2b8e30-b922-4b1e-bdde-656348cd25c3-6b2ve6.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Suco de Abacaxi",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/c4202826-7014-4368-8941-fa1af9b9c8b2-6b2ve5.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
        {
            name: "Suco de Melancia",
            price: 90.99,
            discount: 10,
            filePath: '/smartphone',
            description: description,
            isAvailableForPurchase: true,
            isRecommended: true,
            isSale: false,
            image:
                "https://utfs.io/f/a9ba878f-79a8-4c25-883c-5c2e1670b256-6b2ve4.png",
            store: {
                connect: {
                    id: storeId,
                },
            },
            category: {
                connect: {
                    id: categoryId,
                },
            },
        },
    ];

    for (const product of juiceProducts) {
        await prismaClient.product.create({
            data: product,
        });

        console.log(`Created ${product.name}`);
    }
};

const main = async () => {
    const desertsCategory = await prismaClient.category.create({
        data: {
            name: "Sobremesas",
            imageUrl:
                "https://utfs.io/f/0f81c141-4787-4a81-abce-cbd9c6596c7a-xayf5d.png",
        },
    });

    const juicesCategory = await prismaClient.category.create({
        data: {
            name: "Sucos",
            imageUrl:
                "https://utfs.io/f/9f3013bf-0778-4d80-a330-4da2682deaf9-o41y62.png",
        },
    });
    
    await createBrazilian(desertsCategory.id, juicesCategory.id);
};

main()
    .then(() => {
        console.log("Seed do banco de dados realizado com sucesso!");
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prismaClient.$disconnect();
    });