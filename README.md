### Tailwind CSS 3
<p align="center">
![Tailwind CSS 3](./public/wind.png "Tailwind CSS 3")
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

# Height Classes
h-screen

# Padding Classes
pl, pr, pt, pb
px-n => pl+pr
py-n => pt+pb

# Margin Classes
- ml, mr, mt, mb
- mx-n => ml+mr
- my-n => mt+mb
- ml-auto

# Color Classes 
bg-{color}-n

⚡️Linear gradients--
2 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-n to-{color}-n
3 colors: 
- bg-gradient-to-{direction: r,l,t,b} from-{color}-n via-{color}-n to-{color}-n

# Responsive Classes 

# Flex Classes
- flex -
- align-items --> items-(start|end|center|baseline|stretch)
- justify-content --> justify-(start|end|center|between|around|evenly)

# Can giua chieu ngang
text-center
