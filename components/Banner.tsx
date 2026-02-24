import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

const { width } = Dimensions.get('window');

interface BannerItem {
  id: string;
  source: any;
  title: string;
  subtitle: string;
}

const banners: BannerItem[] = [
  {
    id: '1',
    source: require('../assets/images/Laptop.jpg'),
    title: '🔥 20% OFF',
    subtitle: 'On Your First Booking',
  },
  {
    id: '2',
    source: require('../assets/images/Laptop2.jpeg'),
    title: '⚡️ Fast Home Services',
    subtitle: 'Book Trusted Professionals',
  },
  {
    id: '3',
    source: require('../assets/images/beauty.jpeg'),
    title: '💄 Beauty Services',
    subtitle: 'Salon At Home',
  },
  {
    id: '4',
    source: require('../assets/images/clean.jpeg'),
    title: '💡 cleaning Services',
    subtitle: 'Expert Cleaning Professionals',
  },
  {
    id: '5',
    source: require('../assets/images/education.jpeg'),
    title: '🚰 Education Services',
    subtitle: 'Tutoring & Academic Support',
  },
  {
    id: '6',
    source: require('../assets/images/cleaning.avif'),
    title: '🧹 Deep Cleaning',
    subtitle: 'Bathroom & Kitchen Cleaning',
  },
  {
    id: '7',
    source: require('../assets/images/home repair.jpeg'),
    title: '❄️ AC Repair & Installation',
    subtitle: 'Quick & Reliable Service',
  },
  {
    id: '8',
    source: require('../assets/images/carpenter.jpg'),
    title: '🪚 Carpenter Services',
    subtitle: 'Furniture & Door Repair',
  },
  {
    id: '9',
    source: require('../assets/images/healthcare.webp'),
    title: '🏥 Healthcare at Home',
    subtitle: 'Doctor & Lab Tests',
  },
  {
    id: '10',
    source: require('../assets/images/diagonostic.jpeg'),
    title: '🧪 Full Body Checkup',
    subtitle: 'Blood Test at Home',
  },
  {
    id: '11',
    source: require('../assets/images/pharmacy.jpeg'),
    title: '💊 Online Medicine Order',
    subtitle: 'Fast Delivery',
  },
  {
    id: '12',
    source: require('../assets/images/event.jpeg'),
    title: '🎉 Event Decoration',
    subtitle: 'Wedding & Birthday Setup',
  },
  {
    id: '13',
    source: require('../assets/images/interior.jpeg'),
    title: '🏠 Home Decoration',
    subtitle: 'Interior & Wallpaper Setup',
  },
  {
    id: '14',
    source: require('../assets/images/repair.jpeg'),
    title: '🔧 Appliance Repair',
    subtitle: 'Fridge, TV, Washing Machine',
  },
  {
    id: '15',
    source: require('../assets/images/emergency.jpg'),
    title: '🚨 Emergency Support',
    subtitle: 'Police, Ambulance, Fire',
  },
];

const Banner: React.FC = () => {
  const flatListRef = useRef<FlatList<BannerItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;

      if (nextIndex >= banners.length) {
        nextIndex = 0;
      }

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setCurrentIndex(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(slideIndex);
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.source}
            style={styles.image}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </ImageBackground>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },

  image: {
    width: width,
    height: 400,
    justifyContent: 'flex-end',
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 6,
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#4A6CF7',
    width: 18,
  },
});