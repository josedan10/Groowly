<!DOCTYPE html>
<html lang="en">
<head>
    <?php $__env->startSection('page', 'Services | '); ?>
    <?php echo $__env->make('includes/head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>

    <main id="main"></main>
    <div id="app"></div>
    <script src="<?php echo e(asset('js/main.min.js')); ?>"></script>
    <script src="<?php echo e(asset('js/services.min.js')); ?>"></script>
    
</body>
</html>