const products = require ('./Products');
function findProductByName(productName){
    const foundProduct = products.find(product => product.name === productName);
    return foundProduct ||null; // if foundProduct is null, return null or return foundProduct

}
const productNameToSearch = "laptop";
const foundProduct = findProductByName(productNameToSearch);

if(foundProduct){
    console.log(`product found: ${foundProduct.name}`);
    console.log(foundProduct);
}
else{
    console.log(`product not found: ${productNameToSearch}`);
}




