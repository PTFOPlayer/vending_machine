// to jest plik przykładowy który nie powinien być importowany pod żadnym pozorem


// importowanie react, podstawa pisania z użyciem TSX
import React from "react";

// przykladowy interfejs
interface kitten {
    name: String,
    age: number,
    // zmienna która nie musi zostać użyta i nie wpywa na wydajność
    color?: number 
    // użycie inerfejsu w interfejsie
    parents: parents | undefined // undefined jest podobny do null ale dalej oznacza coś minimalnie innego
}

// makro typu
type parent = {
    name: string
    age: number
}

// używanie typu w interfejsie
interface parents {
    parent1: parent
    parent2: parent
}

// PS. przecinek w interfejsach nie musi być używany

// normalna nie exportowana funkcja zwracająca number + 1
function otherFunction(e: number) : number {
    return e + 1;
}

// to samo co powyższa funkcja
let otherLambda = (e:number) : number => {
    return e + 1;
}


// deklaratory zmiennych
const global1 = 10; // stała 
let global2 = 10; // zmienna
var global3 = 10; // zmienna ale inaczej się nazywa

//funkcja exportowana jako priorytetowa, ma taką samą nazwę jak plik
export default function Example() {
    
    // element stanu, setState jest tutaj funkcją 
    // state jest tutaj zmienną która przy zmianie wartości powoduje ponowne wyrenderowanie elementu HTML w którym się znajduje
    // normalna zmienna w przeciwieństwie do tej tak nie działa
    // będzie na masę używane przy przyciskach i wszelkich rzeczach które się zmieniają podczas używania strony
    const [state, setState] = React.useState<number>(0) // domyślna wartość to 0 typu number

    // useEffect, sprawdza czy komponent został zaktualizowany a następnie wykonuje kod który jest w środku
    React.useEffect(() => {
        console.log('state changed')    
    }, [state]) // element który musi się zmienić żeby kod został wykonany
    
    // to samo co wyżej tylko wyłapuje każdą zmianę
    React.useEffect(() => {
        console.log('something has changed')
    })

    // to samo co wyżej tylko wywołuje się na ładowaniu strony
    React.useEffect(() => {
        console.log('site loaded')
    }, [])

    // WAŻNE -> useEffect wykonuje sie też zawsze przy odpaleniu strony 


    // ustawienie state na 10 za pomocą set state
    setState(10);

    // tablica liczb z zadeklarowanym typem
    let arr: Array<number> = [1,2,3,4,5,6,7]

    let inter: kitten = {
        name: "kotek",
        age: 1,
        parents: undefined
    }

    let not_a_number: number = NaN // NaN oznacza not a number i jest liczbą którą podzielono przez 0

    let a_as_number: number = 10.000000001 // a jako numer
    let a_as_string = a_as_number.toString() // zamiana na stringa, można wykonać na każdym typie prymitywnym
    let a_limited = a_as_number.toPrecision(5) // ograniczenie do 5 miejsc łącznie (tj suma miejsc po i przed przecinkiem)
    let a_as_int = a_as_number.toFixed() // upewnienie się że to int 

    //lambda expression, taka funkcja przypisana do zmiennej
    let lambda = (e:number, key: number) => {
        return (
            <p key={key /* ID elementu, powinno by używane w .map  */}>
                {e /* w tych nawiasach wywołujemy kod JS który ma być wewnątrz tagów */ }
            </p>
        )
    }

    return (<>
        <div>
            <h1>Hi from example</h1>
            <p>i am example file</p>
            {
                // wywoływanie .map na tablicy, przypisując każdzemu elementowi dedykowany kawałek kodu niezależnie od długości tablicy
                arr.map((e, key)=> lambda(e, key))
            }
        </div>
    </>)
}

//  h1..h6 -> tagi tytułowe
//  p -> tag paragrafowy
//  span -> tag p ale upierdliwy i staramy się nie używć
//  br -> nowa linia, można używać w p

//  a -> tag od linków

//  ul -> lista, powinien mieć subelement li
//  li -> element listy

//  i -> tag ikony, będziemy używać z ikonami of fontawesome
//  img -> tag z obrazem, będziemy używać do wsadzania zdjęć

//  div -> tag sekcji, służy do dzielenia strony na sekcje oraz nadawania jej odpowiedniego krztałut
//  <></> -> tag 'void' zwraca nic