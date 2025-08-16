const fetch = require("node-fetch");
const path = require("path");

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

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const productTemplate = path.resolve("src/templates/product.js");

    const result = await graphql(`
    {
      allStrapiProduct {
        nodes {
          Slug
        }
      }
    }
  `);

    if (result.errors) {
        throw result.errors;
    }

    const products = result.data.allStrapiProduct.nodes;

    products.forEach(product => {
        createPage({
            path: `/product/${product.Slug}`,
            component: productTemplate,
            context: {
                slug: product.Slug
            },
        });
    });
};