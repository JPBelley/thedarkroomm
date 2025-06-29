const fetch = require("node-fetch");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const res = await fetch(`https://api.gumroad.com/v2/products?access_token=${process.env.GUMROAD_ACCESS_TOKEN}`);
    const data = await res.json();
    
    if (!data.success) {
        console.error("Failed to fetch Gumroad products:", data);
        return;
    }

    const { products } = data;

    products.forEach(product => {
        createNode({
            ...product,
            id: createNodeId(`gumroad-product-${product.id}`),
            parent: null,
            children: [],
            internal: {
                type: "GumroadProducts",
                contentDigest: createContentDigest(product),
            },
        });
    });
};