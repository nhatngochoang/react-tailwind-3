
<p align="center">
 
</p>
<p align="center">
 <a href="https://tailwindcss.com/docs/" target="blank">
  <img src="./public/wind2.png" alt="logo" />
<!--     <img width="150" src="./public/wind.png" alt="logo" /> -->
  </a>
</p>

# Landing Page 2 Mode
<p align="center">
 <a href="https://react-tailwind-3-xi.vercel.app/landingPage" target="blank">
  <img width="800" src="./public/landingpage.gif" alt="landing page demo" />
 </a>
 
<!--     <img width="150" src="./public/wind.png" alt="logo" /> -->

</p>

# Landing Page Responsive
<p align="center">
 <a href="https://react-tailwind-3-xi.vercel.app/landingPage2" target="blank">
  <img width="800" src="./public/landingpage2.gif" alt="landing page 2 demo" />
 </a>
 <a href="https://www.figma.com/file/FynW2GcJFYna570UxmQWP3/Food-delivery-app-Ui-kit-(Community)?node-id=513%3A22" target="blank">
Link Figma!!!
 </a>
 
<!--     <img width="150" src="./public/wind.png" alt="logo" /> -->

</p>
 
 # Spotify
<p align="center">
 <a href="https://react-tailwind-3-xi.vercel.app/spotify" target="blank">
  <img src="./public/spotify.png" alt="spotify demo" />
  </a>
</p>

# Install Tailwind <span><img src="./public/favicon-16x16.png" alt="Tailwind CSS 3" title="Tailwind CSS 3" height="25" /></span>
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
# Install React Icons
```bash
npm i react-icons --save
import { BsSunFill } from "react-icons/bs" ➡ bs means Bs
```

# Install React Spring ➡ text loading animation
```bash
npm i react-spring --save
```

# Install React Font Awesome
```bash
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

# Install MP3 Player
```bash
npm i react-h5-audio-player
```


# Install OnScroll
```bash
npm i react-intersection-observer --save
```


# Copy into 'tailwind.config.js'
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


# Copy into 'index.css'
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
# Build fix
```bash
 "build": "CI=false && react-scripts build",
```

# Passing Value Directly
prop-[...value]

# Width, Height 
w-[100%] === w-full | container
w-[60%] === w-3/5
h-screen

min-w-[n%]
max-w-{n}

# Padding 
pl, pr, pt, pb
px-{n} ➡ pl+pr
py-{n} ➡ pt+pb

# Margin 
- ml, mr, mt, mb
- mx-{n} ➡ ml+mr
- my-{n} ➡ mt+mb
- ml-auto
  
# Border 
rounded-{n} / md
border-b
border-primary

# Shadow
shadow-(md / lg)

# Color  
bg-{color}-{n}

# Text
## Can giua chieu ngang
text-(center / right / left
## font-weight
font-thin	    ➡ 100;
font-extralight ➡ 200;
font-light	    ➡ 300;
font-normal	    ➡ 400;
font-medium	    ➡ 500;
font-semibold   ➡ 600;
font-bold	    ➡ 700;
font-extrabold	 ➡ 800;
font-black	    ➡ 900;
## font-size
text-(xs / sm / base / lg / {2-9}xl)

# Hover 
hover:{class-property}

# Overflow 
overflow-y-auto
overflow-x-hidden
overflow-hidden

# Opacity
opacity-0

# Scale
scale-100

# Transition 
transition-all ease-out duration-300
transition-colors 

# Translate
translate-x-full

⚡️Linear gradients--
2 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-{n} to-{color}-{n}
3 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-{n} via-{color}-{n} to-{color}-{n}

# Responsive  
- sm: 640 grid-cols-2
- md: 768 grid-cols-3
- lg: 1024 grid-cols-4
- xl: 1280 grid-cols-5
- 2xl: 1536 grid-cols-6

sm:max-md:grid-cols-2
min-[400px]:grid-cols-2


# Flex 
- flex | flex-(row|col)
- align-items ➡ items-(start / end / center / baseline / stretch)
- justify-content ➡ justify-(start /end /center /between /around /evenly)


# Grid 
Cha: grid grid-cols-{n} grid-rows-{n} gap-{n} 
Con: col-span-{n}
# Position 
relative 
absolute  +  (top / bottom / left / right)-{n}
fixed
# Snap Scroll
- parent div ➡ snap-y snap-mandatory overflow-scroll h-screen
- child div ➡ snap-(start / center / end)


# Group and Peer
```html
  <div className="peer/1 group/1 grid place-items-center h-20 w-20 bg-blue">
        <div className="h-5 w-5 bg-black group-hover/1:bg-slate-300"></div>
        <div className="h-5 w-5 bg-black"></div>
      </div>
      <div className="h-20 w-20 bg-green-400 peer-hover/1:bg-orange-400"></div>
```
    

# Animation

animate-spin
animate-pulse
animate-bounce
animate-ping

