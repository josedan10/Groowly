<!DOCTYPE html>
<html lang="en">
<head>
   @section('page', 'Admin | ')
   @include('includes/head', ['page' => 'admin'])
</head>
<body>
    <section class="login grid-container">
        <div class="logo flex-center">
            <img src="/img/logo.svg" alt="logo">
        </div>
        <div class="form flex-center">
            <input type="text" name="user" id="user" placeholder="user"/>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </div>
    </section>
</body>
</html>