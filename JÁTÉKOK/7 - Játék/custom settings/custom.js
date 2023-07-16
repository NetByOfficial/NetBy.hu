const colorPicker = document.getElementById("color-picker");
const ceres1 = document.getElementById("cell-0");
const ceres2 = document.getElementById("cell-1");
const ceres3 = document.getElementById("cell-2");
const ceres4 = document.getElementById("cell-3");
const ceres5 = document.getElementById("cell-4");
const ceres6 = document.getElementById("cell-5");
const ceres7 = document.getElementById("cell-6");
const ceres8 = document.getElementById("cell-7");
const ceres9 = document.getElementById("cell-8");
const ceres10 = document.getElementById("cell-9");
const ceres11 = document.getElementById("cell-10");
const ceres12 = document.getElementById("cell-11");
const ceres13 = document.getElementById("cell-12");
const ceres14 = document.getElementById("cell-13");
const ceres15 = document.getElementById("cell-14");
const ceres16 = document.getElementById("cell-15");

colorPicker.addEventListener("input", () => {
  ceres1.style.backgroundColor = colorPicker.value;
  ceres2.style.backgroundColor = colorPicker.value;
  ceres3.style.backgroundColor = colorPicker.value;
  ceres4.style.backgroundColor = colorPicker.value;
  ceres5.style.backgroundColor = colorPicker.value;
  ceres6.style.backgroundColor = colorPicker.value;
  ceres7.style.backgroundColor = colorPicker.value;
  ceres8.style.backgroundColor = colorPicker.value;
  ceres9.style.backgroundColor = colorPicker.value;
  ceres10.style.backgroundColor = colorPicker.value;
  ceres11.style.backgroundColor = colorPicker.value;
  ceres12.style.backgroundColor = colorPicker.value;
  ceres13.style.backgroundColor = colorPicker.value;
  ceres14.style.backgroundColor = colorPicker.value;
  ceres15.style.backgroundColor = colorPicker.value;
  ceres16.style.backgroundColor = colorPicker.value;
  adatmentes_color();
});

      function adatmentes_color() {
        localStorage.setItem("savedColor", colorPicker);
      }

      // adatok visszatöltése a localStorage-ból

        const savedColor = localStorage.getItem("savedColor");
        if (savedColor) {
            colorPicker = document.getElementById("color-picker");;
          colorvalue.value = savedColor;
          // az alábbi sor hozzáadja a beállított színt a háttérszínhez is
          document.body.style.backgroundColor = savedColor;
        }

