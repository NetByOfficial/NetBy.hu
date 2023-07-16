

    function mouseEnter_profilkepszerkesztes() {
        document.querySelector(".BTN_profilkepszerkesztese").style.display = 'block';

    }

    function mouseLeave_profilkepszerkesztes() {
        document.querySelector(".BTN_profilkepszerkesztese").style.display = 'none';


    }

    function uploadimg() {
        const input = document.getElementById('file');
        const files = input.files;
        const profil_img = document.getElementById('profil_kep');
      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileType = file.type;
      
          if (fileType !== 'image/png' && fileType !== 'image/jpeg') {
            alert('A fájl nem megfelelő típusú!');
            return;
          }
      
          const reader = new FileReader();
          reader.onload = function() {
            // elmentjük a képet a localStorage-ba
            localStorage.setItem('profil_kep', reader.result);
      
            // beállítjuk a kép forrásának
            profil_img.src = reader.result;
          }
          reader.readAsDataURL(file);
        }
      
        alert('A kép módosítva!');
      }
      
      window.onload = function() {
        // betöltjük a képet a localStorage-ból, ha van
        const profil_img = document.getElementById('profil_kep');
        const savedProfilImg = localStorage.getItem('profil_kep');
        if (savedProfilImg) {
          profil_img.src = savedProfilImg;
        }
      }
      
    
      
