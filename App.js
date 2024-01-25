import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const recipes = [
  {
    id: '1',
    title: 'Spaghetti Bolognese',
    image: require('./images/spaghetti-bolognese-recipe.jpg'),
    ingredients: ['Spaghetti', 'Tomato Sauce', 'Ground Beef', 'Onion', 'Garlic'],
    instructions: 'Cook spaghetti. Brown beef and onions. Add tomato sauce and garlic. Combine and simmer.',
  },
  {
    id: '2',
    title: 'Chicken Stir Fry',
    image: require('./images/Chicken-Stir-Fry.jpg'),
    ingredients: ['Chicken Breast', 'Broccoli', 'Carrots', 'Soy Sauce', 'Garlic'],
    instructions: 'Cook chicken. Stir-fry vegetables. Add soy sauce and garlic. Combine and serve.',
  },
  {
    id: '3',
    title: 'Margherita Pizza',
    image: require('./images/margheritaPizza.jpg'),
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Fresh Mozzarella', 'Basil', 'Olive Oil'],
    instructions: 'Roll out pizza dough. Spread tomato sauce. Add mozzarella and basil. Bake until crust is golden.',
  },
  {
    id: '4',
    title: 'Vegetable Curry',
    image: require('./images/vegetable_curry.jpg'),
    ingredients: ['Mixed Vegetables', 'Curry Paste', 'Coconut Milk', 'Rice'],
    instructions: 'Cook mixed vegetables. Mix curry paste with coconut milk. Combine and simmer. Serve with rice.',
  },
  {
    id: '5',
    title: 'Chocolate Chip Cookies',
    image: require('./images/chocolate_chip_cookies.jpg'),
    ingredients: ['Flour', 'Butter', 'Sugar', 'Chocolate Chips', 'Vanilla Extract'],
    instructions: 'Cream butter and sugar. Add flour, chocolate chips, and vanilla extract. Bake until golden brown.',
  },
  {
    id: '6',
    title: 'Caesar Salad',
    image: require('./images/caesar_salad.jpg'),
    ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan Cheese', 'Caesar Dressing'],
    instructions: 'Toss lettuce with croutons, Parmesan cheese, and Caesar dressing. Serve chilled.',
  },
  {
    id: '7',
    title: 'Pancakes',
    image: require('./images/pancakes.jpg'),
    ingredients: ['Flour', 'Milk', 'Eggs', 'Baking Powder', 'Maple Syrup'],
    instructions: 'Mix flour, milk, eggs, and baking powder. Cook on a griddle. Serve with maple syrup.',
  },
  // Add more recipes as needed
];

const RecipeBook = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedRecipe(item)}>
      <View style={styles.recipeItem}>
        <Image source={item.image} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderRecipeDetails = () => {
    if (!selectedRecipe) return null;

    return (
      <View style={styles.recipeDetails}>
        <Image source={selectedRecipe.image} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{selectedRecipe.title}</Text>
        <Text style={styles.recipeInstructions}>{selectedRecipe.instructions}</Text>
        <Text style={styles.recipeIngredients}>
          Ingredients: {selectedRecipe.ingredients.join(', ')}
        </Text>
        <TouchableOpacity onPress={() => setSelectedRecipe(null)}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recipe Book</Text>
      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      {renderRecipeDetails()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 50,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recipeItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
  },
  recipeDetails: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    padding: 16,
    zIndex: 1,
  },
  recipeInstructions: {
    fontSize: 16,
    marginBottom: 8,
  },
  recipeIngredients: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RecipeBook;
