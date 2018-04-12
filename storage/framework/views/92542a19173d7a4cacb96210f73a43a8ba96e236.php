<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<title><?php echo $__env->yieldContent('page', 'Home | '); ?>Groowly</title>

<link rel="icon" href="<?php echo e('favicon.ico'); ?>" type="image/x-icon" />	
<link rel="stylesheet" href="<?php echo e(asset('css/style.css')); ?>">
<link rel="stylesheet" href="<?php echo e(asset('css/animate.css')); ?>">


<?php if(isset($page)): ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/'.$page.'.css')); ?>">
<?php else: ?>
    <link rel="stylesheet" href="<?php echo e(asset('css/custom.css')); ?>">
<?php endif; ?>

<script src="<?php echo e(asset('js/config.min.js')); ?>"></script>