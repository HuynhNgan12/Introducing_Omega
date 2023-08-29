<?php
namespace App\Http\Controllers\home;
use App\Http\Controllers\Controller;
class HomeController extends Controller{
    public function Home() {
        return view('home.index');
    }
}