<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Signup Page</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <form class="login-form">
                <h2>Login</h2>
                <div class="form-group">
                    <label for="login-username">Username:</label>
                    <input type="text" id="login-username" name="login-username" required>
                </div>
                <div class="form-group">
                    <label for="login-password">Password:</label>
                    <input type="password" id="login-password" name="login-password" required>
                </div>
                <button type="submit" class="login-button">Login</button>
            </form>
        </div>
        <div class="form-container">
            <form class="signup-form">
                <h2>Signup</h2>
                <div class="form-group">
                    <label for="signup-username">Username:</label>
                    <input type="text" id="signup-username" name="signup-username" required>
                </div>
                <div class="form-group">
                    <label for="signup-email">Email:</label>
                    <input type="email" id="signup-email" name="signup-email" required>
                </div>
                <div class="form-group">
                    <label for="signup-password">Password:</label>
                    <input type="password" id="signup-password" name="signup-password" required>
                </div>
                <button type="submit" class="signup-button">Signup</button>
            </form>
        </div>
    </div>
</body>
</html>
