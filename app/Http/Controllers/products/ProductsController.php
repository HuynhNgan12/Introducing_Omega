<?php
namespace App\Http\Controllers\products;
use App\Http\Controllers\Controller;
class ProductsController extends Controller{
    public function Products() {
        return view('products.index');
    }
}