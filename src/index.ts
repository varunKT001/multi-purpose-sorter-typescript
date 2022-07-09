import { CharactersCollection } from './collections/CharactersCollection';
import { LinkedList } from './collections/LinkedList';
import { NumbersCollection } from './collections/NumbersCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumbersCollection([5, -10, 10, 5]);
numberCollection.sort();

const characterCollection = new CharactersCollection('varun');
characterCollection.sort();

const linkedList = new LinkedList().add(2).add(4).add(1).add(5);
linkedList.sort();

console.log(numberCollection.data);
console.log(characterCollection.data);
linkedList.print();
