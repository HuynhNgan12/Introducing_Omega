<?php
namespace App\Http\Controllers\lienhe;
use App\Http\Controllers\Controller;
class LienheController extends Controller{
    public function Lienhe() {
        return view('lienhe.index');
    }
}