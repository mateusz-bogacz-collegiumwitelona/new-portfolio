# Modern Tech Portfolio - Mateusz Bogacz-Drewniak

Nowoczesne, responsywne portfolio deweloperskie zbudowane z wykorzystaniem najnowszych technologii webowych. Projekt łączy w sobie estetykę "Premium Tech" z pełną funkcjonalnością wielojęzyczności oraz dynamicznym pobieraniem danych.

## Główne Funkcje

- **Multi-language Support**: Pełna obsługa języka polskiego i angielskiego za pomocą `next-intl`.
- **Dark & Light Mode**: System motywów z płynnymi przejściami obsługiwany przez `next-themes`.
- **3D Hero Section**: Dynamiczne tło animowane w czasie rzeczywistym przy użyciu `Vanta.js` (Three.js), reagujące na zmianę motywu.
- **GitHub API Integration**: Automatyczne pobieranie informacji o wybranych repozytoriach, opisów oraz użytych technologii.
- **Responsive Design**: Pełna responsywność (Mobile-First) zbudowana w Tailwind CSS v4.
- **Formularz Kontaktowy**: W pełni funkcjonalna obsługa wiadomości zintegrowana z Formspree.

## Stack Technologiczny

- **Framework**: [Next.js 16]
- **Stylizowanie**: [Tailwind CSS v4]
- **Animacje**: [Framer Motion]
- **Język**: [TypeScript]
- **Biblioteki**:
  - `next-intl` (i18n)
  - `next-themes` (Dark Mode)
  - `lucide-react` (Icons)
  - `vanta` & `three.js` (3D Background)
  - `headlessui` (Modals/Navigation)

## Inspiracja

Projekt powstał w oparciu o estetykę i strukturę szablonu [Frontend Developer Portfolio](https://github.com/niladri-1/Frontend-develope-portfolio), który posłużył jako fundament do stworzenia własnej, rozbudowanej wersji opartej na nowoczesnym stacku Next.js.

## Instalacja i Uruchomienie

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/twoj-nick/portfolio.git
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Skonfiguruj zmienne środowiskowe w pliku .env.local:

   ```bash
   GITHUB_TOKEN=wkleij_swój_token
   ```

4. Uruchom serwer developerski:

   ```bash
   npm run dev
   ```

5. Otwórz `http://localhost:3000` w przeglądarce.
