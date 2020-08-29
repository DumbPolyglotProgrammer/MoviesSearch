import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import tmdb from '../api/tmdb';

const DetailsScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails(id);
  }, []);

  const fetchDetails = async (id) => {
    try {
      const detailsResponse = await tmdb.get(`/movie/${id}`);
      setDetails(detailsResponse.data);
    } catch (error) {
      // TODO : show some kind of toast.
    }
  };

  if (!details) {
    return null;
  }

  return (
    <>
      <Text>{details.tagline}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
