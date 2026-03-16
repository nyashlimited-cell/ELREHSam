// Shared properties data for all pages
const allProperties = [
    { id: 'PROP-001', price: '₦120,000,000', location: 'Lekki, Lagos', lat: 6.4710, lng: 3.6325, image: 'https://images.unsplash.com/photo-1600607687644-c7f34b7e1b3b', desc: 'Luxury 5-bedroom villa' },
    { id: 'PROP-002', price: '₦85,000,000', location: 'Abuja, Nigeria', lat: 9.0765, lng: 7.3986, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994', desc: 'Modern 4-bedroom apartment' },
    { id: 'PROP-003', price: '₦65,000,000', location: 'Port Harcourt', lat: 4.8156, lng: 7.0498, image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c', desc: 'Spacious 3-bedroom home' },
    { id: 'PROP-004', price: '₦95,000,000', location: 'Lekki, Lagos', lat: 6.4710, lng: 3.6325, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', desc: 'Contemporary beachfront property' },
    { id: 'PROP-005', price: '₦75,000,000', location: 'Ikoyi, Lagos', lat: 6.4560, lng: 3.4245, image: 'https://images.unsplash.com/photo-1572120471610-0d82a82c3ab2', desc: 'Elegant 4-bedroom penthouse' },
    { id: 'PROP-006', price: '₦55,000,000', location: 'Maitama, Abuja', lat: 9.0820, lng: 7.4631, image: 'https://images.unsplash.com/photo-1570129477492-45a003537e1d', desc: 'Luxury gated estate villa' },
    { id: 'PROP-007', price: '₦48,000,000', location: 'Port Harcourt', lat: 4.8156, lng: 7.0498, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', desc: 'Modern 3-bedroom townhouse' },
    { id: 'PROP-008', price: '₦105,000,000', location: 'Banana Island, Lagos', lat: 6.4397, lng: 3.4081, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa', desc: 'Premium waterfront estate' },
    { id: 'PROP-009', price: '₦62,000,000', location: 'Kano', lat: 12.0022, lng: 8.5919, image: 'https://images.unsplash.com/photo-1580587771525-78991c7d7d1e', desc: 'Fine residential apartment' },
    { id: 'PROP-010', price: '₦88,000,000', location: 'Victoria Island, Lagos', lat: 6.4285, lng: 3.4216, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0dad', desc: 'Premium office/residence' },
    { id: 'PROP-011', price: '₦71,000,000', location: 'Enugu', lat: 6.5244, lng: 7.5228, image: 'https://images.unsplash.com/photo-1542144612-7cbca89fdd86', desc: 'Spacious family compound' },
    { id: 'PROP-012', price: '₦110,000,000', location: 'Asokoro, Abuja', lat: 9.0737, lng: 7.4672, image: 'https://images.unsplash.com/photo-1523217582562-430f63602f47', desc: 'Exclusive diplomatic estate' }
];

// Get unique locations with property count
function getLocations() {
    const locationsMap = {};
    allProperties.forEach(prop => {
        if (!locationsMap[prop.location]) {
            locationsMap[prop.location] = { name: prop.location, count: 0, sample: prop.image };
        }
        locationsMap[prop.location].count++;
    });
    return Object.values(locationsMap).sort((a, b) => b.count - a.count);
}

// Get properties by location
function getPropertiesByLocation(location) {
    return allProperties.filter(prop => prop.location === location);
}

// Get all locations as string patterns for filtering
function getAllLocations() {
    return [...new Set(allProperties.map(p => p.location))];
}
