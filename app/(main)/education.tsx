import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  TextInput,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/Colors";

const popularCourses = [
  {
    id: "1",
    title: "UPSC CSE Full Course",
    instructor: "Dr. Roman Saini",
    rating: 4.9,
    students: "2.4L+",
    price: 49999,
  },
  {
    id: "2",
    title: "SSC CGL Complete Batch",
    instructor: "Abhinay Sharma",
    rating: 4.8,
    students: "1.8L+",
    price: 9999,
  },
  {
    id: "3",
    title: "Python for Beginners",
    instructor: "CodeWithHarry",
    rating: 4.7,
    students: "5.1L+",
    price: 2999,
  },
  {
    id: "4",
    title: "Bank PO Preparation",
    instructor: "Adda247 Team",
    rating: 4.8,
    students: "3.2L+",
    price: 7999,
  },
];

const govtExams = [
  "UPSC CSE",
  "SSC CGL",
  "IBPS PO",
  "RRB NTPC",
  "NDA",
  "CDS",
  "CTET",
  "State PSC",
];

const skillCategories = [
  { id: "1", name: "Coding & Tech", icon: "code-slash-outline", count: 120 },
  { id: "2", name: "English Speaking", icon: "chatbubbles-outline", count: 85 },
  { id: "3", name: "Marketing", icon: "megaphone-outline", count: 65 },
  { id: "4", name: "Soft Skills", icon: "people-outline", count: 45 },
  { id: "5", name: "Finance", icon: "cash-outline", count: 38 },
  { id: "6", name: "Govt Jobs", icon: "school-outline", count: 210 },
];

export default function EducationScreen() {
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* Top Search */}
      <View style={styles.topSearch}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses, exams..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
          />
        }
      >
        {/* Hero */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
            }}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>
              Padhai Jo Aapko Aage Badhaye
            </Text>

            <Text style={styles.heroSubtitle}>
              India's best courses for Govt Jobs & Skills
            </Text>

            <TouchableOpacity style={styles.heroBtn}>
              <Text style={styles.heroBtnText}>Start Learning Free</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <FlatList
            data={[
              { title: "Govt Exams", icon: "school-outline" },
              { title: "Live Classes", icon: "videocam-outline" },
              { title: "Mock Tests", icon: "document-text-outline" },
              { title: "Free Resources", icon: "book-outline" },
            ]}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.actionCard}>
                <View style={styles.actionIcon}>
                  <Ionicons
                    name={item.icon}
                    size={26}
                    color={COLORS.primary}
                  />
                </View>
                <Text style={styles.actionTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Popular Courses */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Courses</Text>

          <FlatList
            horizontal
            data={popularCourses}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.courseCard}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400",
                  }}
                  style={styles.courseImage}
                />

                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle} numberOfLines={2}>
                    {item.title}
                  </Text>

                  <Text style={styles.instructor}>
                    {item.instructor}
                  </Text>

                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.rating}>
                      {item.rating} • {item.students}
                    </Text>
                  </View>

                  <Text style={styles.coursePrice}>
                    ₹{item.price.toLocaleString()}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        {/* Exams */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Govt Competitive Exams
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {govtExams.map((exam, index) => (
              <View key={index} style={styles.examChip}>
                <Text style={styles.examText}>{exam}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skill Development</Text>

          <FlatList
            data={skillCategories}
            numColumns={3}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.skillCard}>
                <View style={styles.skillIcon}>
                  <Ionicons
                    name={item.icon}
                    size={26}
                    color={COLORS.primary}
                  />
                </View>

                <Text style={styles.skillName}>{item.name}</Text>
                <Text style={styles.skillCount}>
                  {item.count}+ courses
                </Text>
              </View>
            )}
          />
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  topSearch: {
    padding: 16,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    elevation: 3,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
  },

  hero: {
    height: 220,
    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  heroOverlay: {
    position: "absolute",
    bottom: 24,
    left: 24,
    right: 24,
  },

  heroTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#fff",
  },

  heroSubtitle: {
    color: "#fff",
    marginTop: 6,
    marginBottom: 16,
  },

  heroBtn: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  heroBtnText: {
    color: "#fff",
    fontWeight: "700",
  },

  section: {
    padding: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },

  actionCard: {
    flex: 1,
    alignItems: "center",
    padding: 14,
  },

  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  actionTitle: {
    fontSize: 13,
    textAlign: "center",
  },

  courseCard: {
    width: 240,
    marginRight: 14,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    overflow: "hidden",
  },

  courseImage: {
    width: "100%",
    height: 140,
  },

  courseInfo: {
    padding: 12,
  },

  courseTitle: {
    fontWeight: "700",
  },

  instructor: {
    color: "#666",
    fontSize: 13,
  },

  ratingRow: {
    flexDirection: "row",
    marginTop: 6,
  },

  rating: {
    marginLeft: 4,
    color: "#FFD700",
  },

  coursePrice: {
    color: COLORS.primary,
    fontWeight: "700",
    marginTop: 6,
  },

  examChip: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },

  examText: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  skillCard: {
    flex: 1,
    margin: 6,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },

  skillIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  skillName: {
    fontWeight: "600",
    textAlign: "center",
  },

  skillCount: {
    fontSize: 12,
    color: "#666",
  },
});