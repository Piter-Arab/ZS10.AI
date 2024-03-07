'''php
<?php

try {
    $pdo = new PDO(
'pgsql:host=postgres;port=5432;dbname=devel;user=devel;password=devel'
);
    $pdo->setAttribute(PDO
::ATTR_ERRMODE, 
PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

if ($_POST) {
    $make = $_POST['make'];
    $year = $_POST['year'];

    $statement = $pdo->prepare('INSERT INTO cars (make, year) VALUES (:make, :year)');
    $statement->bindParam(':make', $make, PDO::PARAM_STR);
    $statement->bindParam(':year', $year, PDO::PARAM_INT);
    $statement->execute();

    header('Location: index.php');
}

$statement = $pdo->query('SELECT * FROM cars');
$cars = $statement->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php if ($cars) : ?>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Rok produkcji</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($cars as $car) : ?>
                    <tr>
                        <td><?php echo $car['id'] ?></td>
                        <td><?php echo $car['make'] ?></td>
                        <td><?php echo $car['year'] ?></td>
                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    <?php else : ?>
        Nie dodano samochodow
    <?php endif ?>

    <hr />
    <form action="index.php" method="post">
        <label for="make">Marka</label>
        <input type="text" name="make" id="make" required>
        <label for="year">Rok produkcji</label>
        <input type="number" name="year" id="year" required>
        <button type="submit">Dodaj</button>
</body>
'''