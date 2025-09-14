import { useEffect, useRef, useState } from 'react';

export default function PlacePicker({ onSelect, defaultValue = "Zagreb, Croatia" }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    // Set default origin coordinates for Zagreb
    if (onSelect && defaultValue === "Zagreb, Croatia") {
      onSelect({
        lat: 45.815,
        lng: 15.9819,
        address: "Zagreb, Croatia",
        name: "Zagreb"
      });
    }
  }, [onSelect, defaultValue]);

  useEffect(() => {
    // Initialize Google Places Autocomplete
    const initializeAutocomplete = () => {
      if (!window.google || !window.google.maps) {
        console.error('Google Maps API not loaded');
        return;
      }

      if (!inputRef.current) {
        console.error('Input ref not available');
        return;
      }

      try {
        // Create autocomplete instance
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ['geocode'],
            componentRestrictions: { country: 'hr' }, // Restrict to Croatia
          }
        );

        // Set up place changed listener
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          
          console.log('Origin place selected:', place);

          if (!place || !place.geometry) {
            console.error('No geometry found for place');
            return;
          }

          const location = place.geometry.location;
          const selectedPlace = {
            lat: location.lat(),
            lng: location.lng(),
            address: place.formatted_address || place.name,
            name: place.name,
            place_id: place.place_id
          };

          console.log('Formatted origin data:', selectedPlace);
          
          // Update input value
          setInputValue(place.formatted_address || place.name);
          
          // Call parent callback
          if (onSelect) {
            onSelect(selectedPlace);
          }
        });

        console.log('Google Places Autocomplete initialized for origin');
      } catch (error) {
        console.error('Error initializing origin autocomplete:', error);
      }
    };

    // Check if Google Maps is loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initializeAutocomplete();
    } else {
      // Wait for Google Maps to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(checkGoogleMaps);
          initializeAutocomplete();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkGoogleMaps);
      }, 10000);
    }

    // Cleanup function
    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [onSelect]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    // Prevent form submission on Enter key
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter pickup location..."
      className="form-control"
      style={{ width: '100%' }}
    />
  );
}