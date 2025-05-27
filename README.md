# Nova Moda

**Demo:** https://nova-moda.vercel.app

Nova Moda to przykładowy sklep internetowy z odzieżą i dodatkami, zbudowany w Next.js (App Router) i TypeScript, stworzony jako projekt do portfolio Front-end Developera.  

---

## Rzeczy do zrobienia
 - Strona Ulubione produkty
 - Footer
 - Przeniesienie Bestsellers do API
 - dorobienie zdjec do Damskich produktow
 - stworznie Formularza do reklamacji
 - dodanie loaderów do zdjec i czasu wczytania
 - usprawnienia wizualne
 - podpiecie filtrów do wyszkuwania

---

## Spis treści

1. [Opis projektu](#opis-projektu)  
2. [Funkcjonalności](#funkcjonalności)  
3. [Tech Stack](#tech-stack)  
4. [Instalacja](#instalacja)  
5. [Uruchamianie](#uruchamianie)  
6. [Struktura katalogów](#struktura-katalogów)  
7. [Rozszerzenia i dalszy rozwój](#rozszerzenia-i-dalszy-rozwoj)  
8. [Autor](#autor)  

---

## Opis projektu

Nova Moda to responsywny sklep z odzieżą damską i męską, w którym użytkownik może:
- przeglądać kategorie → podkategorie → produkty  
- wybierać rozmiary i ilości  
- dodawać produkty do koszyka  
- zmieniać ilość i rozmiar pozycji w koszyku  
- (demo nie zawiera backendu produkcyjnego — operacje koszyka symulowane są w API‐route’ach pamięciowych)

Projekt ma na celu pokazanie umiejętności:
- zaawansowanej struktury App Router (`app/`),  
- obsługi dynamicznych tras i parametrów (`[id]`, `searchParams`),  
- budowania globalnego stanu koszyka przez React Context + `useReducer`,  
- komunikacji front→API (fetch, NextResponse),  
- stylowania modułowego SCSS + Tailwind (opcjonalnie),  
- optymalizacji obrazów (`next/image`) i fontów (`next/font/google`),  
- animacji UI za pomocą `motion/react`.  

---

## Funkcjonalności

- **Listowanie kategorii** damskich i męskich  
- **Dynamiczne podkategorie** oraz generowanie odnośników `/men/1?size=...`  
- **Strona produktu** `/product/[id]` z galerią zdjęć  
- **Koszyk** z globalnym stanem, CRUD pozycji (dodaj, odejmij, usuń, zmień rozmiar/ilość)  
- **API routes** w `app/api/...` symulujące backend (metody GET / POST / PATCH / DELETE)  
- **Responsywność**: desktop & mobile (media queries + hook `useIsMobile`)  
- **Dostępność**: keyboard, aria-label, `readOnly`/`disabled`  
- **Optymalizacja fontów** (Google Lato via `next/font`)  

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)  
- **Styling:** CSS Modules (SCSS), opcjonalnie Tailwind  
- **State:** React Context + `useReducer`  
- **Animacje:** `motion/react`  
- **Ikony:** `lucide-react` (dynamiczne importy)  
- **Obrazy:** `next/image`  
- **API Routes:** Next.js App Router (`route.ts`)  
- **Deployment:** Vercel  

---

## Instalacja

1. **Sklonuj repozytorium**  
   ```bash
   git clone https://github.com/HaySsor/novaModa.git
   cd novaModa
