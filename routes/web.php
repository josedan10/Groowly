<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'frontend/index');

Route::view('Community', 'frontend/community');

Route::view('Services', 'frontend/services');

Route::view('Works', 'frontend/works');

Route::view('Clients', 'frontend/clients');

Route::view('Team', 'frontend/team');

Route::view('Contact', 'frontend/contact');

Route::group(['prefix' => 'admin'], function() {
    // Admin Panel
    Route::get('login', 'LoginController@view');
});


?>
