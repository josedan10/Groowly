<!DOCTYPE html>
<html lang="en">
<head>
    <?php $__env->startSection('page', 'Login | '); ?>
    <?php echo $__env->make('includes/head', ['page' => 'admin'], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>
    <main>
        <section class="flex-center login">
            <form class="form-horizontal" action="<?php echo e(url('/admin/login')); ?>" method="POST">
                <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
                <div class="flex-center logo">
                    <img src="<?php echo e(asset('img/logo.svg')); ?>" alt="">
                </div>
                <div class="divider"></div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="username">Username</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input class="form-input" type="text" id="username" name="username" placeholder="Username">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-3 col-sm-12">
                        <label class="form-label" for="password">Password</label>
                    </div>
                    <div class="col-9 col-sm-12">
                        <input class="form-input" type="password" name="password" id="password" placeholder="********">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-4 col-mx-auto col-sm-12">
                        <input class="form-input c-hand btn btn-primary" type="submit" value="Login">
                    </div>
                </div>
                <!-- form structure -->
            </form>
        </section>
    </main>

    <script>
        function loginValidation (event) {
            // console.log(event);
            let username = document.getElementById('username');
            let password = document.getElementById('password');

            if (username.innerHTML === null || username.innerHTML == "") {
                // console.log('Usuario invalido');
                event.preventDefault();
                displayPrompt('username', 'Debe ingresar un usuario');
                // return false;
            }

            if (password.innerHTML === null || password.innerHTML == "") {
                // console.log('Contraseña inválida');  
                event.preventDefault();
                displayPrompt('password', 'Debe ingresar una contraseña');
                // return false;
            }

            // document.getElementById('username-prompt').classList.remove('show');
            // document.getElementById('password-prompt').classList.remove('show');
        }

        function displayPrompt (target, msg) {
            // let msgNode = document.createTextNode(msg);

            switch (target) {
                case 'username':
                    // console.log(document.getElementById('username-prompt'));
                    document.getElementById('username-prompt').innerHTML = msg;
                    document.getElementById('username-prompt').classList.add('show');
                    break;
                
                default:
                    // console.log(document.getElementById('password-prompt'));
                    document.getElementById('password-prompt').innerHTML = msg;
                    document.getElementById('password-prompt').classList.add('show');
                    break;
            }
        }

        // document.querySelector('#loginForm').addEventListener('submit', loginValidation, false);
        // console.log(document.querySelector('#loginForm').onsubmit);
    </script>
</body>