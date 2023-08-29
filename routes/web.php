<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/','App\Http\Controllers\home\HomeController@Home')->name("home.index");
Route::get('/Mucdich','App\Http\Controllers\mucdich\MucdichController@Mucdich')->name("mucdich.index");

Route::get('/Sanpham','App\Http\Controllers\products\ProductsController@Products')->name("products.index");

Route::get('/Gioithieu','App\Http\Controllers\gioithieu\GioithieuController@Gioithieu')->name("gioithieu.index");
Route::get('/Nhansu','App\Http\Controllers\cardgioithieu\NhansuController@Nhansu')->name("cardgioithieu.nhansu");
Route::get('/Giatri','App\Http\Controllers\cardgioithieu\GiatriController@Giatri')->name("cardgioithieu.giatri");
Route::get('/Khachhang','App\Http\Controllers\cardgioithieu\KhachhangController@Khachhang')->name("cardgioithieu.khachhang");

Route::get('/Sukien','App\Http\Controllers\sukien\SukienController@Sukien')->name("sukien.index");

Route::get('/Lienhe','App\Http\Controllers\lienhe\LienheController@Lienhe')->name("lienhe.index");