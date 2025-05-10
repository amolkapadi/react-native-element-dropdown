import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
const DropdownSelect = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    // Sample data for the dropdown
    const data = [
        { label: 'JavaScript', value: '1' },
        { label: 'React Js', value: '2' },
        { label: 'Node Js', value: '3' },
        { label: 'HTML', value: '4' },
        { label: 'CSS', value: '5' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Subject</Text>
            <Dropdown
                style={styles.dropdown}
                data={data}
                labelField='label'
                valueField='value'
                placeholder='Select an option'
                value={selectedValue}
                onChange={item => {
                    setSelectedValue(item.value);
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8
    }
});

export default DropdownSelect;