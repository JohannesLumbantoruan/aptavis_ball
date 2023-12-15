<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

class ClubController extends Controller
{
    public function index()
    {
        $clubs = Club::all();

        return inertia('Index', [ 'clubs' => $clubs ]);
    }

    public function create()
    {
        return inertia('AddClub');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name'  => 'required|unique:clubs',
            'city'  => 'required'
        ]);

        Club::create([
            'name'  => $request->name,
            'city'  => $request->city
        ]);

        return redirect('/clubs/create')->with('status', 'Klub berhasil ditambahkan!');
    }

    public function createScore()
    {
        $clubs = Club::all();

        return inertia('AddScore', [ 'clubs' => $clubs ]);
    }

    public function storeScore(Request $request)
    {
        $this->validate($request, [
            'homeTeam'      => 'required',
            'awayTeam'      => 'required',
            'homeTeamScore' => 'required',
            'awayTeamScore' => 'required'
        ]);

        $homeTeam = Club::find($request->homeTeam);
        $awayTeam = Club::find($request->awayTeam);
    }
}
