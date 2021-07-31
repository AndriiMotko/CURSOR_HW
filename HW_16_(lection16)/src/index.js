import _ from 'lodash';

import maxPrice from './homeworks/hw1/hw1';
import getSumFromNToM from './homeworks/hw2/hw2';
import countLetter from './homeworks/hw3/hw3';
import {getPairs, students} from './homeworks/hw4/hw4';
import getAverage from './homeworks/hw5/hw5';
import {students as studentsInfo, getSubjects} from './homeworks/hw6/hw6';
import {getMyTaxes, ukraine} from './homeworks/hw7/hw7';
import ostap from './homeworks/hw8/hw8';
import getRandomChinese from './homeworks/hw11/hw11';
import getStarwarsInfo from './homeworks/hw13/hw13.js';
import './homeworks/hw13/hw13.css';




getStarwarsInfo();
console.log(`Максимальна ціна (чай/кава/торт) : ${maxPrice}`);
console.log(`Сума від 4 до 9 за мінусом парних чисел : ${getSumFromNToM(4, 9, true)}`);
console.log(`Рахуємо кількість літер "а" у слові "Асталавіста" : ${countLetter("а", "Асталавіста")}`);
console.log(`Формуємо пари студентів : ${getPairs(students)}`);
console.log(`Середнє число з ряду : ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Предмети студента Таня : ${getSubjects(studentsInfo[0])}`);
console.log(`Cума податків з зарплати для України : ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`Інформація про Остапа згенерованого через класи : ${ostap.getInfo()}`);
getRandomChinese(4).then((resault) => console.log(`Рандомні символи китайською : ${resault}`));


