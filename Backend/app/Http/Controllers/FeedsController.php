<?php

namespace App\Http\Controllers;

use App\Models\Feeds;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class FeedsController extends Controller
{

  public function index()
  {
      $feeds = Feeds::latest()->paginate(10);
      return [
          "status" => 1,
          "data" => $feeds
      ];
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
      //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $request->validate([
      'author' => 'required',
      'type' => 'required',
      'text' => 'required',
    ]);
    $feeds = Feeds::create($request->all());
    return [
        "status" => 1,
        "data" => $feeds
    ];
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Feeds  $feeds
   * @return \Illuminate\Http\Response
   */
  public function show(Feeds $feeds)
  {
      return [
          "status" => 1,
          "data" =>$feeds
      ];
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Feeds  $blog
   * @return \Illuminate\Http\Response
   */
  public function edit(Feeds $feeds)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Feeds  $blog
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $feedId)
  {
    $request->validate([
      'author' => 'required',
      'type' => 'required',
      'text' => 'required',
    ]);

    $feed = Feeds::find($feedId);
    $feed->update($request->all());

    return [
        "status" => 1,
        "data" => $feed,
        "msg" => "Feed updated successfully"
    ];
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Feeds  $blog
   * @return \Illuminate\Http\Response
   */
  public function destroy($feedId)
  {
      $feed = Feeds::where('id', $feedId)->get();
      //Log::channel('stderr')->info($feedId);
      $feed->each->delete();
      return [
          "status" => 1,
          "data" => $feed,
          "msg" => "Feed deleted successfully"
      ];
  }
}