import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProfileCard from './ProfilKarti';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Kişisel Profil</Text>
      
      <ProfileCard
        name="İnci Nisa Yurtsever"
        bio="🪐🐈‍⬛"
        city="Kahramanmaraş"
        avatar={{ uri: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400' }}
        postsCount={0}
        followersCount={150}
        followingCount={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
});