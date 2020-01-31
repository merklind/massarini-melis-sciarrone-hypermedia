function logout() {
    $.ajax({
    method: 'GET',
    url: '/user/logout',
    success:
    window.location.href = '/'
    })
}