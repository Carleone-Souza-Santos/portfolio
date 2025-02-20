// const FetchProducts = async (query) => {
//   try {
//     const res = await fetch(
//       `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
//     );

//     if (!res.ok) {
//       throw new Error('Erro ao buscar produtos');
//     }

//     const data = await res.json();

//     // Filtra apenas os livros
//     const books = data.results.filter(
//       (product) =>
//         product.category_id && product.category_id.includes('MLB1055'),
//     );

//     console.log(books);
//     return books;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export default FetchProducts;
