# Component Documentation

*Generated on 2025-12-08T16:21:21.091Z*

---

## App

**File:** `C:/Users/kasstel/dev/Kyarda/src/App.tsx`

**Export:** Named

### Hooks Used

- `useState` (line 21)
- `useEffect` (line 22)


---

## ArticlesSection

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/About/About.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 12)


---

## Experience

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Experience/Experience.tsx`

**Export:** Default


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

- `useEffect` (line 8)


---

## Mission

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Mission/Mission.tsx`

**Export:** Default


---

## StackingCards

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Production/stacking-cards.tsx`

**Export:** Default

### Hooks Used

- `useEffect` (line 9)


---

## Products

**File:** `C:/Users/kasstel/dev/Kyarda/src/sections/Products/Products.tsx`

**Export:** Default


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

## Modal

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/Modal/Modal.tsx`

**Export:** Named

### Hooks Used

- `useModal` (line 8)
- `useEffect` (line 11)


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

## ProductCard

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/ProductCard/ProductCard.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | `string` | ✅ | - | - |
| image | `string` | ✅ | - | - |
| salePrice | `number` | ✅ | - | - |
| firstPrice | `number` | ❌ | - | - |
| typeBoard | `string` | ❌ | - | - |
| thickness | `string` | ❌ | - | - |
| width | `string` | ❌ | - | - |
| description | `string` | ✅ | - | - |


---

## ProductCardPreview

**File:** `C:/Users/kasstel/dev/Kyarda/src/widgets/ProductCard/ProductCardPreview.tsx`

**Export:** Named

### Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | `string` | ✅ | - | - |
| image | `string` | ✅ | - | - |
| salePrice | `number` | ✅ | - | - |
| firstPrice | `number` | ❌ | - | - |
| typeBoard | `string` | ❌ | - | - |
| thickness | `string` | ❌ | - | - |
| width | `string` | ❌ | - | - |
| description | `string` | ✅ | - | - |

### Hooks Used

- `useModal` (line 8)


---

