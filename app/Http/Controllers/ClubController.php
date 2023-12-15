<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

class ClubController extends Controller
{
    public function index()
    {
        $clubs = Club::orderBy('point', 'desc')->get();

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
        // $this->validate($request, [
        //     'homeTeam'      => 'required',
        //     'awayTeam'      => 'required',
        //     'homeTeamScore' => 'required',
        //     'awayTeamScore' => 'required'
        // ]);

        // $homeTeam = Club::find($request->homeTeam);
        // $awayTeam = Club::find($request->awayTeam);

        // $homeTeam->mp += 1;
        // $awayTeam->mp += 1;
        // $homeTeam->gf += $request->homeTeamScore;
        // $awayTeam->gf += $request->awayTeamScore;
        // $homeTeam->ga += $request->awayTeamScore;
        // $awayTeam->ga += $request->homeTeamScore;

        // if ($request->homeTeamScore > $request->awayTeamScore) {
        //     $homeTeam->w += 1;
        //     $awayTeam->l += 1;
        //     $homeTeam->point += 3;
        // } elseif ($request->homeTeamScore < $request->awayTeamScore) {
        //     $homeTeam->l += 1;
        //     $awayTeam->w += 1;
        //     $awayTeam->point += 3;
        // } else {
        //     $homeTeam->d += 1;
        //     $awayTeam->d += 1;
        //     $homeTeam->point += 1;
        //     $awayTeam->point += 1;
        // }

        // $homeTeam->save();
        // $awayTeam->save();

        $this->validate($request, [
            'matches' => 'required'
        ]);

        $matches = $request->matches;

        foreach($matches as $match) {
            $homeTeam = Club::find($match['homeTeam']);
            $awayTeam = Club::find($match['awayTeam']);
            $homeTeamScore = $match['homeTeamScore'];
            $awayTeamScore = $match['awayTeamScore'];

            $homeTeam->mp += 1;
            $awayTeam->mp += 1;
            $homeTeam->gf += $homeTeamScore;
            $awayTeam->gf += $awayTeamScore;
            $homeTeam->ga += $awayTeamScore;
            $awayTeam->ga += $homeTeamScore;

            if ($homeTeamScore > $awayTeamScore) {
                $homeTeam->w += 1;
                $awayTeam->l += 1;
                $homeTeam->point += 3;
            } elseif ($homeTeamScore < $awayTeamScore) {
                $homeTeam->l += 1;
                $awayTeam->w += 1;
                $awayTeam->point += 3;
            } else {
                $homeTeam->d += 1;
                $awayTeam->d += 1;
                $homeTeam->point += 1;
                $awayTeam->point += 1;
            }

            $homeTeam->save();
            $awayTeam->save();
        }

        return redirect('/clubs/scores/create')->with('status', 'Skor pertandingan berhasil ditambahkan');
    }
}
