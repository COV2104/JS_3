// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// Создание объекта musicCollection
const musicCollection = {
  albums: [
    { title: "The Show Must Go On", artist: "Queen", year: "1991" },
    { title: "Hotel California", artist: "Eagles", year: "1977" },
    { title: "It's My Life ", artist: "Bon Jovi", year: "1995" },
  ],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return { value: this.albums[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Вывод альбомов на консоль с помощью цикла for...of
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
