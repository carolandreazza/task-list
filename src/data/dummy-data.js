import List from '../models/list';
import Task from '../models/tasks';

export const LISTS = [
  new List('l1', 'Italian'),
  new List('l2', 'Quick & Easy'),
  new List('l3', 'Hamburgers'),
  //new List('l4', 'German'),
  //new List('l5', 'Light & Lovely'),
  // new List('l6', 'Exotic'),
  // new List('l7', 'Breakfast'),
  // new List('l8', 'Asian'),
  // new List('l9', 'French'),
  // new List('l10', 'Summer')
];

export const TASKS = [
  new Task(
    't1',
    'l1',
    '4 Tomatoes',
    false
  ),
  new Task(
    't2',
    'l1',
    '1 Tablespoon of Olive Oil',
    false
  ),
  new Task(
    't3',
    'l1',
    '1 Onion',
    false
  ),
  new Task(
    't4',
    'l1',
    '250g Spaghetti',
    false
  ),
  new Task(
    't5',
    'l1',
    'Spices',
    false
  ),
  new Task(
    't6',
    'l1',
    'Cheese (optional)',
    false
  ),


  new Task(
    't11',
    'l2',
    '1 Slice White Bread',
    false
  ),
  new Task(
    't12',
    'l2',
    '1 Slice Ham',
    false
  ),
  new Task(
    't13',
    'l2',
    '1 Slice Pineapple',
    false
  ),
  new Task(
    't14',
    'l2',
    '1-2 Slices of Cheese',
    false
  ),
  new Task(
    't15',
    'l2',
    'Butter',
    false
  ),
  new Task(
    't16',
    'l2',
    'Butter',
    false
  ),
  new Task(
    't17',
    'l2',
    'Butter',
    false
  ),
  new Task(
    't18',
    'l2',
    'Butter',
    false
  ),
  new Task(
    't19',
    'l2',
    'Butter',
    false
  ),

  new Task(
    't20',
    'l2',
    'Butter',
    false
  ),

  new Task(
    't101',
    'l3',
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    false
  ),

  new Task(
    't102',
    'l4',
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    false
  ),

  new Task(
    't103',
    'l5',
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    false
  ),

  new Task(
    't104',
    'l6',
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    false
  ),

  new Task(
    't105',
    'l7',
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    false
  ),

  new Task(
    't106',
    'l8',
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    false
  ),

  new Task(
    't107',
    'l9',
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    false
  ),

  new Task(
    't108',
    'l10',
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    false
  )
];
