import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
    width: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
  },
  headerText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 4,
    paddingRight: 4,
  },
  description: {
    width: '50%',
    fontSize: 9,
    color: '#333333',
    paddingLeft: 8,
  },
  quantity: {
    width: '15%',
    fontSize: 9,
    color: '#333333',
    textAlign: 'right',
    paddingRight: 8,
  },
  price: {
    width: '17.5%',
    fontSize: 9,
    color: '#333333',
    textAlign: 'right',
    paddingRight: 8,
  },
  amount: {
    width: '17.5%',
    fontSize: 9,
    color: '#333333',
    textAlign: 'right',
    paddingRight: 8,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    paddingTop: 12,
    paddingBottom: 12,
  },
  totalLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 20,
  },
  totalAmount: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    minWidth: 80,
    textAlign: 'right',
  },
})

const ItemsTable = ({ items, total }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <View style={styles.table}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={[styles.description, styles.headerText]}>Description</Text>
        <Text style={[styles.quantity, styles.headerText]}>Qty</Text>
        <Text style={[styles.price, styles.headerText]}>Unit Price</Text>
        <Text style={[styles.amount, styles.headerText]}>Amount</Text>
      </View>

      {/* Data Rows */}
      {items.map((item, index) => {
        const itemTotal = item.quantity * item.price;
        return (
          <View key={index} style={styles.dataRow}>
            <Text style={styles.description}>
              Day {item.name} - {item.notes}
            </Text>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Text style={styles.price}>{formatCurrency(item.price)}</Text>
            <Text style={styles.amount}>{formatCurrency(itemTotal)}</Text>
          </View>
        );
      })}

      {/* Total Row */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
      </View>
    </View>
  );
}

export default ItemsTable;