import jsPDF from 'jspdf';
import 'jspdf-autotable';

function generatePDF(cart) {
  const doc = new jsPDF();

  // Document title
  doc.text('Cart Products', 14, 20);

  // Headers for the table
  const headers = [['Product', 'Description', 'Price']];

  // Get unique products in the cart
  const uniqueProducts = [...new Set(cart.map((item) => item.id))];

  // Data for the table, using unique product IDs
  const data = uniqueProducts.map((productId) => {
    const product = cart.find((item) => item.id === productId);
    return [product.title, product.description, product.price.toFixed(2)];
  });

  // Generate the table with the unique product data
  doc.autoTable({
    head: headers,
    body: data,
    startY: 30,
  });

  // Calculate the total price based on unique products
  const totalPrice = uniqueProducts.reduce(
    (total, productId) => {
      const product = cart.find((item) => item.id === productId);
      return total + product.price;
    },
    0
  );

  // Display the total price at the end of the document
  doc.text(`Total Price: $${totalPrice.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);

  // Save the PDF
  doc.save('cart-summary.pdf');
}
export default generatePDF