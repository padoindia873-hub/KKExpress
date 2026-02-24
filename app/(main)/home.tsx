import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { services } from '../../constants/servicesData';
import ServiceCard from '../../components/ServiceCard';
import Banner from '../../components/Banner';
import Colors from '../../constants/Colors';

export default function Home() {

  const [search, setSearch] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredServices = useMemo(() => {
    return services.filter(service =>
      service.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const categories = [...new Set(filteredServices.map(item => item.category))];

  const toggleCategory = (category:any) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList

        ListHeaderComponent={
          <View style={styles.headerContainer}>

            {/* ⭐️ LOGO HEADER */}
            <View style={styles.logoContainer}>
              <View style={styles.logoBox}>
                <Image
                  source={require('../../assets/images/icon.png')}
                  style={styles.logo}
                />
              </View>

              <Text style={styles.appName}>KK EXPRESS</Text>
            </View>

            <Text style={styles.greeting}>Fast & Reliable Urban Services👋</Text>

            {/* ⭐️ SEARCH BAR */}
            <View style={styles.searchContainer}>
              <Ionicons name="search-outline" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search services..."
                placeholderTextColor="#aaa"
                value={search}
                onChangeText={setSearch}
              />
            </View>

            {/* ⭐️ BANNER */}
            <Banner />

            <Text style={styles.sectionTitle}>All Categories</Text>

          </View>
        }

        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item: category }) => {

          const categoryServices = filteredServices.filter(
            service => service.category === category
          );

          const isExpanded = expandedCategory === category;

          const servicesToShow = isExpanded
            ? categoryServices
            : categoryServices.slice(0, 4);

          return (
            <View style={styles.categoryContainer}>

              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category}</Text>

                <TouchableOpacity onPress={() => toggleCategory(category)}>
                  <Text style={styles.viewAll}>
                    {isExpanded ? 'Show Less' : 'View All'}
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={servicesToShow}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ServiceCard service={item} />
                )}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.row}
              />

            </View>
          );
        }}

        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  /* ⭐️ LOGO */
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  logoBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },

  logo: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },

  appName: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.primary,
    marginLeft: 14,
  },

  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 14,
  },

  /* ⭐️ SEARCH */
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 18,
    elevation: 6,
    marginBottom: 20,
    height: 52,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  /* ⭐️ CATEGORY */
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 14,
  },

  categoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: '800',
  },

  viewAll: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

});