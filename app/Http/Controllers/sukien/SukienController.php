<?php
namespace App\Http\Controllers\sukien;
use App\Http\Controllers\Controller;
class SukienController extends Controller{
    public function Sukien() {
        return view('sukien.index');
    }
}