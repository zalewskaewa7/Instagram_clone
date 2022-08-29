<?php

namespace App\Http\Controllers;

use App\Models\Instagram;
use Illuminate\Http\Request;

class InstagramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function login(Request $request){
        $data = new Instagram();
        $data -> userName =$request->userName;
        $data -> userPassword =$request->userPassword;
        return response()->json($data);
    
    }
    public function register(Request $request){
        $data = new Instagram();
        $data -> telEmail =$request->telEmail;
        $data -> nameSurname =$request->nameSurname;
        $data -> userName =$request->userName;
        $data -> userPassword =$request->userPassword;
        return response()->json($data);
    
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Instagram  $instagram
     * @return \Illuminate\Http\Response
     */
    public function show(Instagram $instagram)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Instagram  $instagram
     * @return \Illuminate\Http\Response
     */
    public function edit(Instagram $instagram)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Instagram  $instagram
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Instagram $instagram)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Instagram  $instagram
     * @return \Illuminate\Http\Response
     */
    public function destroy(Instagram $instagram)
    {
        //
    }
}
