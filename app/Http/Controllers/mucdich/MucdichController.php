<?php
namespace App\Http\Controllers\mucdich;
use App\Http\Controllers\Controller;
class MucdichController extends Controller{
    public function Mucdich() {
        return view('mucdich.index');
    }
}