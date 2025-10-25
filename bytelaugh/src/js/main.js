<div class="auth-container">
  <!-- Login Form -->
  <div id="login-box" class="form-box">
    <h1>Welcome Back</h1>
    <p>Login to continue to Bytelaugh.</p>
    <form id="login-form">
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <div class="switch">
      New here? <a href="#" id="switch-to-signup">Sign Up</a>
    </div>
  </div>

  <!-- Sign Up Form -->
  <div id="signup-box" class="form-box hidden">
    <h1>Create Account</h1>
    <p>Join Bytelaugh today!</p>
    <form id="signup-form">
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <div class="switch">
      Already have an account? <a href="#" id="switch-to-login">Login</a>
    </div>
  </div>

  <p id="message" class="message"></p>
</div>

<div id="transition" class="page-transition active"></div>

<script src="../src/js/main.js"></script>
