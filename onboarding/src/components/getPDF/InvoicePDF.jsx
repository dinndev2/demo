import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ItemsTable from './ItemsTable';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000000',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#666666',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  infoRow: {
    marginBottom: 6,
  },
  label: {
    fontSize: 8,
    color: '#666666',
    marginBottom: 3,
    letterSpacing: 0.3,
  },
  value: {
    fontSize: 10,
    color: '#333333',
    marginBottom: 8,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 25,
    marginBottom: 25,
  },
  billToSection: {
    marginTop: 10,
  },
});

const InvoicePDF = ({ billFrom, client, total, items }) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.header}>INVOICE</Text>
        </View>

        {/* Invoice Info */}
        <View style={styles.section}>
          <Text style={styles.label}>Date: {currentDate}</Text>
        </View>

        {/* Bill From Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FROM</Text>
          <Text style={styles.name}>{billFrom.name}</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{billFrom.address}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{billFrom.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{billFrom.email}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bill To Section */}
        <View style={[styles.section, styles.billToSection]}>
          <Text style={styles.sectionTitle}>BILL TO</Text>
          <Text style={styles.name}>{client.name}</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.value}>{client.address}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{client.phone}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{client.email}</Text>
          </View>
        </View>

        {/* Items Table */}
        <ItemsTable 
          items={items.map((item, index) => ({
            name: item.day,
            notes: item.notes,
            quantity: index + 1,
            price: 100
          }))} 
          total={total} 
        />
      </Page>
    </Document>
  );
};

export default InvoicePDF;