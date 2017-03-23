/*
2. Abstrakcyjna baza danych z użyciem localStorage
Korzystając z API localStorage, stwórz kolejną warstwę abstrakcji, która pozwoli pracować z tym interfejsem w taki sposób, aby możliwe było tworzenie nazywanych baz danych.
Dane powinny być zapisywane poprzez ich konwersję na JSON, a odczytywane poprzez parsowanie. Przykładowe użycie takiej bazy danych może wyglądać następująco: http://pastebin.com/6nntRLRn
*/


function LocalDB(dbName){

    this.name = dbName;

}

LocalDB.prototype.save = function(key, val){
    window.localStorage.setItem(this.name + "." + key, JSON.stringify(val)); 
}

LocalDB.prototype.get = function(key){
    return JSON.parse(window.localStorage.getItem(this.name + "." + key));     
}




// Tworzona jest nowa instancja,
// w której należy zapamiętać nazwę "DB1"
var DB1 = new LocalDB("DB1");
 
// Jakiś obiekt do zapisania
var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};
 
// Na prototypie LocalDB znajdować się musi metoda save, która przyjmuje parę klucz-wartość, a wartość powinna być przed zapisaniem przepuszczona przez JSON.stringify
DB1.save("janek", janek);
 
// Prototyp LocalDB powinien również posiadać metodę get, która odczyta podany klucz, przepuszczając wartość przez JSON.parse
console.dir(DB1.get("janek"));

// Porada. Aby można było tworzyć bazy danych o różnych nazwach, przy zapisywaniu poszczególnych danych, do klucza dodawaj nazwę bazy danych, np. "DB1.janek"