# wymagane zależności

 * nodejs 
 * npm

# techstack

Techstack to zestaw narzędzi którymi będziemy się posługiwać w celu zbudowania aplikacji.
Naszym wyborem będzie MERN czyli:

M - MongoDB
E - Express
R - React
N - NodeJS

i do tego szystkiego dodamy typescript który pozwoli nam utrzymać wszystko w porządanym i bezpiecznym szyku.

Częścią odpowiadającą za backend w tym tech stacku będzie MongoDB oraz Express a za frontend React.

NodeJS będzie naszym runtime-em ponieważ jest wystarczająco szybki dzięki wbudowanemu silnikowi V8 oraz posiada package manager (npm) który zawiera wszystkie pakiety potrzebne nam do stworzenia tej aplikacji. Oczywiście NodeJS natywnie wspiera tylko javascript więc wsparcie typescriptu trzeba będzie doinstalować (`npm install typescript`), tak samo z wszystkimi pakietami które wymagają wersji domyślnej i poprzedzonej prefixem `@types/` (np express wymaga instalacji obu wersji do poprawnego działania w aplikacji z typescriptem).

Dokumentacje elementów techstack-u:

Typescript -> https://typescriptlang.org
MongoDB -> https://mongodb.com
Express -> https://expressjs.com
React -> https://reactjs.org
NodeJS -> https://nodejs.org

Notka: w środowisku/projekcie jest zainstalowany pre-procesor SCSS który pozwala nam pisać ulepszoną wersję CSS, która ma dodane kilka fajnych usprawnień ale nie różni się zbytnio od natywnego CSS.

# środowisko dev

```
npm run start
```

# build

```
npm run build
```

# commit-y / push-e

Nie róbcie commit-ów i push-y które nie posiadają wcześniej przetestowanego kodu ponieważ może to doporowadzić do późniejszych problemów z integracją między backend-em a frontend-em.

Test brach/dev branch nie istnieje, możecie posiadać takowe lokalnie.

# integracja backend-frontend

Integracja pomiędzy tymi dwiema częściami aplikacji wymaga dokładnych ustaleń co do struktury zapytań jakie będą wykonywane między klientem a serwerem. Posługujmy się w backend-zie stylem API typu REST, dzięki temu będziemy mogli sprawnie przesyłać duże ilości danych w postaci JSON-ów. Typescript ma silne typowanie a więc JSON też musi mieć ustaloną wcześniej strukturę tak aby nie następowała kolizja typów po którejś z stron.

# struktura plików i folderów

Foldery:
 * foldery public, src i backend są na kod 
 * folder project zawiera pliki w których opiszemy co trzeba zrobić w każdej kwestii oraz zorganizujemy podział zadań
 * folderu node_modules i .git nie ruszać

Pliki:
 * pliki typescript-u w frontend-zie będą nosily rozszerzenie .tsx (typescript extended / typescript xml), a w backend-zie .ts, jest to zwykłe zapewnienie rozróżnienia między częściami aplikacji.
 * 
    * Frontend: pliki z stylami (CSS/SCSS) powinny nosić nazwę posiadanego komponentu pisaną z małej litery natomiast pliki z komponentami powinny być napisane z dużej litery, pliki z funkcjami ogólnymi / posiadające klasy / pliki z interfejsami / pliki z typami powinny się znajdować w osobnych folderach o tej samej nazwie co plik a sam plik powinien mieć nazwę pisaną z małej litery
    * Backend: główny plik z runtimem Express powinien nosić nazwę index.ts bądź main.ts natomiast struktura reszty plików jest dowolna, rekomenduję przetrzymywanie interfejsów / typów w osobnym pliku.