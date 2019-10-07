import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// // import Header from './Header.js';
// import Footer from './Footer';
// import Technologies from './Technologies';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='http://5nak.com/img/epic-1.png'></img>
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Message</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">
        <div>
          {/* <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUWFhUYFhUXFRUXFhUWFxUXFRUYHSggGBolGxcVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHx8tLS0rLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xAA/EAABAwIDBQYEBAQEBwEAAAABAAIRAyEEEjEFBkFRYRMicYGRsTKhwfAHQtHhI1JykhQzYvEVU4KDorLSQ//EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACURAAICAgICAgIDAQAAAAAAAAABAhEDIRIxBEETIjJxI1GBYf/aAAwDAQACEQMRAD8A9LQhNWIEkskkAigJoCAaaEQgGEwsU0BmFlKwamUBlKaxTCAaEBCAEIQgBCE0AkJoQCTQhACEIQEQLJYhZIAQhNAJCCEIBppBZBAJCyRCAAmgJoAQhCAaEk0A0ICaASaRWuniGOMNcDHJQ2lommbUITUkCQmhAJCaEBDWSQCyAQAhMIKASEJoAhMITCAGiViagmJ8yLeqKjuHP24oDefqs+TJLlxidoQjxuRtLYQnhoIy+nTwTc2F0jO9PspKNGKE4RC6FBIAThMBAIJymogxEvI/KzU83cvJc5zUEXhByZvqUp+LyH6qvxmE/O0wW3HAHnPRZ1MQ4u4jyNvLgeQUgDMwjyWbLjUly9mjHNx16N9MyAeYlZrRgj3B0t6WW9a4u4pmaSptCQmsVYqNCUoQEdNCaASE0IBIThIBAZJoTAUA01pzN8/v3WVRw1mPBOu23hdbCzuyuD1k/Z3i7j+jGkJ0dfoJHnyUTHVHU3doDI0cOY5+It81FxOMyO0Lukkfqom0sQ+s6nSpgtDzJOsN4wdD6rh5EtWuzvihv/hf0a7XfCQbStqxwWDp02gNbJyxPPxWfZyYzQTaF1j5DpWtnF4VbroxlZKPjcJkd8RuBN78VqeC25JI68Pv6qkvJlF00WWBNWma9ubQ7GmSNTYHgOpUTYNdpp/EHHU/1G/yU7E1WPYWkAg2XFNYaFepB/huExBiY0krPPK5ZFL0d8cEsbj7LWntLtaxDAIZIkXbre48tFf0XHIT4Dw5rzbYQcasA5ZOkxaea9Nqu7OlzJsPPUrV3FnOaUWg2S6aYPV3upqh7JaRSbOt1MWjH+CMk/yYikVkkrlRJJoQGiEJhCgCQiEwgBJMpgIACySTUgE6Lgxt5y6cx0QlmDTJ0iD9FzmtWXg90Uu1cSxou2ZkALTsEH4nAg3yjkON1L2hQpuObWJcB5Kl2JtA1nVC3g4NkkEczoLQOGq8/Jkv/DfGNI7rB0CRJTpsAeOapaO9DBWFDM2Y4OEz/TMqwZXL60jQR8yuyUUotHD7NuyZiwHPA4haMVhhESJUatXNN5Lubv1HyXnW8e/BZicuYkNnusa55HOw1sCfBSqm3a2Kca3ouNp7UFJ5bqND8WqqsTjA/unThb1jS61UdoUcWM9F+ZwuQRBPQjUc1z28+LNIh7CWmYIGh8ZWaMPtRolJKNnT7E2G5j2uDp72bloQWjrNvVdqMLDg+q82sGTABiAZ9Vwm7u3C+mCbObBNxBAMiF0OAr1MU8X/AIerhFwR1myvDK74+yJxtcvR1OHHdHh93W0JAIXpLSPOYIhCFJAQhNCAjBCEKAMITCEAoTCAE4QBCYCcJgKQILGrTDgQeKzhOFDB5/tvEVKXaM46SbWPXgFVbsGqKdSg3/OeHltzxaT8RC6ffTZJqvolnxGoAQOIFz7K/wAJsVrOQflgHiDqvM+JxbiurPR+VSSk+z512TQrCsyjTaw1TWDxWgnEZ7BzXOJ+HUkEL6b2Hg3U6bQ8y8gFx6xw6Km2TsMDEGo6hTY6f8xrW5nnnIuusNRomSBGt9PFbI/yO36MsvoqXsp9vYYvY73GoI4rwvbew8TRrvdSdV74LS6m4hxDjJBgyQY00K+jHAOHAgrmNp7CDpbJaeD+i5yUsc+UfZeEozjxkeR7pbDq0XGs5r6TWM7uaA554S08Ln5KTtjY9WoC9+VwdcjKRBPRdTtPd/EUy0uf2jJmRpPCVINCW39Le2qo1KTtl7ilSPNMpoQGkgTABM2OoPTTVerbg0opFx1MeGnBcvvLu4S3tGyQ0iRa3IyBp+yv9zsVAEyBER4eC5pqOWLZd/bE0jtEIamvTPPEhCaASEQmgIsLKEwE4UAxRCyhEIAhMBACyhAEJgIhOEAoThOEQpBX4vFup1GECxBbPLion+Le59/5o1HhMqbjqWYiODhzBWmrSLbhvl+iyvc2aVXFEjbu1DhsHiMQwZ30qFR4HAua2b9OJ6L50xu/Vao0h9Wu9zpLjmDW5jyaF7zVqMFGtRqfDUzgzxa9uUj3Xzlt7YBoVnMBloPdOluE9fu2i0x0jPNe2eu/hVv92/Z4bI8FrCarnOBbIcA0s43kyDpAXq7aweLr5u/D6MO4vzDM6ATxgGwHmvZKO89GjQNetUDWNHm4gfC1v5ndFD2Sv7M9vb1swtRtF7Qc2ggSRzi9lRVNoNfiCaMdna1iAeP9IXm21NtO2li21wbT3GwAWNuIcBcGDzdJ5C66XAEtOWYjXW6pItE9CfWb2ZB0IjnB5GFz2z8zagaPh6RA9NEjjw+nkBGbmWyI/wBUfYWezMMWmRTaB/Mx8j0iVg8haNmB9ndYQy0LdCibNfLefVTIXo43cUzFNVJmKFlCUK5QSFlCEBoAWUIAThQDGEwFlCYCAUIAWUJgIBQiE00AoRCySeYBKAxyg/d1rr4N1y0m/MzHgFSbEx57ep2zokywWiNNYErrO0ESuVK7Ots8/wB56T2U3ZnA5rN5g6yPIH1XhO9dCsXS5xc28eH1Xuf4iV5qNpjQMnzcTP8A6tXBbzCjWLMK80WOyZqVSo51NolwDqTnNHGcwzQBe+gKLNcsS+JSZ5bSxD2fC4g9CQr/AGtgqwaxj6r3PIDspz9pBDT/ABGu/wAvKZtqbHTTZgNhsw9VlXE18LkacxZ2grGpALmgU6ZNiWht4+K69GwOEpVaB2hVac1RzquR/wDzHaU2QBmphrWu01LjxtdulZjSt0cpu9svsG53D+I+J6Dqujw+aNNeM6KBQq5yTxnzVzgcNJE+v6ri3ZeqLDZlAtu9j/6gbfKFdigbZQBxvE+mh91Go02sHxFvSQFmXw0vzeXd06dfFZ83VHbET6G3GYfu1BAPFsnxsFf7PxrazQ9klp0PA+HNeR47HF5yBrngmwcIIOndP35r0rdWjUFIZ4FhaxOnEgn3K14W+NMzZPy0XZCIWZCRC6lDFCyhCA0gLIBOE4QgSaaIQChOE0BAJOEwmAgEFXbQxJFtLjjHurNcvtrFZ6jmNElgmxiPEqk3SstFW6JOLwdKu2DLXC4dmiPAKxwD3Boa6JH3wXNYbH9neoWi+me6vsLiA9vdkdP2IVE7L1Ry+/GBcagq/kygH/SRMT0Mi/RVOI2Jha2GYK1Mue4ucCJzi8A2uO60G8Beg4hmUTMyuU2qS50NB1EjgeMEDWeqq9Gl53LGoP0cEdzsLh3BzmOqHUCo8ETNpDQPdLamOq13NzGGsEMY3utYJnutGnjquh263V58vvxVGWXk8HEHpBIPlxVebfZz4pdGeCw5N4vz5hX+EGWP3PyUfZ9FswJBOnG/JT6FVkwS0HwPr0UlRYis0giRfgZH6e65vb+OILabXSQJsMwHK+q6mvh2us5mf5/RcXiaXaYvutAa2BbWOPH6hc5K3sspUjfs+nUqEQzIeYt8wvW92KDmUmhzi4xxn6iVxeHqMZDA4NdxaefQkAru9giaYJAnnJPvouuN/ajnNastEQmhaDkKEJwhAaAskk0AIQEIBlEoQhAwVkkFC21talhKL69Z2VjBJOpPIAcSTZAYbwbWZhaDqzzpYDm4/CFRbu4Z1WmXvIDnkkkdeF15jit8am1sUztQKWHpuLqdMzANwHVXcXRy0nzXrW612nL8I0IBAPhOo6rPme0jviWmxbHwnZ1HU3BoOoMNDiP6tT5K4/wDWnNlE8xM+akCNbSOK2dsCLAnwUxaoiV2VOIcXWGqi18EQIECxk8SVa1qLmgkw2eAv/uVDfAF/MwjCOL3nw4aBAsBHQW+/Vc81l7dZ631++i7bHFjuuvHWB+/zVHU2cHy5hgk3abaWI8bLjuzraojYYDqP26ahS2YdjuRJ4zEn6FZ1AQIiDA70Xtr53+a2tgCzm+cX6qyZVmdPDnT91EwOyGNe50ySb8xy8B5ea3YrEuZoL85sVto1X1Q0jVuuWQ4W4j78OKMhETE7OeHtdTdLcwljuHVoOnkV3+yAA0Ae8rja1J2ZsAkBwm0a8r38l2uzGwAIAtwVYS/kRaS+jJyEIW0zAhCEBHTWMolAZhCQTlANZLCVz23t98HhAQ+p2jx/wDnThz/AAJkNb5kIC+xmKZSY6rUcGMYC5ziYDQNSSvmz8Rt+Ku0axDSWYZjj2bLieHaP5uPLgPNS9+t98TtE9nHZYcGRSaScxBs6o62YjgNB11XEYqlCmiLLzdA1DVApvLSbAgd4eBgf+wX0butQ7OlDi4m2YuMuJ5lfPv4e1HduA0tBNsxBNuQAX0NgqmVjQZsJ4XWTO9o0YlouqZnT9lhUlt9fksWVhAMfO6zkESfoFZdEPsi1nl1jpyH1Kh7TwhItyk/QeJ5Kc6jAsBJPjHVbweBF/u6A4tmy3SS6xsfSwHhooxwLg/zJ+UH6rs302mTqBYdTzVPtOlMtHxO/wDEfcfNQ46JTKOs3KeZi3GOHoq7FUqk5mgQdRyPMdV0v+Hl2UH8oIJ/K4C48NPQqPhaYcHB4yuBuLAiOMHUKKBz+GokuAdOhieQ1v0VvsujnqyyzgIkaO/qGk+/RaMa4McA0k3M29DorTd+jkJc2Z5fp6KKFlw3BCAb+1+oVrh6cBamOJAk8JUrkrRguaZDk+NAhCS0nEaEkICKhac6MxUA3grXi8W2k0veYASD1xW+eNFSoKJJytuQCW3OkmFEpJKyUrdHPb571YnEB1OiC2nfTMJH+o8V5hXqkGDK9WZsZzxk7TLPMZuvSVzW825hZ3WvNQxJhoaOP3quEPJi3R2ngkkcWDIn24quxzlMDHNcWkaWWjFMJ4StV2jNVM6LcMtZXpuNp5wTr+VpHv8Aqvdxi+60iwiQNTHNfPW5o/jSY5km8D6+C922NUzNBIFxA5+Jm/ksmdGrCy+2fjGuAk3PW6t6cG8THP8ARce7DGmQ5pgam5A84VtgNqlwgxPtz81TFO9M6ZYe0X4qA3AJWLmEj3VRT2tDuB6Ty4lZVdustAM/tou1o40ze9sWH3e6gEd55OsWUmntGkfzD/eTdasof8LhaD8k0DS+AdeXn9281DrEF0WzcjxHCD99ea3YkNAMn74KrrVQdSCR8M8QVVyFGTMN2j4Ig8OatsFhY1MciLeqqBVAuXfqrfZJzauJ4z06ouwy2pSABxmT4cwVKC1UNJ4lZSusF7KS/ozlKVhKJXQobJQtcpICHKMyyhEKAKVwOK2U6pXfWqOlpeQ1pEA8Bpc+C76oYBPRc/hKweXC8gny5ws3kt8aNHjpXZUY6i4QGTPCx9wFEo4yrOR7ZB8BwnUX4H7K6VwJNoA+4j9Vsds0O4aa8DJ+KOZj2C81xd6PQUlWzx7efYRZVc4jK25BmdeLR159VzFejYiI18T6r3jeXYpqMaJLsl+p1t7LyraGzzLgGm3hqNdPNengyapnn5sftHL7Jq9k/NmAg8z7C5Pgvctz8X2zGu0EWbaecujQwRbgSfFeJYzAEEkD6eq9T/DR5aGBxkuEBvJvEkcJI+XNXyqznjdM7XFfF7A3E8yFCyDMXB0xE34CTHSSfmVO2kCySRI4cvNV+Hl5vEfM/qYlYGmmb000a3nI0t4nj4ysTX71+dj9+Ck16ByQRw16wuer4nK6Od1oXRnfZdEg9Pv79FuwteJjXkqujiSVOowRPK6gg2YrEiDr0n6qnLrzK342rEklVNavE+E+aAlYnFQLa/f1VnsHa7nRSAguOVx8rGDzvbp6cpTJNz9zwXVbnYHtKrTBgEGYsSOCb9FtLs75jMoAmYGvNZBbK+pWuFsiqVGSTt2EIhACasQKEk4QhBEQFozLNnioJNjoi6qaWDDc2XVxkmflPAeHVWGKdA5qsOOveTE2b92WDy8lNRNnjQ02SxhCeSl0KJA4zrH6/JZYLF0yJILR1Bj+7RTs7CJEH74KmOCey05taoqdtVQyi53EDOfAa38iuO29soRDRAN+E2FgTy08yuv2wGvZUbEgtInnYz7KBi6B7QNJ+I/UTHzXVqtopF+meY47d9zhlAPH0GpPorHcrAupVQx3Aw3XgDc+Q+a7h2CEvkXP1zEfID1VVsrBNzte4wZEHy091dSb7IcUdo2iHgA/qttHZtJgs3y/3WeFAgAX++SlVafP9114p9nLk0VOOotIheWbwSysPP6L1HadLKLE6g3+9NF5zvPTa4TPeDrHpxHylc5ovFmnCYmIPA/JXNGuIIlcth69o6/fup+GrxbouZZkjG1ZMKprVczoGixxuILpy8THlp+i2bPwh4qSSZgcCXmAvVth4AUWAQBlb73K4jd6mO0aIm4XpZaGtA8l1xxOeSXo0FEIQu5wCEITlAJCaEBVii3+ZbBkHFc4GLYGtFyTPLT1KicuKstGNuidtStIhgHstG7oGacpkdVX4muWEkSepLQI6AEmFhsreGnTBGZuYzxbw4ROsT6LyW3LJykeioqONpHWYrHtptc8wGNknhbmqjZe8eDxJf2be+IBluUkcO8YkLmN4d4gxvB1N8NcOjjlJPS65Lbod3adEQ3ODla7K1wvxJANyDreFtilJWZHp0ezVmSLFpEQRP1XA78bzjCuY4OBcHRHnf5GfJc9sfeurhG9nVqjK98Mp5jUdTB1kASAeRt7LlvxCxLKr21A8l7gc7JBa2IAOlifopS3QvVnrm1t4GNZSc2+eowW1Ic6D5CFNqNa0AT+Qu/tcNfVeB0tu1AKTZzBl48DIHXU+gXaVd7nPpMqAuEMax0Qe8HtJseESruKKqTPY91RUe0PMZSJ/wBX7Lo7Kj3KxHaYWm+SZHHLP/jZW+IIF1f8Uc+2U+8VN+Ulgm3ReR7cz9pDrRePPVex4jHMFnEeEj9V5z+I9BrAyu34Scrj/KSJExpouMmmdkmkctRCsaFMuNlS4atmMBdzsHY7iRmIiy50TZEw+xJY8m1re/34KpwlRwcWngY9F320KbgxzG0s4Ij4mjhYieIPy9DyezaBbPaNhwJzCQTPG41Kuo0E+RbbBruZUa6OK9Kp1A5s8xK85wuYDMA1oEC5JcZ4gAX15rsdjVyYBJ04tt5XUwmrojJB1ZMDkWWOLpkGRp7KP2hWkzkuUSonao7XqgJcoUXteqEBzmRJzD9lbskckiApJRDfSnUT6FRKuyKLvio0/HI2fUBWpaEsqpxRbkzlMVuhh3AgNcAREB74j+kmFDw+5babcjKtUC9jkdAtYS3RdtkngsuwP8p+alKir2eZu/DZuYvFeq0kzZjLE6xy/dXGB3WZTEFzneLGfQLthgnHRrvZbG7LqHhHiQpByJ2JR/lb5tH6LTW3fpRZjfSPZdv/AMHfxcPmVmzYvNw/t/dAS9y67BQbTFnMsR7R0hWGK71RpBBAnMPKyq6ey2j8xB5gQfUGVjS2Q1pLhUqgkQf4jyOHBxMaKslZaLrZJ2hiaTX98w4MLtDpIGviNFyW8lFtfDYmjLRmZDeHeOaCPBwBV5W3dpukuq1zIg/xTyItaxub9VEp7k4MAAiq6L96vVPPXvX1PqqfHsssmqPGth4R7YPaeoefZhXomx9qgAB9UD/t1PfIF1tHdzCss2k35n3KlU9mUhpTYP8AoarcEV5FD/xyhxqT/wBFT/5VQ7F0HVXQ6ziDcFo0g6geK7oYZo4D0WJwzeQ9FLhfYUqejlqm2MMP4ZrMGawaHCYuZHhEx0U/D700KLQHV6WYwAHPAGYmB4A39OKuTg2fyN/tCBgaX/KZ/aFHBE/I2S9nbbo1mEtex0QCAQ6CfBRxK20mNFgAPBZKyVFGaVkAtiFJBgkt0hCAoWhSMPTBFwhCkGynRbOil08Oz+UJoQGYYABYarY4WTQoBolGYpIQkzYUApIQGZWMoQgBxSlCEANWLkIQAsZTQpIMwmEIUAaEIUgSCkhAOEkIQH//2Q=='></img> */}
        </div>
        <img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"></img></div>
      <div>ava+desc</div>
      <div>my posts
        <div>new post
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
        </div>
      </div>
      {/* auto import подключён, 
      то есть сверху не нужно вручную писать import,
      достаточно тут тег написать через auto import */}
      {/* <Technologies /> */}
      {/* <Header /> */}
      {/* <Technologies /> */}
      {/* <Footer /> */}
      {/* <Footer /> */}
    </div>
  );
}

// function App() {
//   // название функции APP - это значит, что у нас есть тег <App />
//   // который мы можем куда-нибудь вставить
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React_proj <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
