
<p align="center">
 
</p>
<p align="center">
 <a href="https://tailwindcss.com/docs/" target="blank">
  <img src="./public/wind2.png" alt="logo" />
<!--     <img width="150" src="./public/wind.png" alt="logo" /> -->
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
import { BsSunFill } from "react-icons/bs" -> bs means Bs
```

# Install React Spring ➡ text loading animation
```bash
npm i react-spring --save
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

# Passing Value Directly
prop-[...value]

# Width Classes
w-[100%]
# Height Classes
h-screen

# Padding Classes
pl, pr, pt, pb
px-n ➡ pl+pr
py-n ➡ pt+pb

# Margin Classes
- ml, mr, mt, mb
- mx-n ➡ ml+mr
- my-n ➡ mt+mb
- ml-auto
  
# Border 
rounded-n

# Color Classes 
bg-{color}-n

# Hover Classes
hover:{class-property}

# Overflow Classes
overflow-y-auto
overflow-x-hidden

# Transition Classes
transition-all duration-300

⚡️Linear gradients--
2 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-n to-{color}-n
3 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-n via-{color}-n to-{color}-n

# Responsive Classes 

# Flex Classes
- flex | flex-(row|col)
- align-items ➡ items-(start|end|center|baseline|stretch)
- justify-content ➡ justify-(start|end|center|between|around|evenly)

# Can giua chieu ngang
text-center

# @apply in index.css


