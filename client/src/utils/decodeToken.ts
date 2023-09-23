import jwt from 'jwt-decode'
// Function to decode a JWT token
function decodeToken( ) {
  try {
    const token = localStorage.getItem('token') as string
    const decoded = jwt(token);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
}



export default decodeToken