<?php
namespace App\Http\Controllers\gioithieu;
use App\Http\Controllers\Controller;
class GioithieuController extends Controller{
    public function Gioithieu() {
        return view('gioithieu.index');
    }
}