import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const SearchDropDown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // Fruit list with sample data
    const data = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Mango', value: 'mango' },
        { label: 'Orange', value: 'orange' },
        { label: 'Pineapple', value: 'pineapple' },
        { label: 'Strawberry', value: 'strawberry' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Favorite Fruit</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#6200EE' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select a fruit' : '...'}
                searchPlaceholder="Search..."
                value={selectedValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setSelectedValue(item.value);
                    setIsFocus(false);
                }}
            />
            <Text style={styles.description}>
                Fruits are a great source of essential vitamins and nutrients. Eating a variety of fruits like apples, bananas, and oranges can boost your immune system. Mangoes are rich in vitamin A, while strawberries are packed with antioxidants. Including pineapple in your diet improves digestion. Always choose fresh and seasonal fruits for the best health benefits. Make sure to wash them thoroughly before consumption. Eating fruits regularly keeps your skin glowing and your body energized.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333'
    },
    dropdown: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#fff'
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 8,
        borderColor: 'black',

    },
    iconStyle: {
        width: 20,
        height: 20
    },
    description: {
        marginTop: 20,
        fontSize: 16,
        lineHeight: 22,
        color: '#555'
    }
});

export default SearchDropDown;
