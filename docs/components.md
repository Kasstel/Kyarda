# Component Documentation

*Generated on 2026-10-05T12:20:39.893Z*

---

## App

**File:** `C:/Users/kasstel/dev/Kyarda/src/App.tsx`

**Export:** Named

### Hooks Used

- `useState` (line 28)
- `useEffect` (line 30)


---

## ArticlesSection

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/About/About.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 12)


---

## BlurText

**File:** `C:/Users/kasstel/dev/Kyarda/src/UI-features/BlurText/BlurText.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| text | `string` | ❌ | - | - |
| delay | `number` | ❌ | - | - |
| className | `string` | ❌ | - | - |
| animateBy | `"words" | "letters"` | ❌ | - | - |
| direction | `"top" | "bottom"` | ❌ | - | - |
| threshold | `number` | ❌ | - | - |
| rootMargin | `string` | ❌ | - | - |
| animationFrom | `Record<string, string | number>` | ❌ | - | - |
| animationTo | `Record<string, string | number>[]` | ❌ | - | - |
| easing | `(t: number) => number` | ❌ | - | - |
| onAnimationComplete | `() => void` | ❌ | - | - |
| stepDuration | `number` | ❌ | - | - |

### Hooks Used

- `useState` (line 48)
- `useRef` (line 49)
- `useEffect` (line 51)
- `useMemo` (line 66)
- `useMemo` (line 72)


---

## Cart

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Cart/Cart.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 8)
- `useCart` (line 9)


---

## CartPreview

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Cart/CartPreview.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 11)
- `useCart` (line 12)


---

## CartProvider

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Cart/Context/Context.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| children | `any` | ✅ | - | - |

### Hooks Used

- `useReducer` (line 19)


---

## CountUp

**File:** `C:/Users/kasstel/dev/Kyarda/src/UI-features/CountUp/CountUp.tsx`

**Export:** Default

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| to | `number` | ✅ | - | - |
| from | `number` | ❌ | - | - |
| direction | `"up" | "down"` | ❌ | - | - |
| delay | `number` | ❌ | - | - |
| duration | `number` | ❌ | - | - |
| className | `string` | ❌ | - | - |
| startWhen | `boolean` | ❌ | - | - |
| separator | `string` | ❌ | - | - |
| onStart | `() => void` | ❌ | - | - |
| onEnd | `() => void` | ❌ | - | - |

### Hooks Used

- `useRef` (line 29)
- `useMotionValue` (line 30)
- `useSpring` (line 35)
- `useInView` (line 40)
- `useEffect` (line 55)
- `useEffect` (line 61)
- `useEffect` (line 87)


---

## CurvedLoop

**File:** `C:/Users/kasstel/dev/Kyarda/src/UI-features/Questions/Question.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| marqueeText | `string` | ❌ | - | - |
| speed | `number` | ❌ | - | - |
| className | `string` | ❌ | - | - |
| curveAmount | `number` | ❌ | - | - |
| direction | `"left" | "right"` | ❌ | - | - |
| interactive | `boolean` | ❌ | - | - |

### Hooks Used

- `useMemo` (line 22)
- `useRef` (line 27)
- `useRef` (line 28)
- `useRef` (line 29)
- `useState` (line 30)
- `useState` (line 31)
- `useId` (line 32)
- `useRef` (line 36)
- `useRef` (line 37)
- `useRef` (line 38)
- `useRef` (line 39)
- `useEffect` (line 49)
- `useEffect` (line 53)
- `useEffect` (line 62)


---

## Experience

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Experience/Experience.tsx`

**Export:** Default


---

## fieldProps

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Order/Order.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| toString | `() => string` | ✅ | - | Returns a string representation of a string. |
| charAt | `(pos: number) => string` | ✅ | - | Returns the character at the specified index. |
| charCodeAt | `(index: number) => number` | ✅ | - | Returns the Unicode value of the character at the specified location. |
| concat | `(...strings: string[]) => string` | ✅ | - | Returns a string that contains the concatenation of two or more strings. |
| indexOf | `(searchString: string, position?: number) => number` | ✅ | - | Returns the position of the first occurrence of a substring. |
| lastIndexOf | `(searchString: string, position?: number) => number` | ✅ | - | Returns the last occurrence of a substring in the string. |
| localeCompare | `{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }` | ✅ | - | Determines whether two strings are equivalent in the current locale.


Determines whether two strings are equivalent in the current or specified locale. |
| match | `(regexp: string | RegExp) => RegExpMatchArray` | ✅ | - | Matches a string with a regular expression, and returns an array containing the results of that search. |
| replace | `{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }` | ✅ | - | Replaces text in a string, using a regular expression or search string. |
| search | `(regexp: string | RegExp) => number` | ✅ | - | Finds the first substring match in a regular expression search. |
| slice | `(start?: number, end?: number) => string` | ✅ | - | Returns a section of a string. |
| split | `(separator: string | RegExp, limit?: number) => string[]` | ✅ | - | Split a string into substrings using the specified separator and return them as an array. |
| substring | `(start: number, end?: number) => string` | ✅ | - | Returns the substring at the specified location within a String object. |
| toLowerCase | `() => string` | ✅ | - | Converts all the alphabetic characters in a string to lowercase. |
| toLocaleLowerCase | `(locales?: string | string[]) => string` | ✅ | - | Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. |
| toUpperCase | `() => string` | ✅ | - | Converts all the alphabetic characters in a string to uppercase. |
| toLocaleUpperCase | `(locales?: string | string[]) => string` | ✅ | - | Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. |
| trim | `() => string` | ✅ | - | Removes the leading and trailing white space and line terminator characters from a string. |
| length | `number` | ✅ | - | Returns the length of a String object. |
| substr | `(from: number, length?: number) => string` | ✅ | - | Gets a substring beginning at the specified location and having the specified length. |
| valueOf | `() => string` | ✅ | - | Returns the primitive value of the specified object. |


---

## Footer

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Footer/Footer.tsx`

**Export:** Default


---

## Geo

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Geo/Geo.tsx`

**Export:** Default


---

## Header

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Header/Header.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 8)


---

## Menu

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Menu/Menu.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 10)
- `useCart` (line 15)
- `useState` (line 18)
- `useRef` (line 19)
- `useEffect` (line 21)


---

## Mission

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Mission/Mission.tsx`

**Export:** Default


---

## Modal

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Modal/Modal.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 10)
- `useEffect` (line 12)


---

## ModalProvider

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/ModalContext/ModalContext.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| children | `any` | ✅ | - | - |

### Hooks Used

- `useState` (line 17)
- `useState` (line 18)


---

## OrderForm

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Order/Order.tsx`

**Export:** Named

### Hooks Used

- `useCart` (line 64)
- `useModal` (line 65)
- `useState` (line 67)
- `useState` (line 68)
- `useState` (line 69)
- `useState` (line 70)


---

## OrderSuccess

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Order/OrderSuccess.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 5)


---

## ProductCard

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/ProductCard/ProductCard.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | `string` | ✅ | - | - |
| image | `string` | ✅ | - | - |
| salePrice | `number` | ❌ | - | - |
| firstPrice | `number` | ✅ | - | - |
| typeBoard | `typeBoard` | ✅ | - | - |
| thickness | `string` | ✅ | - | - |
| width | `string` | ✅ | - | - |
| description | `string` | ✅ | - | - |
| priceDescription | `string` | ❌ | - | - |
| length | `string` | ❌ | - | - |

### Hooks Used

- `useCart` (line 34)


---

## ProductCardPreview

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/ProductCard/ProductCardPreview.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 10)


---

## Products

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Products/Products.tsx`

**Export:** Default


---

## renderError

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Order/Order.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| toString | `() => string` | ✅ | - | Returns a string representation of a string. |
| charAt | `(pos: number) => string` | ✅ | - | Returns the character at the specified index. |
| charCodeAt | `(index: number) => number` | ✅ | - | Returns the Unicode value of the character at the specified location. |
| concat | `(...strings: string[]) => string` | ✅ | - | Returns a string that contains the concatenation of two or more strings. |
| indexOf | `(searchString: string, position?: number) => number` | ✅ | - | Returns the position of the first occurrence of a substring. |
| lastIndexOf | `(searchString: string, position?: number) => number` | ✅ | - | Returns the last occurrence of a substring in the string. |
| localeCompare | `{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }` | ✅ | - | Determines whether two strings are equivalent in the current locale.


Determines whether two strings are equivalent in the current or specified locale. |
| match | `(regexp: string | RegExp) => RegExpMatchArray` | ✅ | - | Matches a string with a regular expression, and returns an array containing the results of that search. |
| replace | `{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }` | ✅ | - | Replaces text in a string, using a regular expression or search string. |
| search | `(regexp: string | RegExp) => number` | ✅ | - | Finds the first substring match in a regular expression search. |
| slice | `(start?: number, end?: number) => string` | ✅ | - | Returns a section of a string. |
| split | `(separator: string | RegExp, limit?: number) => string[]` | ✅ | - | Split a string into substrings using the specified separator and return them as an array. |
| substring | `(start: number, end?: number) => string` | ✅ | - | Returns the substring at the specified location within a String object. |
| toLowerCase | `() => string` | ✅ | - | Converts all the alphabetic characters in a string to lowercase. |
| toLocaleLowerCase | `(locales?: string | string[]) => string` | ✅ | - | Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. |
| toUpperCase | `() => string` | ✅ | - | Converts all the alphabetic characters in a string to uppercase. |
| toLocaleUpperCase | `(locales?: string | string[]) => string` | ✅ | - | Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. |
| trim | `() => string` | ✅ | - | Removes the leading and trailing white space and line terminator characters from a string. |
| length | `number` | ✅ | - | Returns the length of a String object. |
| substr | `(from: number, length?: number) => string` | ✅ | - | Gets a substring beginning at the specified location and having the specified length. |
| valueOf | `() => string` | ✅ | - | Returns the primitive value of the specified object. |


---

## ShinyText

**File:** `C:/Users/kasstel/dev/Kyarda/src/UI-features/ShinyText/ShinyText.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| text | `string` | ✅ | - | - |
| disabled | `boolean` | ❌ | - | - |
| speed | `number` | ❌ | - | - |
| className | `string` | ❌ | - | - |


---

## StackingCards

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Production/stacking-cards.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 9)


---

