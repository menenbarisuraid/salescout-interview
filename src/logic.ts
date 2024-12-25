// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};

function filterAndSortProducts(products: Product[]): Product[] {
    // Create a map to filter out duplicate products by name
    const uniqueProductsMap = new Map<string, Product>();

    products.forEach(product => {
        if (!uniqueProductsMap.has(product.name)) {
            uniqueProductsMap.set(product.name, product);
        }
    });

    // Convert map values to an array and sort by price
    return Array.from(uniqueProductsMap.values()).sort((a, b) => a.price - b.price);
}

module.exports = { filterAndSortProducts };
