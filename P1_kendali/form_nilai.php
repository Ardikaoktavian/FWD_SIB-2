<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Penilaian Ujian</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #333;
        }

        .container {
            background-color: #fff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            width: 90%;
            max-width: 400px;
            transition: transform 0.3s ease;
        }

        .container:hover {
            transform: scale(1.02);
        }

        h2 {
            text-align: center;
            color: #444;
        }

        label {
            font-weight: bold;
            display: block;
            margin-top: 15px;
        }

        input[type="text"],
        input[type="email"],
        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 6px;
            outline: none;
            transition: border 0.3s ease;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="number"]:focus {
            border-color: #2575fc;
        }

        input[type="submit"] {
            width: 100%;
            margin-top: 20px;
            padding: 12px;
            background-color: #2575fc;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #1a5edb;
        }

        .hasil {
            margin-top: 30px;
            padding: 20px;
            background-color: #e3f2fd;
            border-left: 6px solid #2196f3;
            border-radius: 8px;
            text-align: center;
            width: 90%;
            max-width: 400px;
            animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Form Penilaian Ujian</h2>
        <form method="POST" action="">
            <label for="nama">Nama</label>
            <input type="text" name="nama" id="nama" required>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" required>

            <label for="nilai">Nilai Ujian</label>
            <input type="number" name="nilai" id="nilai" required>

            <input type="submit" value="Kirim">
        </form>
    </div>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = (int) $_POST['nilai'];

        $status = ($nilai > 70) ? "Lulus" : "Remedial";

        echo "<div class='hasil'>";
        echo "<h3>Hasil Penilaian</h3>";
        echo "Nama: <strong>$nama</strong><br>";
        echo "Email: <strong>$email</strong><br>";
        echo "Nilai Ujian: <strong>$nilai</strong><br>";
        echo "<p style='font-size: 18px; color: " . ($status === "Lulus" ? "green" : "red") . ";'><strong>Status: $status</strong></p>";
        echo "</div>";
    }
    ?>

</body>
</html>
