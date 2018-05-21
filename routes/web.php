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

Route::get('/', 'FrontendController@index');
// Route::view('/Videos', 'frontend.videos');

// Route::view('Community', 'frontend/community');

// Route::view('Services', 'frontend/services');

// Route::view('Works', 'frontend/works');

// Route::view('Clients', 'frontend/clients');

// Route::view('Team', 'frontend/team');

// Route::view('Contact', 'frontend/contact');

// Route::get('Contact/sendMessage', 'ContactController@sendMessage');

Route::group(['prefix' => 'admin',  'middleware' => ['web']], function() {
    // Admin Panel
    
    Route::get('login', 'LoginController@view')->name('login');
    Route::post('login', 'LoginController@login');
    
    //Route::group(['middleware' => ['auth']], function() {
        Route::get('', function() {
            // dd(Auth::user());
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
    
        Route::get('users', 'AdminController@users')->name('admin-users');
        Route::get('users/add', 'AdminController@addUser')->name('add-user');
        Route::post('users/add', 'AdminController@editUserAction');
        Route::get('users/edit/{id}', 'AdminController@editUser')->name('edit-user');
        Route::post('users/edit/{id}', 'AdminController@editUserAction');
        Route::get('users/my-account', 'AdminController@myAccount')->name('my-account');
        Route::post('users/my-account', 'AdminController@myAccountEdit');
    
        Route::get('subsections/{subsection}', 'AdminController@subsection');
        Route::get('subsection/marketing/add', 'AdminController@addSubsectionMarketing')->name('add-subsection-marketing');
        Route::post('subsection/marketing/add', 'AdminController@addSubsectionMarketingAction');
        Route::get('subsection/relaciones/add', 'AdminController@addSubsectionRelaciones')->name('add-subsection-relaciones');
        Route::post('subsection/relaciones/add', 'AdminController@addSubsectionRelacionesAction');
        Route::get('subsection/marketing/{id}/edit', 'AdminController@editSubsectionMarketing')->name('edit-subsection-marketing');
        Route::put('subsection/marketing/{id}/edit', 'AdminController@editSubsectionMarketingAction');
        Route::get('subsection/relaciones/{id}/edit', 'AdminController@editSubsectionRelaciones')->name('edit-subsection-relaciones');
        Route::put('subsection/relaciones/{id}/edit', 'AdminController@editSubsectionRelacionesAction');
        Route::get('subsection/marketing/{id}/delete', 'AdminController@deleteSubsectionMarketing');
        Route::get('subsection/relaciones/{id}/delete', 'AdminController@deleteSubsectionRelaciones');

        Route::get('community', 'AdminController@community')->name('admin-community');
        Route::get('community/add', 'AdminController@addCommunity')->name('add-community');
    //});    
});

// Auth::routes();

Route::get('/migrate', function() {
    Artisan::call('migrate');
});

Route::get('/home', 'FrontendController@index')->name('home');
Route::get('/Marketing', 'FrontendController@marketing')->name('marketing');
Route::get('/Marketing/{subsection}', 'FrontendController@marketingSubsections');
Route::get('/Relaciones', 'FrontendController@relaciones')->name('relaciones');
Route::get('/Relaciones/{subsection}', 'FrontendController@relacionesSubsections');

Route::get('/Contact', function() {

    return view('frontend.contact');
})->name('contact');

Route::get('/Videos', function() {

    return view('frontend.videos');
});

Route::post('/Contact', 'ContactController@sendMessage');
?>


