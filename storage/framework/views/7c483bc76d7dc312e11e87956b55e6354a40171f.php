<h1>Nuevo mensaje</h1>
<div>
    <p>
        Mensaje de <b><?php echo e($user['name']); ?></b>. <br>
        <b>Dirección:</b> <?php echo e($user['address']); ?> <br>
        <b>Teléfono:</b> <?php echo e($user['phone']); ?> <br>
    </p>
    
    <p><?php echo e($user['comment']); ?></p>
</div>