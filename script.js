function displayWelcome() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('welcomeMessage').innerText = `Welcome, ${name}! know what you are.......!`;

        document.getElementById('welcomeSection').classList.remove('hidden');
    }
}

function redirectToWebsite() {
    window.location.href = 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://lesbify.com/&ved=2ahUKEwij2uGOmO-HAxV0zTgGHViQDNgQFnoECBsQAQ&usg=AOvVaw0jwiJgqVFRDJtmvh-wTdv7'; // Replace with the URL of the website you want to redirect to
}
