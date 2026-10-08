import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

interface ProfileCardProps {
  name: string;
  bio: string;
  city: string;
  avatar: any;
  postsCount: number;
  followersCount: number;
  followingCount: number;
}

export default function ProfileCard({
  name,
  bio,
  city,
  avatar,
  postsCount,
  followersCount,
  followingCount,
}: ProfileCardProps) {
  
  const handleMessagePress = () => {
    Alert.alert("Mesaj Gönderildi", `${name}'a mesaj gönderildi!`);
  };

  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.avatar} />
      
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      
      <View style={styles.locationContainer}>
        <Text style={styles.city}>{city}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{postsCount}</Text>
          <Text style={styles.statLabel}>Gönderi</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{followersCount}</Text>
          <Text style={styles.statLabel}>Takipçi</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{followingCount}</Text>
          <Text style={styles.statLabel}>Takip</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleMessagePress}>
        <Text style={styles.buttonText}>Mesaj Gönder</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  city: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#eee',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF1493', // Canlı pembe
  },
  statLabel: {
    fontSize: 12,
    color: '#FF69B4', // Yumuşak pembe
    marginTop: 2,
  },
  button: {
    backgroundColor: '#8A2BE2', // Mor buton
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});