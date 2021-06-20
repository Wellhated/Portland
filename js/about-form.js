const contact_text = document.getElementById('contact-text');
const about_text = document.getElementById('about-text');

const contact_img = document.getElementById('contact-img');
const about_img = document.getElementById('about-img');

const open_about = () => {
    if (about_text.className == 'menu') {
        if (contact_text.className == 'menu active') {

            about_text.className = 'menu active';
            contact_text.className = 'menu';

            document.getElementById('div-overlay').className = 'div-overlay overlay-bg';
            document.getElementById('contact-form').className = 'contact-form none';

            contact_text.className = 'menu btn-unfade';
            contact_text.style.opacity = '100';

            contact_img.className = 'imgs btn-unfade';
            contact_img.style.opacity = '100';

            
            document.getElementById('contact-check').className = 'contact-check onclick-btn-reverse';
            document.getElementById('contact-check').style.opacity = '0';
            
            setTimeout(() => {
                document.getElementById('about-form').className = 'about-form none';
            }, 1000);
    
            setTimeout(() => {
                contact_text.className = 'menu';
                document.getElementById('home-section').className = 'home-section none';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 2000);

            about_text.className = 'menu active btn-fade';
            about_text.style.opacity = '0';

            about_img.className = 'imgs active btn-fade';
            about_img.style.opacity = '0';

            document.getElementById('about-check').className = 'about-check onclick-btn';
            document.getElementById('about-check').style.opacity = '100';

            setTimeout(() => {
                document.getElementById('about-form').className = 'about-form about-form-active';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 1000);

        } else {
            about_text.className = 'menu active';

            document.getElementById('home-section').className = 'home-section home-close';
            document.getElementById('div-overlay').className = 'div-overlay overlay-bg';

            about_text.className = 'menu active btn-fade';
            about_text.style.opacity = '0';

            about_img.className = 'imgs active btn-fade';
            about_img.style.opacity = '0';

            document.getElementById('about-check').className = 'about-check onclick-btn';
            document.getElementById('about-check').style.opacity = '100';

            setTimeout(() => {
                document.getElementById('home-section').className = 'home-section none';
            }, 1000);

            setTimeout(() => {
                document.getElementById('about-form').className = 'about-form about-form-active';
                document.getElementById('div-overlay').className = 'div-overlay';
            }, 1000);
        }
        about_text.className = 'menu active';
        about_img.className = 'imgs';

    }

    else if (about_text.className == 'menu active') {
        document.getElementById('div-overlay').className = 'div-overlay overlay-bg';
        about_text.className = 'menu';

        about_text.className = 'menu btn-unfade';
        about_text.style.opacity = '100';
        
        about_img.className = 'imgs btn-unfade';
        about_img.style.opacity = '100';

        document.getElementById('about-check').className = 'about-check onclick-btn-reverse';
        document.getElementById('about-check').style.opacity = '0';

        
        setTimeout(() => {
            document.getElementById('about-form').className = 'about-form none';
        }, 1000);

        setTimeout(() => {
            about_text.className = 'menu';
            document.getElementById('home-section').className = 'home-section';
            document.getElementById('div-overlay').className = 'div-overlay';
        }, 2000);
    }
}