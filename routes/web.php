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

// Route::view('/', 'frontend/index');

// Route::view('Community', 'frontend/community');

// Route::view('Services', 'frontend/services');

// Route::view('Works', 'frontend/works');

// Route::view('Clients', 'frontend/clients');

// Route::view('Team', 'frontend/team');

// Route::view('Contact', 'frontend/contact');

// Route::get('Contact/sendMessage', 'ContactController@sendMessage');

Route::group(['prefix' => 'admin'], function() {
    // Admin Panel
    Route::get('login', 'LoginController@view');
    Route::post('login', 'LoginController@login');
    Route::get('', function() {
        return view('admin.home');
    } );

    Route::get('home', 'AdminController@home')->name('admin-home');
    Route::get('home/edit', 'AdminController@editHome')->name('edit-home');
    Route::post('home/edit', 'AdminController@editHomeAction');

    Route::get('marketing', 'AdminController@marketing')->name('admin-marketing');
    Route::get('marketing/edit', 'AdminController@editMarketing')->name('edit-marketing');
    Route::post('marketing/edit', 'AdminController@editMarketingAction');

    Route::get('relaciones', 'AdminController@relaciones')->name('admin-relaciones');
    Route::get('relaciones/edit', 'AdminController@editRelaciones')->name('edit-relaciones');
    Route::post('relaciones/edit', 'AdminController@editRelacionesAction');
    
});

// Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
?>


