<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizza/Index', [
            'pizzas' => $pizzas
        ]);
    }

    public function edit(Pizza $pizza)
    {
        return Inertia::render('Pizza/Edit', [
            'pizza' => $pizza
        ]);
    }

    public function update(Pizza $pizza, Request $request)
    {
        $pizza->update([
            'status' => $request->status,
        ]);
    }
}
