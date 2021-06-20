
// Open/Close Form Animation
const open_form = () => {
    document.getElementById('notify-form').className = 'notify-form form-open-animation';
}
const close_form = () => {
    document.getElementById('notify-form').setAttribute('class', 'notify-form form-close-animation');
    setTimeout(() => {
        document.getElementById('notify-form').setAttribute('class', 'notify-form none');
    }, 1000);
}