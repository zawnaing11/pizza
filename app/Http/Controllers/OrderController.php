<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function show(Pizza $pizza)
    {
        return Inertia::render('Order/Show', [
            'pizza' => $pizza
        ]);
    }
}
