<!DOCTYPE html>
<html lang="en">
<head>
    <?php echo $__env->make('includes/head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>

    <main id="main"></main>
    <div id="home"></div>
    <script src="<?php echo e(asset('js/index.min.js')); ?>"></script>
    
</body>
</html>