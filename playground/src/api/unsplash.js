import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 3bcf0a8ee72843d829c349faf9a45e091f8ac22e5a0061edcbd95d1ad6c071d9'
	}
});