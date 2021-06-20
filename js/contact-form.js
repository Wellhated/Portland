const text_contact = document.getElementById('contact-text');
const text_about = document.getElementById('about-text');

const img_contact = document.getElementById('contact-img');
const img_about = document.getElementById('about-img');

const check_about = document.getElementById('about-check');


const open_contact = () => {
    if (text_contact.className == 'menu') {
        if (text_about.className == 'menu active') {

            text_contact.className = 'menu active';
            text_about.className = 'menu';


            document.getElementById('div-overlay').className = 'div-overlay overlay-bg';
            document.getElementById('about-form').className = 'about-form none';

            text_about.className = 'menu btn-unfade';
            text_about.style.opacity = '100';

            img_about.className = 'imgs btn-unfade';
            img_about.style.opacity = '100';


            check_about.className = 'about-check onclick-btn-reverse';
            check_about.style.opacity = '0';

            setTimeout(() => {
                document.getElementById('contact-form').className = 'contact-form none';
            }, 1000);
    

            setTimeout(() => {
                text_about.className = 'menu';
                document.getElementById('home-section').className = 'home-section none';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 2000);

            text_contact.className = 'menu active btn-fade';
            text_contact.style.opacity = '0';

            img_contact.className = 'imgs active btn-fade';
            img_contact.style.opacity = '0';

            document.getElementById('contact-check').className = 'contact-check onclick-btn';
            document.getElementById('contact-check').style.opacity = '100';


            setTimeout(() => {
                document.getElementById('contact-form').className = 'contact-form contact-form-active';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 1000);
            
        } else {
            text_contact.className = 'menu active';

            document.getElementById('home-section').className = 'home-section home-close';
            document.getElementById('div-overlay').className = 'div-overlay overlay-bg';

            text_contact.className = 'menu active btn-fade';
            text_contact.style.opacity = '0';

            img_contact.className = 'imgs active btn-fade';
            img_contact.style.opacity = '0';


            document.getElementById('contact-check').className = 'contact-check onclick-btn';
            document.getElementById('contact-check').style.opacity = '100';

            setTimeout(() => {
                document.getElementById('home-section').className = 'home-section none';
            }, 1000);

            setTimeout(() => {
                document.getElementById('contact-form').className = 'contact-form contact-form-active';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 1000);

        }

        text_contact.className = 'menu active';
        img_contact.className = 'imgs';
        
            
    }

    else if (text_contact.className == 'menu active') {
        document.getElementById('div-overlay').className = 'div-overlay overlay-bg';
        text_contact.className = 'menu';

        text_contact.className = 'menu btn-unfade';
        text_contact.style.opacity = '100';

        img_contact.className = 'imgs btn-unfade';
        img_contact.style.opacity = '100';

        document.getElementById('contact-check').className = 'contact-check onclick-btn-reverse';
        document.getElementById('contact-check').style.opacity = '0';

        setTimeout(() => {
            document.getElementById('contact-form').className = 'contact-form none';
        }, 1000);

        setTimeout(() => {
            text_contact.className = 'menu';
            document.getElementById('home-section').className = 'home-section';
            document.getElementById('div-overlay').className = 'div-overlay';
        }, 2000);
    }
    
}