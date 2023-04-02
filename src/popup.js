export default function popup() {
    const modal = document.createElement('div');
    modal.className = 'modal'

    modal.innerHTML = 
    `
    <button type="button" id="close-btn"><i class="fa fa-close"></i></button>
    <h4>Welcome to Our page, please provide your personal account to log in.</h4>
    <form id="login-form">
        <input type="number" id="modal-input" placeholder="personal account" required />
        <button type="submit" class="modal-btn">Sign In</button>
    </form>
    `
    document.body.appendChild(modal);
}